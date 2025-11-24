#!/bin/bash
set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <version> [api-list...]" >&2
  echo "Example: $0 2.0.0-RC2            # downloads api-v1 and api-v2" >&2
  echo "         $0 2.0.0-RC2 api-v1     # downloads only api-v1" >&2
  exit 1
fi

VERSION="$1"
shift

# default APIs if none provided
if [ "$#" -eq 0 ]; then
  APIS=("api-v1" "api-v2")
else
  APIS=("$@")
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

had_errors=0

for api in "${APIS[@]}"; do
  # expect api names like "api-v1", "api-v2"
  ARTIFACT="dsf-bpe-process-${api}"
  JARNAME="${ARTIFACT}-${VERSION}-javadoc.jar"
  BASE_URL="https://repo1.maven.org/maven2/dev/dsf/${ARTIFACT}/${VERSION}"
  URL="${BASE_URL}/${JARNAME}"
  OUT_DIR="$WORKSPACE_ROOT/temp-out/${api}"

  echo "=== Processing ${api} (${ARTIFACT}) ==="
  echo "Download: ${URL}"
  mkdir -p "$OUT_DIR"

  TMPFILE="$(mktemp -t "${ARTIFACT}.XXXXXX").jar"

  if ! curl -sfSL --retry 3 -o "$TMPFILE" "$URL"; then
    echo "Error: Download failed for ${api}: ${URL}" >&2
    rm -f "$TMPFILE"
    had_errors=1
    continue
  fi

  echo "Extracting ${JARNAME} to ${OUT_DIR}"
  # jar is a ZIP archive
  if ! unzip -oq "$TMPFILE" -d "$OUT_DIR"; then
    echo "Error: Extraction failed for ${api}" >&2
    rm -f "$TMPFILE"
    had_errors=1
    continue
  fi

  rm -f "$TMPFILE"
  echo "Javadoc for ${api} extracted to ${OUT_DIR}"
done

if [ "$had_errors" -ne 0 ]; then
  echo "One or more downloads/extractions failed." >&2
  exit 2
fi

echo "All selected Javadocs downloaded and extracted."
