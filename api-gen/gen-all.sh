#!/bin/bash
set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <version>" >&2
  echo "Example: $0 2.0.0-RC2" >&2
  exit 1
fi

VERSION="$1"
echo Generate API documentation
./gen-javadoc.sh "$VERSION"
./gen-maven-plugin-doc.sh
./gen-fhir-ig.sh