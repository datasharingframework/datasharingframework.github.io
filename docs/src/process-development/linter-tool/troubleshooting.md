---
title: Troubleshooting
icon: config
---

## Troubleshooting

### Maven: JAR not found / lint skipped

**Problem**: `DSF Linter: JAR not found at …, skipping` or the `lint` goal does nothing useful.

**Solution**:
- Ensure the plugin JAR exists: `${project.build.directory}/${project.build.finalName}.jar`
- Run a phase that builds the JAR first, e.g. `mvn verify` or `mvn package` then `mvn dsf-maven-plugin:lint`
- Confirm the `lint` execution is bound in the process plugin `pom.xml`

### Maven: build fails on lint errors

**Problem**: `MojoFailureException` with error counts after `verify`.

**Solution**:
```bash
# Inspect HTML/JSON reports
mvn verify -Ddsf.lint.html=true -Ddsf.lint.json=true

# Temporary: do not fail the build (gradual adoption)
mvn verify -Ddsf.lint.failOnErrors=false

# Skip lint entirely
mvn verify -Ddsf.lint.skip=true
```

Use [exclusion rules](./linter-tool.md#exclusion-rules) for known accepted findings.

### "Input must be a JAR file" Error (CLI)

**Problem**: The CLI only accepts JAR files as input.

**Solution**:
```bash
# Wrong - Maven project directory
java -jar linter-cli-0.1.3.jar --path /path/to/project --html

# Correct - build first, then lint the JAR
cd /path/to/project && mvn clean package
java -jar linter-cli-0.1.3.jar \
  --path /path/to/project/target/my-plugin-1.0.0.jar --html
```

Prefer `dsf-maven-plugin:lint` in process plugin builds so packaging and linting stay in one lifecycle.

### JAR File Not Found

**Problem**: The specified JAR file path cannot be found.

**Solution**: Verify the path and use absolute paths if needed:

```bash
# Windows
java -jar linter-cli-0.1.3.jar \
  --path "C:\Users\Username\project\target\plugin.jar" --html

# Linux/Mac
java -jar linter-cli-0.1.3.jar \
  --path /home/username/project/target/plugin.jar --html
```

### Missing Dependencies / Class Hierarchy False Positives

**Problem**: ClassNotFoundException or false “does not implement …” findings during linting.

**Solution**:
```bash
# Use verbose mode
java -jar linter-cli-0.1.3.jar --path plugin.jar --html --verbose

# Or with Maven
mvn verify -Ddsf.lint.verbose=true -Ddsf.lint.html=true

# Ensure the plugin JAR contains the expected classes
jar -tf plugin.jar | grep -i "class"
```

Use **linter-cli / linter-core 0.1.3+** (0.1.2 already fixed several V1 hierarchy false positives caused by missing Spring classes in the shaded CLI).

### Report Not Generated

**Problem**: No report files are created.

**Solution**:
```bash
# CLI: --html and/or --json must be set
java -jar linter-cli-0.1.3.jar --path plugin.jar --html

# Maven: enable report flags
mvn verify -Ddsf.lint.html=true -Ddsf.lint.json=true

# Custom report directory
java -jar linter-cli-0.1.3.jar \
  --path plugin.jar --html --report-path $(pwd)/reports
mvn verify -Ddsf.lint.reportPath=target/custom-linter-report -Ddsf.lint.html=true
```

### Remote JAR Download Error

**Problem**: Cannot download JAR from remote URL.

**Solution**:
```bash
curl -L -o test.jar https://example.com/plugin.jar
ls -lh test.jar
java -jar linter-cli-0.1.3.jar --path test.jar --html
```

### Plugin Not Found / `PLUGIN_DEFINITION_NO_PLUGIN_FOUND`

**Problem**: ERROR that no `ProcessPluginDefinition` was found.

**Behaviour in 0.1.3+**: The run does **not** abort mid-flight. Regular HTML/JSON reports are still written. Exit/build failure follows `failOnErrors` / `--no-fail`.

**Solution**:
- Verify ServiceLoader registration under `META-INF/services/`:
  - `dev.dsf.bpe.v1.ProcessPluginDefinition` and/or
  - `dev.dsf.bpe.v2.ProcessPluginDefinition`
- Ensure the registered class is present in the JAR and implements the correct interface
- Check for `ServiceConfigurationError` details in verbose logs (e.g. “not a subtype”)
- Confirm API version compatibility of the plugin JAR

### Exclusion File Not Applied

**Problem**: Findings that should be excluded still appear.

**Solution**:
- Prefer an **explicit** path (especially for Maven module roots):
  - CLI: `--exclusions path/to/file.json`
  - Maven: `-Ddsf.lint.exclusionsFile=${project.basedir}/dsf-linter-exclusions.json`
- Auto-discovery only finds `dsf-linter-exclusions.json` in the **extracted JAR root** (not automatically the Maven basedir unless the file is packaged there)
- Rule fields are AND-combined within a rule; check `type` / `severity` / `file` / `messageContains` spelling
- Invalid/empty rules cause load failure — check the log for exclusion load errors

### Out of Memory Errors

**Problem**: `OutOfMemoryError` during linting.

**Solution**:
```bash
java -Xmx2g -jar linter-cli-0.1.3.jar --path plugin.jar --html

# For very large projects
java -Xmx4g -Xms1g -jar linter-cli-0.1.3.jar --path plugin.jar --html
```

For Maven, set `MAVEN_OPTS` accordingly.

### Slow Performance

**Problem**: Linting takes too long.

**Solution**:
- Use `-DskipTests` during local builds when iterating
- Disable verbose logging in production CI unless needed
- Prefer local JARs over remote URLs when possible
- Consider increasing heap size

### Class Loading Issues

**Problem**: Classes cannot be loaded from plugin JAR.

**Solution**:
- Verify JAR structure (`META-INF/services`, `bpe/`, `fhir/`)
- Ensure dependencies needed for hierarchy checks are available (shaded CLI includes Spring artifacts since 0.1.2)
- Use verbose mode to inspect classloader / discovery logs
- Check API version compatibility
