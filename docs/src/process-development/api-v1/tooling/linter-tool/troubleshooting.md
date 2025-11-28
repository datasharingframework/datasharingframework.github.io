---
title: Troubleshooting
---

### "Input must be a JAR file" Error

**Problem**: The linter only accepts JAR files as input.

**Solution**:
```bash
# Wrong - Maven project directly
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path /path/to/project --html

# Correct - Build first, then lint JAR
cd /path/to/project && mvn clean package
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path /path/to/project/target/my-plugin-1.0.0.jar --html
```

### JAR File Not Found

**Problem**: The specified JAR file path cannot be found.

**Solution**: Verify the path and use absolute paths if needed:

```bash
# Windows
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path "C:\Users\Username\project\target\plugin.jar" --html

# Linux/Mac
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path /home/username/project/target/plugin.jar --html
```

### Missing Dependencies

**Problem**: ClassNotFoundException or similar errors during linting.

**Solution**:
```bash
# Check Maven settings
ls ~/.m2/settings.xml

# Use verbose mode to see detailed error messages
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --verbose

# Check if dependencies are in the JAR
jar -tf plugin.jar | grep -i "class"
```

### Report Not Generated

**Problem**: No report files are created.

**Solution**:
```bash
# --html or --json flag must be set
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html  # ← Required

# Use absolute path for report directory
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --report-path $(pwd)/reports

# Check write permissions
ls -ld /tmp/dsf-linter-report-*
```

### Remote JAR Download Error

**Problem**: Cannot download JAR from remote URL.

**Solution**:
```bash
# Test download separately
curl -L -o test.jar https://example.com/plugin.jar

# Verify the download
ls -lh test.jar

# Check network connectivity
ping example.com

# Then use the local file
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path test.jar --html
```

### Plugin Not Found

**Problem**: "No plugins found" message.

**Solution**:
- Verify ServiceLoader registration exists in `META-INF/services/`
- Check that plugin class is in the JAR file
- Ensure plugin class implements the correct interface
- Use `--verbose` to see detailed discovery logs
- Check API version compatibility

### Out of Memory Errors

**Problem**: `OutOfMemoryError` during linting.

**Solution**:
```bash
# Increase heap size
java -Xmx2g -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html

# For very large projects
java -Xmx4g -Xms1g -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html
```

### Slow Performance

**Problem**: Linting takes too long.

**Solution**:
- Use `-DskipTests` during build
- Disable verbose logging in production
- Check network latency for remote JARs
- Consider increasing heap size
- Profile with JVM tools if needed

### Class Loading Issues

**Problem**: Classes cannot be loaded from plugin JAR.

**Solution**:
- Verify JAR structure
- Check classpath configuration
- Ensure dependencies are included
- Use verbose mode to see classloader logs
- Check API version compatibility
