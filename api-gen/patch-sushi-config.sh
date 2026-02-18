#!/bin/bash
set -euo pipefail

# Defaults
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG="${1:-$WORKSPACE_ROOT/temp-out/fhir-ig-gen/sushi-config.yaml}"
RES_DIR="${2:-$WORKSPACE_ROOT/temp-out/fhir-ig-gen/input/dsf-resources}"

if [ ! -f "$CONFIG" ]; then
  echo "Error: sushi-config.yaml not found at $CONFIG" >&2
  exit 1
fi
if [ ! -d "$RES_DIR" ]; then
  echo "Error: resources dir not found at $RES_DIR" >&2
  exit 1
fi

# portable mktemp: try simple mktemp, fallback to -t form (macOS)
TMP_ENTRIES="$(mktemp 2>/dev/null || mktemp -t patch-sushi-entries)"
TMP_OUT="$(mktemp 2>/dev/null || mktemp -t patch-sushi-out)"
trap 'rm -f "$TMP_ENTRIES" "$TMP_OUT"' EXIT

# ensure file exists
: > "$TMP_ENTRIES"

# iterate xml files, use parent dir as ResourceType and filename as id
while IFS= read -r -d '' file; do
  parent="$(basename "$(dirname "$file")")"
  # skip Subscription resources entirely
  if [ "$parent" = "Subscription" ]; then
    continue
  fi

  fname="$(basename "$file" .xml)"

  # For NamingSystem do NOT remove dsf- prefix; for others remove leading dsf- if present
  if [ "$parent" = "NamingSystem" ]; then
    name="$fname"
  else
    name="${fname#dsf-}"
  fi

  # remove trailing version segment if it starts with a digit, e.g. -2.0.0 or -2.0.0-RC1
  if [[ "$name" =~ ^(.+)-[0-9].*$ ]]; then
    name="${BASH_REMATCH[1]}"
  fi

  key="${parent}/${name}"
  # append only if not already present (preserve first occurrence)
  if ! grep -q "^  ${key}:" "$TMP_ENTRIES"; then
    printf "  %s:\n    exampleBoolean: false\n\n" "$key" >> "$TMP_ENTRIES"
  fi
done < <(find "$RES_DIR" -type f -name "*.xml" -print0)

# If no entries found, ensure resources: is removed or left unchanged
if [ ! -s "$TMP_ENTRIES" ]; then
  echo "No XML resources found in $RES_DIR. No changes made to $CONFIG."
  exit 0
fi

# replace existing resources: block in config with generated entries
awk -v insfile="$TMP_ENTRIES" '
  BEGIN { in_resources=0; inserted=0 }
  # match a top-level "resources:" line (allow leading spaces)
  /^[[:space:]]*resources:[[:space:]]*$/ {
    print;
    # insert generated entries
    while((getline line < insfile) > 0) print line;
    close(insfile);
    inserted=1;
    in_resources=1;
    next
  }
  {
    if(in_resources){
      # skip indented lines (old resources block) and blank/comment lines that belong to it
      if($0 ~ /^[[:space:]]/ || $0 ~ /^#/ || $0 == "") next
      else in_resources=0
    }
    print
  }
  END {
    # if no resources: found, append one at end
    if(!inserted){
      print ""
      print "resources:"
      while((getline line < insfile) > 0) print line;
      close(insfile);
    }
  }
' "$CONFIG" > "$TMP_OUT" && mv "$TMP_OUT" "$CONFIG"

echo "Updated $CONFIG with resource entries from $RES_DIR"