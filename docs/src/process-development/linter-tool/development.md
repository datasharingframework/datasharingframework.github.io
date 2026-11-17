---
title: Development
icon: code
---
### Requirements

- **Java**: Java 25
- **Maven**: 3.6 or higher
- **IDE**: IntelliJ IDEA, Eclipse, or VS Code (optional)

### IDE Setup

1. **Import Project**:
   - Import as Maven project
   - Set JDK to **25**
   - Ensure Maven dependencies are resolved

2. **Code Style** (optional):
   - Configure code formatter
   - Set up import organization
   - Configure line endings

3. **Run Configuration**:
   - Create run configuration for `Main.java`
   - Set program arguments: `--path <jar-file> --html --verbose`
   - Configure working directory

### Building

```bash
# Full build with tests
mvn clean package

# Skip tests for faster iteration
mvn clean package -DskipTests

# Verbose Maven output
mvn clean package -X

# Build only specific module
mvn clean package -pl linter-core

# Install to local Maven repository
mvn clean install
```

### Testing

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=BpmnLoadingTest

# Run specific test method
mvn test -Dtest=BpmnLoadingTest#testLoadBpmn

# Run tests with verbose output
mvn test -X

# Skip tests during build
mvn clean package -DskipTests

# Run tests with coverage (if configured)
mvn test jacoco:report
```

### Development Workflow

```bash
# 1. Make changes to source code
vim linter-core/src/main/java/dev/dsf/linter/service/BpmnLintingService.java

# 2. Build the project
mvn clean package -DskipTests

# 3. Test with a sample plugin (CLI)
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path test-plugin.jar --html --verbose --exclusions dsf-linter-exclusions.json

# Or exercise the Maven glue in a process plugin project:
# mvn -f path/to/process-plugin verify -Ddsf.lint.html=true -Ddsf.lint.verbose=true

# 4. Check the generated report
open /tmp/dsf-linter-report-test-plugin/dsf-linter-report/report.html

# 5. Run unit tests
mvn test

# 6. Commit changes
git add .
git commit -m "Description of changes"
```

### Debugging

#### Remote Debugging

```bash
# Start the linter with debugger enabled
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005 \
  -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path plugin.jar --html --verbose

# Attach debugger from IDE to localhost:5005
```

#### Logging

The linter uses Logback for logging. Configuration files:

- `logback.xml`: Standard logging (INFO level)
- `logback-verbose.xml`: Verbose logging (DEBUG level, activated with `--verbose`)

Log levels:
- **ERROR**: Fatal errors and exceptions
- **WARN**: Warnings and non-fatal issues
- **INFO**: General information and progress
- **DEBUG**: Detailed debugging information (verbose mode only)

#### Common Debugging Scenarios

1. **Plugin Not Found**:
   - Enable verbose logging
   - Check ServiceLoader registration
   - Verify classpath

2. **Resource Not Found**:
   - Check JAR structure
   - Verify resource paths
   - Enable verbose logging

3. **Class Loading Issues**:
   - Check classloader setup
   - Verify dependencies
   - Check API version compatibility

### Code Style Guidelines

- Follow Java naming conventions
- Use meaningful variable and method names
- Add JavaDoc comments for public APIs
- Keep methods focused and small
- Use immutable objects where possible
- Handle exceptions appropriately
- Write unit tests for new features