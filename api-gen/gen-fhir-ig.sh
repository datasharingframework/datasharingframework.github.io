#!/bin/bash
echo Generate FHIR IG

#!/bin/bash
set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <version> [api-list...]" >&2
  echo "Example: $0 2.0.0-RC2" >&2
  exit 1
fi

VERSION="$1"
shift


echo Download FHIR IG resources for version ${VERSION}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

had_errors=0


ARTIFACT="dsf-fhir-validation"
JARNAME="${ARTIFACT}-${VERSION}.jar"
BASE_URL="https://repo1.maven.org/maven2/dev/dsf/${ARTIFACT}/${VERSION}"
URL="${BASE_URL}/${JARNAME}"
OUT_DIR="$WORKSPACE_ROOT/temp-out/dsf-fhir-validation"

echo "=== Processing (${ARTIFACT}) ==="
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
echo "FHIR ressources extracted to ${OUT_DIR}"


if [ "$had_errors" -ne 0 ]; then
  echo "One or more downloads/extractions failed." >&2
  exit 2
fi

echo Generate implementation guide

# copy template/fhir-ig content to temp-out/fhir-ig-gen

TEMPLATE_DIR="$SCRIPT_DIR/template/fhir-ig"
IG_OUT_DIR="$WORKSPACE_ROOT/temp-out/fhir-ig-gen"

mkdir -p "$IG_OUT_DIR"
cp -R "$TEMPLATE_DIR/"* "$IG_OUT_DIR/"
echo "Copied IG template files to ${IG_OUT_DIR}"
# copy downloaded FHIR resources to temp-out/fhir-ig-gen/input/dsf-resources
RESOURCES_SRC_DIR="$WORKSPACE_ROOT/temp-out/dsf-fhir-validation/fhir"
RESOURCES_DEST_DIR="$IG_OUT_DIR/input/dsf-resources"

mkdir -p "$RESOURCES_DEST_DIR"
cp -R "$RESOURCES_SRC_DIR/"* "$RESOURCES_DEST_DIR/"
echo "Copied FHIR resources to ${RESOURCES_DEST_DIR}"

# remove all non-xml files from resources dest dir
find "$RESOURCES_DEST_DIR" -type f ! -name "*.xml" -delete
echo "Removed non-XML files from ${RESOURCES_DEST_DIR}"
#remove all xml files that do not start with dsf-
find "$RESOURCES_DEST_DIR" -type f -name "*.xml" ! -name "dsf-*" -delete
echo "Removed non-dsf XML files from ${RESOURCES_DEST_DIR}"

echo "FHIR IG generation setup completed. The IG source is in ${IG_OUT_DIR}."

UPDATE_PUBLISHER_SCRIPT="$IG_OUT_DIR/_updatePublisher.sh"
GENONCE_SCRIPT="$IG_OUT_DIR/_genonce.sh"

# Set Java options as in CI
export _JAVA_OPTIONS="-Xmx8g -Xms4g"
echo "Set _JAVA_OPTIONS=${_JAVA_OPTIONS}"

./patch-sushi-config.sh
echo "Patched sushi-config.yaml"

# Run updatePublisher if available (make executable and pass --yes)
if [ -f "$UPDATE_PUBLISHER_SCRIPT" ]; then
  echo "Found $UPDATE_PUBLISHER_SCRIPT, making executable and running with --yes"
  chmod +x "$UPDATE_PUBLISHER_SCRIPT"
  (cd "$IG_OUT_DIR" && ./_updatePublisher.sh --yes)
  echo "FHIR IG publisher update completed."
else
  echo "No _updatePublisher.sh script found in ${IG_OUT_DIR}. Please update the IG publisher manually."
fi

# Run sushi if available
if command -v sushi >/dev/null 2>&1; then
  echo "Running sushi in ${IG_OUT_DIR}"
  (cd "$IG_OUT_DIR" && sushi .)
  echo "sushi execution completed."
else
  echo "sushi not found in PATH. Please install sushi to build the IG." >&2
fi

# Run genonce if available (make executable)
if [ -f "$GENONCE_SCRIPT" ]; then
  echo "Found $GENONCE_SCRIPT, making executable and running"
  chmod +x "$GENONCE_SCRIPT"
  (cd "$IG_OUT_DIR" && ./_genonce.sh)
  echo "FHIR IG generation completed."
else
  echo "No _genonce.sh script found in ${IG_OUT_DIR}. Please run the IG generation manually."
fi