#!/bin/bash
# To run: chmod +x fetch-versioned-release-notes.sh && ./fetch-versioned-release-notes.sh

# GitHub repository details
REPO_OWNER="datasharingframework"
REPO_NAME="dsf"

# Output base directory (this will hold the versioned folders)
OUTPUT_BASE_DIR="../../operations"

# Define the range of versions (no extra dot after v)
VERSIONS=("v1.0.0" "v1.1.0" "v1.2.0" "v1.3.0" "v1.3.1" "v1.3.2" "v1.4.0" "v1.5.0" "v1.5.1" "v1.5.2" "v1.6.0" "v1.7.0" "v1.7.1" "v1.8.0")

# Fetch all release details
echo "Fetching all releases..."
RELEASES=$(curl -s https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/releases)

# Loop through each version in the version list
for VERSION in "${VERSIONS[@]}"; do
  VERSION_FOUND=$(echo "$RELEASES" | jq -r ".[] | select(.tag_name == \"$VERSION\")")

  if [ ! -z "$VERSION_FOUND" ]; then
    VERSION_DIR="$OUTPUT_BASE_DIR/$VERSION"

    if [ ! -d "$VERSION_DIR" ]; then
      echo "Directory $VERSION_DIR does not exist. Skipping $VERSION."
      continue
    fi

    OUTPUT_FILE="$VERSION_DIR/release-notes.md"

    # Write frontmatter at the top of the Markdown file
cat <<EOF > "$OUTPUT_FILE"
---
title: Release Notes ($VERSION)
icon: note
---

## Release Notes for $VERSION

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

EOF

    echo "$RELEASES" | jq -r ".[] | select(.tag_name == \"$VERSION\") | @base64" | while read -r RELEASE; do
      RELEASE_JSON=$(echo "$RELEASE" | base64 --decode)
      RELEASE_BODY=$(echo "$RELEASE_JSON" | jq -r '.body')
      RELEASE_NAME=$(echo "$RELEASE_JSON" | jq -r '.name')

      echo "### $RELEASE_NAME" >> "$OUTPUT_FILE"
      echo "$RELEASE_BODY" >> "$OUTPUT_FILE"
      echo "" >> "$OUTPUT_FILE"
    done

    echo "Release notes for version $VERSION saved to $OUTPUT_FILE"
  else
    echo "No release found for version $VERSION"
  fi
done

echo "Process completed."
