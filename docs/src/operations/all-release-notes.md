## All Release Notes

### 1.8.0 - Dependency Upgrades and UI Fixes
General remarks:

- This is an update for the 1.x DSF and not compatible with 0.9.x and older versions developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.7.1 -> 1.8.0 Upgrade Guide](https://dsf.dev/operations/v1.8.0/upgrade-from-1.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/operations/v1.8.0/install.html).
- With this release, library dependencies have been updated and small bugs in the UI of the DSF FHIR have been fixed.
- The integrated camunda engine of the DSF BPE server was upgraded to version 7.23, requiring a small change to the database schema of the DSF BPE and thus making this the 1.8.0 and not a 1.7.2 release.

Bug Fixes:
- Task resources with status `draft` were not correctly rendered if an optional input parameter was not defined in the Task resource (#306).
- Boolean input parameters of Task resource with status `draft`, were not included in the created Task resource with status `requested` if the `false` option was selected (#323).

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.8.0](https://github.com/orgs/datasharingframework/packages/container/bpe/428297252?tag=1.8.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.8.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/428292655?tag=1.8.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.8.0](https://github.com/orgs/datasharingframework/packages/container/fhir/428294010?tag=1.8.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.8.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/428292563?tag=1.8.0)

Issues closed:
- FHIR UI: Task Boolean Input Parameter With Value False Not Included in Created Task #323
- Upgrade Dependencies #320
- Start New Development Cycle #312
- Migrate OSSRH Namespace to Central Portal #308
- Fix Cardinality Handling on Draft Tasks (Templates) with Missing Optional Inputs #306
- Adapt Github Actions to build on pull request #163

This release contains contributions from @hhund, @schwzr and @wetret.

### 2.0.0-M3 - Third Milestone Pre Release
General remarks:
- This is the third milestone release for the upcoming major version 2.0.0. Do not use this release in production.

Features:
- Process Plugin API v2
- Improved allow list flexibility with thumbprints in Endpoint resources
- Support for large FHIR Binary resources up to [4 TB](https://www.postgresql.org/docs/15/lo-intro.html).
- Details see PRs #326, #322, #319, #318, #316, #314, #311, #310, #305, #304, #303, #302, #300, #299, #295, #293, #291, #290, #283, #282, #278, #273, #269, #244, #223, #221 and  #212

Docker images in GitHub docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.0.0-M3](https://github.com/orgs/datasharingframework/packages/container/bpe/427971169?tag=2.0.0-M3)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.0.0-M3](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/427967907?tag=2.0.0-M3)
* **fhir**: [ghcr.io/datasharingframework/fhir:2.0.0-M3](https://github.com/orgs/datasharingframework/packages/container/fhir/427969682?tag=2.0.0-M3)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.0.0-M3](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/427967730?tag=2.0.0-M3)

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.0.0-M3</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.0.0-M3</version>
</dependency>
```

Issues closed:
- Add DocumentReference HTML View #325
- Improve Allow-List and Enable Thumbprints on Endpoint Resources #317
- Reorganize dsf-tools Modules #315
- Extend dsf-tools-documentation-generator Maven Plugin for v2 Process Plugins #309
- Create Target Provider #307
- Upgrade Dependencies #301
- Upgrade to HAPI 8.0.0 #297
- Optimize FHIR Binary Resource Handling #296
- Add Mechanism to the API for Modifying Process Plugin FHIR Resources During Startup #292
- Remove Camunda Dependency from Process Plugin API v2 #284
- Validator Ignores CodeSystem Version #281
- Add BPE Integration Tests #271
- Add Mechanism to Manage Connections to Local FHIR Servers #270
- Port Fixes and Features From 1.7.0 to 2.0.0 #268
- Complete Class and Resource Allow Lists for ProcessPluginApiClassLoader #241
- Port Fixes and Features From 1.6.0 to 2.0.0 #239
- Add Methods for Accessing "Local" BPMN Variables to the Plugin API #210
- Add Service to Encrypt and Decrypt Binary Data via Plugin API #206
- Add Service to Check Mime-Type of Binary Data via Plugin API #205
- Upgrade to Jetty 12 #203
- Upgrade to Java 21 #202
- Web Application Style Class Loading for Process Plugins #201
- Create API v2 Maven Module #200
- Add Constants for organization-role and practitioner-role CodeSystems #81
- Improve DefaultUserTaskListener #78

This release contains contributions from @hhund, @jaboehri, @schwzr and @wetret.

### 2.0.0-M2 - Second Milestone Pre Release
General remarks:
- This is the second milestone release for the upcoming major version 2.0.0. Do not use this in production.

Features:
- Process Plugin API v2
- Details see PRs #303, #302, #300, #299, #295, #293, #291, #290, #283, #282, #278, #273, #269, #244, #223, #221 and #212

Docker images in GitHub docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.0.0-M2](https://github.com/orgs/datasharingframework/packages/container/bpe/385704143?tag=2.0.0-M2)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.0.0-M2](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/385697519?tag=2.0.0-M2)
* **fhir**: [ghcr.io/datasharingframework/fhir:2.0.0-M2](https://github.com/orgs/datasharingframework/packages/container/fhir/385701033?tag=2.0.0-M2)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.0.0-M2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/385697426?tag=2.0.0-M2)

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.0.0-M2</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.0.0-M2</version>
</dependency>
```

Issues closed:
- Upgrade Dependencies #301
- Downgrade PostgreSQL JDBC Driver to 42.7.3 #298
- Upgrade to HAPI 8.0.0 #297
- Optimize FHIR Binary Resource Handling #296
- Add Mechanism to the API for Modifying Process Plugin FHIR Resources During Startup #292
- Remove Camunda Dependency from Process Plugin API v2 #284
- Validator Ignores CodeSystem Version #281
- Add BPE Integration Tests #271
- Add Mechanism to Manage Connections to Local FHIR Servers #270
- Port Fixes and Features From 1.7.0 to 2.0.0 #268
- Complete Class and Resource Allow Lists for ProcessPluginApiClassLoader #241
- Port Fixes and Features From 1.6.0 to 2.0.0 #239
- Add Methods for Accessing "Local" BPMN Variables to the Plugin API #210
- Add Service to Encrypt and Decrypt Binary Data via Plugin API #206
- Add Service to Check Mime-Type of Binary Data via Plugin API #205
- Upgrade to Jetty 12 #203
- Upgrade to Java 21 #202
- Web Application Style Class Loading for Process Plugins #201
- Create API v2 Maven Module #200
- Add Constants for organization-role and practitioner-role CodeSystems #81
- Improve DefaultUserTaskListener #78

This release contains contributions from @hhund, @jaboehri, @schwzr and @wetret.

### 2.0.0-M1 - First Milestone Pre Release
General remarks:
- This is the first milestone release for the upcoming major version 2.0.0. Do not use this in production.

Features:
- New Process Plugin API
- Details see PRs #290, #283, #282, #278, #273, #269, #244, #223, #221 and #212

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.0.0-M1](https://github.com/orgs/datasharingframework/packages/container/bpe/381880012?tag=2.0.0-M1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.0.0-M1](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/381875099?tag=2.0.0-M1)
* **fhir**: [ghcr.io/datasharingframework/fhir:2.0.0-M1](https://github.com/orgs/datasharingframework/packages/container/fhir/381877990?tag=2.0.0-M1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.0.0-M1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/381874842?tag=2.0.0-M1)

Issues closed:
- Remove Camunda Dependency from Process Plugin API v2 #284
- Validator Ignores CodeSystem Version #281
- Add BPE Integration Tests #271
- Add Mechanism to Manage Connections to Local FHIR Servers #270
- Port Fixes and Features From 1.7.0 to 2.0.0 #268
- Port Fixes and Features From 1.6.0 to 2.0.0 #239
- Add Methods for Accessing "Local" BPMN Variables to the Plugin API #210
- Upgrade to Jetty 12 #203
- Upgrade to Java 21 #202
- Web Application Style Class Loading for Process Plugins #201
- Create API v2 Maven Module #200
- Add Constants for organization-role and practitioner-role CodeSystems #81
- Improve DefaultUserTaskListener #78

This release contains contributions from @hhund, @schwzr and @wetret.

### 1.7.1 - Maintenance Release
General remarks:

- This is an update for the 1.x DSF and not compatible with 0.9.x and older versions developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.x -> 1.7.1 Upgrade Guide](https://dsf.dev/v1.7.1/maintain/upgrade-from-1.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.7.1/maintain/install.html).
- With this release, library dependencies have been updated and among others a bug fixed where the BPE did not connect the websocket on startup.

Bug Fixes:
- The Subscription `criteria` search parameter was not used with the `:exact` modifier, leading to manually created Subscription resources being overridden on startup if their `criteria` value stared with the same value as one of the standard Subscription resources. The `:exact` modifier is now used in the internal bundle for the standard DSF FHIR Subscription resources.
- The BPE server did not connect the websocket connection for `requested` Task resources, if Task resources downloaded on startup either belonged to processes no longer deployed or included references to FHIR resource no longer available. The error handling of the BPE TaskHandler was improved. In the DSF FHIR server updates to Task resources from status `requested` to `failed` are now allowed and validation rules were improved for Task resource updates with status `failed`.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.7.1](https://github.com/orgs/datasharingframework/packages/container/bpe/380821506?tag=1.7.1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.7.1](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/380812987?tag=1.7.1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.7.1](https://github.com/orgs/datasharingframework/packages/container/fhir/380818455?tag=1.7.1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.7.1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/380812518?tag=1.7.1)

Issues closed:
- Upgrade Dependencies #287
- BPE Websocket Not Connected When In-Progress Update Fails for Old Tasks #279
- Subscription criteria Search Parameter Should Be Used With :exact Modifier #272
- Start New Development Cycle #266
- Modify Documentation Generator to Support SECRET_FILE Environment Variables #265

This release contains contributions from @hhund, @jaboehri, @schwzr and @wetret.

### 1.7.0 - Simplified Configuration and Duplicate Resources Fix
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older versions developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.x -> 1.7.0 Upgrade Guide](https://dsf.dev/v1.7.0/maintain/upgrade-from-1.html). **Note:** Upgrading to 1.7.0 requires additional work beyond updating the version number.
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.7.0/maintain/install.html).
- With this release, library dependencies have been updated, a bug regarding duplicate FHIR resources fixed and a few features implemented to simplify the configuration.

Features:
- The default organization bookmarks in the FHIR server UI have been updated to reflect parent organizations supported by the allow list management application.
- New uniqueness criteria have been implemented for draft Task resources, enforcing unique resources based on identifiers.
- The integrated list of valid media types (CodeSystem urn:ietf:bcp:13) has been updated to reflect all published types by the [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml) and extended with the non standard mimetype `application/x-ndjson`.
- Default trusted root certificate authorities, previously published as part of the install guide resources, have been moved into the docker images. This simplifies the setup for MII/NUM users and still leaves the existing options to set custom CAs. For more details, see the [Default Root Certificates](https://dsf.dev/v1.7.0/maintain/root-certificates.html) page. **Note:** If not explicitly configured, optional connections to the OIDC provider and mail server previously used the default certificate trust store of the Java Virtual Machine (JVM). The new default trusts a limited number of certificate authorities only and thus may need to be manually overridden.
- The docker secrets reader has been extended to also work with environment variables ending in `_SECRET` enabling definition of these values via files. For additional information, see the [Passwords and Secrets](https://dsf.dev/v1.7.0/maintain/passwords-secrets.html) page.

Bug Fixes:
- Duplicate ActivityDefinition resources (same url and version) prevent processes from being executed in version 1.6.0. If inserts into the FHIR server fail during BPE startup (for example due to read timeouts), duplicate metadata resources like ActivityDefinition from process plugins can be created if the BPE container restarts too fast. Constraint trigger based unique criteria have been implemented for the database in 1.7.0 to prevent duplicate resources. The default transaction isolation level for modifying transactions was changed from "repeatable read" to "read committed", enabling dirty reads needed to allow constraint triggers to see inserts/updates executed by parallel running transactions. Serial execution of constraint triggers is realized by using exclusive transaction level advisory locks before executing the constraint trigger function.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.7.0](https://github.com/orgs/datasharingframework/packages/container/bpe/341515944?tag=1.7.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.7.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/341496484?tag=1.7.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.7.0](https://github.com/orgs/datasharingframework/packages/container/fhir/341502917?tag=1.7.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.7.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/341494817?tag=1.7.0)

Issues closed:
- Extend Secrets Reader for Environment Variables Ending in _SECRET_FILE #261
- Add Default Root CAs to Docker Images #259
- Update CodeSystem urn:ietf:bcp:13 #256
- Upgrade Dependencies maintenance #253
- Update Default Organization Bookmark List #248
- Duplicate ActivityDefinition Resources Prevent Processes From Being Executed #247
- Start New Development Cycle #245 

This release contains contributions from @hhund, @schwzr and @wetret.

### First Release Candidate for 1.7.0
General remarks:
- This is a pre-release for DSF 1.7.0, do not use in production.

Features:
- The default organization bookmarks in the FHIR server UI have been updated to reflect parent organizations supported by the allow list management application.
- New uniqueness criteria have been implemented for draft Task resources, enforcing unique resources based on identifiers.

Bug Fixes:
- Duplicate ActivityDefinition resources (same url and version) prevent processes from being executed in version 1.6.0. If inserts into the FHIR server fail during BPE startup (for example due to read timeouts), duplicate metadata resources like ActivityDefinition from process plugins can be created if the BPE container restarts too fast. Constraint trigger based unique criteria have been implemented for the database in 1.7.0 to prevent duplicate resources. The default transaction isolation level for modifying transactions was changed from "repeatable read" to "read committed", enabling dirty reads needed to allow constraint triggers to see inserts/updates executed by parallel running transactions. Serial execution of constraint triggers is realized by using exclusive transaction level advisory locks before executing the constraint trigger function.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.7.0-RC1](https://github.com/orgs/datasharingframework/packages/container/bpe/325078667?tag=1.7.0-RC1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.7.0-RC1](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/325068712?tag=1.7.0-RC1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.7.0-RC1](https://github.com/orgs/datasharingframework/packages/container/fhir/325074177?tag=1.7.0-RC1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.7.0-RC1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/325067367?tag=1.7.0-RC1)

Issues closed:
- Upgrade Dependencies maintenance #253
- Update Default Organization Bookmark List #248
- Duplicate ActivityDefinition Resources Prevent Processes From Being Executed #247
- Start New Development Cycle #245 

This release contains contributions from @hhund, @schwzr and @wetret.

### 1.6.0 - Improved Update Performance
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.x -> 1.6.0 Upgrade Guide](https://dsf.dev/v1.6.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.6.0/maintain/install.html).
- With this release, library dependencies have been updated, a number of bugs fixed and the execution of FHIR update operations for `Organization` and `OrganizationAffiliation` improved.

Known Issue:
- Duplicate `ActivityDefinition` resources in DSF FHIR server prevent processes from being executed, for more infos and a workaround see #247

Features:
- The execution performance of FHIR rest update operations for `Organization` and `OrganizationAffiliation` resource has been improved.

Bug Fixes:
- The DSF BPE missed `Task` and `QuestionnaireResponse` resources received by the DSF FHIR server during a connection outage between the DSF FHIR and DSF BPE servers. Missed `Task` and `QuestionnaireResponse` are now always downloded after the connection is reestablished. See #233
- The OIDC provider URL could not be configured as a "no proxy" URL if a general forward proxy was configured for the DSF FHIR or DSF BPE servers. The responsible logic error in the code was fixed. See #232
- `QuestionnaireResponse` and corresponding `Questionnaire` resource could not be created together in a `transaction` `Bundle`. The reference check for the `QuestionnaireResponse.questionnaire` canoncial reference was move to the correct `transaction` `Bundle` execution phase. See #226
- A wrong resource type in the `getLocalVersionlessAbsoluteUrl` method of the plugin API class `QuestionnaireResponseHelperImpl` was fixed. See #224

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.0.1)
- [MII Feasibility v1.0.0.7](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.7)
- [MII Data Transfer v1.0.1.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.1.0)
- [MII Data Sharing v1.0.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.1)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.6.0](https://github.com/orgs/datasharingframework/packages/container/bpe/289527794?tag=1.6.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.6.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/289517305?tag=1.6.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.6.0](https://github.com/orgs/datasharingframework/packages/container/fhir/289523073?tag=1.6.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.6.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/289517017?tag=1.6.0)

Issues closed:
- Upgrade Dependencies #236
- BPE Misses Task and QuestionnaireResponse Resources if Network Disconnects #233
- OIDC Provider Can’t Be Excluded From Configured Forwarding-Proxy #232
- Improve Performance of Organization and OrganizationAffiliation Updates #230
- A Questionnaire and corresponding QuestionnaireResponse resource cannot be posted to the FHIR server at the same time in a transaction Bundle #226
- QuestionnaireResponseHelperImpl Uses Wrong Resource Type in getLocalVersionlessAbsoluteUrl Method #224
- Start New Development Cycle #219

This release contains contributions from @hhund, @jaboehri, @schwzr and @wetret.

### First Release Candidate for 1.6.0
General remarks:
- This is a pre-release for DSF 1.6.0, do not use in production.

Features:
- The execution performance of FHIR rest update operations for `Organization` and `OrganizationAffiliation` resource has been improved.

Bug Fixes:
- The DSF BPE missed `Task` and `QuestionnaireResponse` resources received by the DSF FHIR server during a connection outage between the DSF FHIR and DSF BPE servers. Missed `Task` and `QuestionnaireResponse` are now always downloded after the connection is reestablished. See #233.
- The OIDC provider URL could not be configured as a "no proxy" URL if a general forward proxy was configured for the DSF FHIR or DSF BPE servers. The responsible logic error in the code was fixed. See #232
- `QuestionnaireResponse` and corresponding `Questionnaire` resource could not be created together in a `transaction` `Bundle`. The reference check for the `QuestionnaireResponse.questionnaire` canoncial reference was move to the correct `transaction` `Bundle` execution phase. See #226
- A wrong resource type in the `getLocalVersionlessAbsoluteUrl` method of the plugin API class `QuestionnaireResponseHelperImpl` was fixed. See #224 

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.6.0-RC1](https://github.com/orgs/datasharingframework/packages/container/bpe/286530290?tag=1.6.0-RC1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.6.0-RC1](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/286522121?tag=1.6.0-RC1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.6.0-RC1](https://github.com/orgs/datasharingframework/packages/container/fhir/286526608?tag=1.6.0-RC1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.6.0-RC1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/286521613?tag=1.6.0-RC1)

Issues closed:
- Upgrade Dependencies #236
- BPE Misses Task and QuestionnaireResponse Resources if Network Disconnects #233
- OIDC Provider Can’t Be Excluded From Configured Forwarding-Proxy #232
- Improve Performance of Organization and OrganizationAffiliation Updates #230
- A Questionnaire and corresponding QuestionnaireResponse resource cannot be posted to the FHIR server at the same time in a transaction Bundle #226
- QuestionnaireResponseHelperImpl Uses Wrong Resource Type in getLocalVersionlessAbsoluteUrl Method #224
- Start New Development Cycle #219

This release contains contributions from @hhund, @jaboehri, @schwzr and @wetret.

### 1.5.2 - Maintenance Release
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.5.2 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.5.2 Upgrade Guide](https://dsf.dev/v1.5.2/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.5.2/maintain/install.html).
- With this maintenance release, library dependencies have been updated. The new builds of the bpe_proxy and fhir_proxy docker images are now based on Apache httpd 2.4.61 with amongst others a fix for CVE-2024-38477 mitigating potential denial-of-service attacks. 

Bug Fixes:
- Forms for FHIR Task and QuestionnaireResponse resource can now be submitted using the `Enter`-key.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Report v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.0.1)
- [MII Feasibility v1.0.0.5](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.5)
- [MII Data Transfer v1.0.1.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.1.0)
- [MII Data Sharing v1.0.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.1)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.5.2](https://github.com/orgs/datasharingframework/packages/container/bpe/241270645?tag=1.5.2)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.5.2](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/241262795?tag=1.5.2)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.5.2](https://github.com/orgs/datasharingframework/packages/container/fhir/241267527?tag=1.5.2)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.5.2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/241262265?tag=1.5.2)

Issues closed:
- Upgrade Dependencies #215
- fhir-proxy | 9 apache vulnerabilities fixed in apache 2.4.61 #214
- Fix "onSubmit" action on Task forms #213
- Start New Development Cycle #198

This release contains contributions from @hhund and @wetret.

### 1.5.1 - Maintenance Release
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.5.1 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.5.1 Upgrade Guide](https://dsf.dev/v1.5.1/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.5.1/maintain/install.html).
- With this maintenance release, library dependencies have been updated.

Bug Fixes:
- The DSF FHIR server now correctly shows the recipient organization within the Task details view.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.4](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.4)
- [MII Data Transfer v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.5.1](https://github.com/orgs/datasharingframework/packages/container/bpe/205087165?tag=1.5.1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.5.1](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/205059195?tag=1.5.1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.5.1](https://github.com/orgs/datasharingframework/packages/container/fhir/205085313?tag=1.5.1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.5.1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/205057772?tag=1.5.1)

Issues closed:
- Upgrade Dependencies #193
- Start New Development Cycle #191
- fhir-proxy | 3 apache vulnerabilities fixed in apache 2.4.59 #190
- FHIR Server GUI: Fix recipient in Task view #189

This release contains contributions from @EmteZogaf, @hhund, @schwzr and @wetret.

### 1.5.0 - UI and Questionnaire Improvements
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.5.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.5.0 Upgrade Guide](https://dsf.dev/v1.5.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.5.0/maintain/install.html).
- GitHub's [CodeQL](https://codeql.github.com) scanner was added to the suite of tools we used to regularly scan the repository for security vulnerabilities, inefficiencies and other bugs in Java and JavaScript code.
- Community guidelines including feature, issue and pull-request templates as well as security information and contribution guidelines have been added to the repository.

Features:
- Debug logging of DB queries, webservice request headers and the current (authenticated) user are now disabled by default and can be activated using config options.
- To improve the maintainability and robustness of the HTML generation code base, the DSF user interface is now generated using the [Thymeleaf](https://www.thymeleaf.org) templating engine.
- A visual indicator to differentiate between **dev**elopment, **test** and **prod**uction environments can now be configured using the [DEV_DSF_FHIR_SERVER_UI_THEME](https://dsf.dev/stable/maintain/fhir/configuration.html#dev-dsf-fhir-server-ui-theme) and [DEV_DSF_BPE_SERVER_UI_THEME](https://dsf.dev/stable/maintain/fhir/configuration.html#dev-dsf-bpe-server-ui-theme) environment variables. Additionally, the look and feel of the user interface can now be customized via CSS overrides.
- To show deployed processes and their BPMN diagrams as well as active process instances a user interface (UI) was added to the DSF BPE server application. The BPE UI is in _beta_ state and may change significantly in future releases.
- A database migration script has been added to cleanup old orphaned entries in the `read_access` table of the DSF FHIR database. In order to remove future corresponding entries from the `read_access` table ,if resources are permanently deleted, `BEFORE DELETE` database triggers have been added to resource tables.
- Questionnaire resources can now have optional items for BPMN user-tasks. The UI for displaying Task and QuestionnaireReponse Resources has been improved and now supports data-absent-reason extensions to create inputs without default values.
- Library dependencies were upgraded where possible and applicable.

Bug Fixes:
- The file-system readability of the client certificate private-key file in the BPE is now checked correctly.
- The `:below` name modifier has been configured for the ActivityDefinition.url search parameter.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.4](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.4)
- [MII Data Transfer v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.5.0](https://github.com/orgs/datasharingframework/packages/container/bpe/181872709?tag=1.5.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.5.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/181867281?tag=1.5.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.5.0](https://github.com/orgs/datasharingframework/packages/container/fhir/181870747?tag=1.5.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.5.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/181866902?tag=1.5.0)

Issues closed:
- Add Config Options to Enable Debug Logging of DB Queries, Webservice Request Headers and the Current User  #183
- Upgrade Dependencies #178
- Template Engine for HTML UIs #175
- Cleanup and Prevent Orphaned read_access Entries for Permanently Deleted Resources #170
- Readability of Client Certificate PrivateKey Not Checked Correctly in BPE #169
- :below Modifier Not Configured for Search Parameter ActivityDefinition.url #165
- Enable GitHub CodeQL #164
- Allow Optional Elements in Questionnaire #160
- Start New Development Cycle #158
- Add community guidelines #152

This release contains contributions from @EmteZogaf, @hhund, @jbellmann, @schwzr and @wetret.

### 1.4.0 - General Improvements and Bug Fixes
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.4.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.4.0 Upgrade Guide](https://dsf.dev/v1.4.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.4.0/maintain/install.html).

Features:
- HTML views for ActivityDefinition resources and searchset Bundle results have been added.
- The `name` search parameter was implemented for resources: CodeSystem, HealthcareService, Library, Location, Measure, Questionnaire, StructureDefinition and ValueSet. The `name` search parameter for Organization is now fully implemented and also works with the `Organization.alias` property.
- The Apache module `mod_proxy_wstunnel` is no longer needed and was removed from the fhir_proxy docker image.
- The maven `site` goal was configured to generate pmd, cpd and spotbugs with slf4j bug patterns static code analysis reports as well as javadoc html views. The maven goal `mvn site site:stage` can be used to create a combined report with working links at `\target\staging`.
- Changes suggested by static code analysis tools were implemented and a general code base cleanup was performed.
- Parallel maven builds with parallel execution of tests can now be performed, for example using `mvn install -T2C -DforkCount=4`.
- Release-candidate and milestone releases of process plugins are now treated like snapshot releases. During deployment metadata resources from these plugin types are created with status `draft` and updated on every startup.

Bug Fixes:
- Binary resources in JSON format exceeding length 20.000.000 previously resulted in a `ca.uhn.fhir.parser.DataFormatException`. Resources can now be up to max integer length (i.e. 2,14 GB) in size.
- A missing SLF4J placeholder was added to circumvent a `java.lang.IllegalArgumentException`.
- Reading a resource with the version after the current version, resulted in a HTTP 500 status code. The REST API now correctly answers with a HTTP 404 status code.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.1](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.3)
- [MII Data Transfer v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.4.0](https://github.com/orgs/datasharingframework/packages/container/bpe/159291561?tag=1.4.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.4.0](https://github.com/orgs/datasharingframework/packages/container/fhir/159288668?tag=1.4.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.4.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/159285465?tag=1.4.0)

Issues closed:
- Upgrade Dependencies #155
- Add HTML Views for ActivityDefinitions #151
- Remove mod_proxy_wstunnel From Apache Reverse Proxy #145 
- Configure Maven Site Goal #142 
- Increase maximum string length #138 
- Exception when logging audit information for resource without entity #137 
- Enable Parallel Maven Builds #135
- Start New Development Cycle #133 
- Prevent HTTP 500 Statuscode on non existent history element  #132  
- Treat RC releases similar to SNAPSHOT releases #131

This release contains contributions from @EmteZogaf, @hhund, @schwzr and @wetret.

### 1.3.2 - Maintenance Release
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.3.2 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.3.2 Upgrade Guide](https://dsf.dev/v1.3.2/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.3.2/maintain/install.html).

Bug Fixes:
- Switches the database ID generation strategy for the BPE from `DbIdGenerator` to `StrongUuidGenerator`, as described in the [camunda documentation](https://docs.camunda.org/manual/7.20/user-guide/process-engine/id-generator).

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.1](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.1)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.3.2](https://github.com/orgs/datasharingframework/packages/container/bpe/154354379?tag=1.3.2)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.3.2](https://github.com/orgs/datasharingframework/packages/container/fhir/154351273?tag=1.3.2)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.3.2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/154349744?tag=1.3.2)

Issues closed:
- Use UUID generator instead of database id generator #139

This release contains contributions from @EmteZogaf, @wetret, @schwzr and @hhund.

### 1.3.1 - Maintenance Release
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.3.1 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.3.1 Upgrade Guide](https://dsf.dev/v1.3.1/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.3.1/maintain/install.html).

Features:
- Removes insecure TLS cipher suites from the apache httpd reverse proxy Docker image.
- Adds browser security policy headers for `text/html` requests and requests for `/static/...` resources.
- Removes in-line css `style` and javascript event-handler definitions.
- Reorganized `commons-logging` excludes, added Dependency ban rule.
- Only sends the `X-ClientCert` header if the variable `SSL_CLIENT_CERT` is not empty. The value is empty if a users is not authenticated with a client certificate and client certificate authentication is optional.
- Adds generated mail address based on the `iss` (issuer) and `sub` (subject) values from the access token to the currently logged in Practitioner object if the token does not contain an `email` claim.

Bug Fixes:
- The OrganizationAffiliation page showed the `Participation Organization` identifier in the column `Parent Organization`.  The expected  `Parent Organization` identifier is now shown.
- The apache httpd reverse proxy did not set the required `X-Forwarded-Proto` header, leading to "faulty" redirect URLs when using OIDC logins. The `X-Forwarded-Proto` header for proxy request to the FHIR App server is now set.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.3.1](https://github.com/orgs/datasharingframework/packages/container/bpe/142957162?tag=1.3.1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.3.1](https://github.com/orgs/datasharingframework/packages/container/fhir/142954854?tag=1.3.1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.3.1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/142950963?tag=1.3.1)

Issues closed:
- Upgrade Dependencies #127
- Improve Some Logging for OIDC Logins #125 
- Redirect URI for OIDC Login is Http #124 
- Start New Development Cycle #120
- Remove Not Needed commons-logging Dependencies and Enforce Non Use #119 
- WebUI: Bug on OrganizationAffiliation page #118 
- Unsafe 3DES Cipher Suite in FHIR Proxy #117

This release contains contributions from @wetret, @schwzr and @hhund.

### 1.3.0 - Validation Support
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.3.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.3.0 Upgrade Guide](https://dsf.dev/v1.3.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.3.0/maintain/install.html).

Features:
- Necessary library dependencies were added to the BPE to support for FHIR resource validation in process plugins.
- HTML views for Organization, OrganizationAffiliation and Endpoint resources and their search Bundles have been added.

Bug Fixes:
- An infinite loop condition in the OrganizationProvider class used by process plugins was fixed. #104
- For reverse proxies configured with a non standard context URL, an invalid redirect from the root url without a trailing slash was corrected. #85

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.3.0](https://github.com/orgs/datasharingframework/packages/container/bpe/136172848?tag=1.3.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.3.0](https://github.com/orgs/datasharingframework/packages/container/fhir/136172183?tag=1.3.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.3.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/136170954?tag=1.3.0)

Issues closed:
- Upgrade Dependencies #114 
- Add Validation Dependencies to BPE #111 
- Create HTML Views for Organization, OrganizationAffiliation and Endpoint Search Bundles #107 
- Search for organizations by parent organization and member role hangs in infinite loop #104
- Make FHIR proxy server context path customizable #85

This release contains contributions from @EmteZogaf, @wetret and @hhund.

### 1.2.0 - Improved Concurrency Support
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.2.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.2.0 Upgrade Guide](https://dsf.dev/v1.2.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.2.0/maintain/install.html).

Features:
- The BPE server config parameter `dev.dsf.bpe.fhir.server.organization.identifier.value` (environment variable `DEV_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE`) was not needed and has been removed.
- Start and continue events for processes are now executed on a separate thread pool enabling concurrent execution of processes using "non async" process tasks.
- Support for "async" processes has been improved and config parameter / environment variables have been added to configure the process engine job executor.
- The special java StatusClient used for docker health checks has been replaced with `curl`.
- A new environment variable `SERVER_CONTEXT_PATH` was added to the reverse proxy docker image. The new environment variable can be used to configure the reverse-proxy path that gets delegated to the DSF FHIR app server.
- The FHIR server config parameter `dev.dsf.fhir.server.roleConfig` (environment variable `DEV_DSF_FHIR_SERVER_ROLECONFIG` is now optional and the validation of the config YAML has been improved.
- Java dependency have been upgraded where possible.

Bug Fixes:
- Literal block scalars can now be used with the environment variable `DEV_DSF_PROXY_NOPROXY`.
- The websocket connection to the DSF FHIR server no longer disconnects if long-running "non async" process tasks are executed. By handing over incoming Task and QuenstionnaireResponse resources to a separate thread-pool, the websocket client thread is immediately freed and able respond to websocket ping-frames keeping the connection from timing out.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.2.0](https://github.com/orgs/datasharingframework/packages/container/bpe/127300257?tag=1.2.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.2.0](https://github.com/orgs/datasharingframework/packages/container/fhir/127299735?tag=1.2.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.2.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/127298803?tag=1.2.0)

Issues closed:
- Increase Camunda DefaultJobExecutor Queue Size and Expose Config Options #101
- Make FHIR Server Role Config Optional, Improve Role Config Validation #96
- Replace Java StatusClient With curl #93
- Modify the BPE to Enable Parallel Execution of Non Async Processes #91
- BPE Task Websocket Connection Fails During Long Running Processes #90
- Remove Not Needed Organization Identifier Config Parameter From BPE #89
- DEV_DSF_PROXY_NOPROXY Not Working With Literal Block Scalar #87
- Start New Development Cycle #86
- Make FHIR proxy server context path customizable #85

This release contains contributions from @wetret and @hhund.

### First Release Candidate for 1.2.0
General remarks:
  - This is a pre-release for DSF 1.2.0 do not use in production.
- DSF v1.2.0-RC1 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade the Ping Pong plugin to [v1.0.1.0-RC1](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0).
<!--
- To Update an existing 1.x installation, please see the [1.x -> 1.2.0 Upgrade Guide](TODO).
- For a fresh deployment, follow the [installation instructions](TODO).
-->

Features:
- The BPE server config parameter `dev.dsf.bpe.fhir.server.organization.identifier.value` (environment variable `DEV_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE`) was not needed and has been removed.
- Start and continue events for processes are now executed on a separate thread pool enabling concurrent execution of processes using "non async" process tasks.
- The special java StatusClient used for docker health checks has been replaced with `curl`.
- A new environment variable `SERVER_CONTEXT_PATH` was added to the reverse proxy docker image. The new environment variable can be used to configure the reverse-proxy path that gets delegated to the DSF FHIR app server.
- The FHIR server config parameter `dev.dsf.fhir.server.roleConfig` (environment variable `DEV_DSF_FHIR_SERVER_ROLECONFIG` is now optional and the validation of the config YAML has been improved.
- Java dependency have been upgraded where possible.

Bug Fixes:
- Literal block scalars can now be used with the environment variable `DEV_DSF_PROXY_NOPROXY`.
- The websocket connection to the DSF FHIR server no longer disconnects if long-running "non async" process tasks are executed. By handing over incoming Task and QuenstionnaireResponse resources to a separate thread-pool, the websocket client thread is immediately freed and able respond to websocket ping-frames keeping the connection from timing out.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0-RC1](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0-RC1)
<!--
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)
-->

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.2.0-RC1](https://github.com/orgs/datasharingframework/packages/container/bpe/126887283?tag=1.2.0-RC1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.2.0-RC1](https://github.com/orgs/datasharingframework/packages/container/fhir/126886419?tag=1.2.0-RC1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.2.0-RC1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/126885011?tag=1.2.0-RC1)

Issues closed:
- Make FHIR Server Role Config Optional, Improve Role Config Validation #96
- Replace Java StatusClient With curl #93
- Modify the BPE to Enable Parallel Execution of Non Async Processes #91
- BPE Task Websocket Connection Fails During Long Running Processes #90
- Remove Not Needed Organization Identifier Config Parameter From BPE #89
- DEV_DSF_PROXY_NOPROXY Not Working With Literal Block Scalar #87
- Start New Development Cycle #86
- Make FHIR proxy server context path customizable #85

This release contains contributions from @wetret and @hhund.

### 1.1.0 - UI and Other Improvements
General remarks:
- This is an update for the new 1.0.0 DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.0.0 installation, please see the [1.0.0 -> 1.1.0 Upgrade Guide](https://dsf.dev/v1.1.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.1.0/maintain/install.html).

Features:
- Changes to the DSF FHIR server user interface (UI): While instantiating Task resources via the UI, input elements with cardinality 0..* or 1..* can now be added/removed dynamically. Placeholder attributes of input elements can be copied into the value attribute using a button. The user interface now supports dark and light themes selected based on operating system preferences or user selection. New UIs have been added for Task and QuestionnaireResponse search-bundle results.
- Search parameters can now beused more than once to perform AND queries. Descriptions for the history `_at` and `_since` parameters was added to the capability statement (/metadata) and help UIs.
- The unique criteria of the OrganizationAffiliation authorization rule was reworked. Different endpoint can now be configured for different roles of a member organization within a parent organization.
- For easier debugging, a custom User-Agent Header (DSF/${version}) is now send by the DSF webservice and websocket clients. 
- The access log pattern of the DSF FHIR reverse-proxy now includes the user-agent header and client certificate subject DN string. An environment variable to configure the mod_ssl parameter `SSLVerifyClient` has been added to the DSF FHIR reverse-proxy. This environment variable can be used to make client certificate non mandatory in order to used local OIDC authentication.
- Java dependency have been upgraded where possible.

Bug Fixes:
- Input elements are now always shown within the Task user interface of the DSF FHIR server.
- Process Plugin API: The Implementation of the OrganizationProvider.getOrganization(Identifier) method was fixed and now returns the correct results.
- Process Plugin Loader: A check for the existence of a NamingSystem version property was removed since NamingSystem resources in FHIR R4 do not support the version property.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.0.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.1.0](https://github.com/orgs/datasharingframework/packages/container/bpe/121017713?tag=1.1.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.1.0](https://github.com/orgs/datasharingframework/packages/container/fhir/121016922?tag=1.1.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.1.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/121014165?tag=1.1.0)

Issues closed:
- Upgrade Dependencies #79
- FHIR Server UI Dark Mode #75
- NamingSystem not deployable from Process Plugin #72
- Allow SSLVerifyClient Option in RevProxy to Be Configured Via Environment Variable #70
- Include Software Version in User-Agent for outgoing requests (BPE) #68
- Allow-List: Add Support for Specific Endpoints for Different Roles in a Parent Organization #65
- Add Support for Repeated Search Parameters to Define AND Queries #63
- OrganizationProvider Never Finds Organization by Identifier #61
- Start New Development Cycle #58
- Improve Task HTML view #56

This release contains contributions from @wetret and @hhund.

### 1.0.0 - Major Release
General remarks:
- This is a major DSF release not compatible with 0.9.x and older version developed at https://github.com/highmed/highmed-dsf

Features:
- OpenID Connect authentication for local users is now available for the FHIR server, which is acting as an OIDC client authenticating users for the HTML frontend via Authorization Code Flow.
- OAuth Bearer Token Authentication supports clients in directly interacting with the FHIR rest webservice.
- Authorization extensions were added to ActivityDefinition resources which allow plugins to configure execution of processes for users. 
- The FHIR `_summary` parameter is available as defined by the [specification](http://hl7.org/fhir/R4/search.html#summary).
- The DSF FHIR docker image contains a default "external" `bundle.xml` file to create the local Organization and Endpoint resources and therefore no longer needs to be mounted via a docker-volume.
- The process plugin API has been redesigned. Process plugins are now build for a specific API version that will be supported across future DSF versions.
- A new HTML view allows starting processes via Task resources with status `draft`.
- The authorization rule for `draft` Task resources was modified to allow creation of Tasks even if the Task would not be allowed to be executed.
- A `business-key` input parameter is automatically added via DSF BPE server TaskHandler if not set by user, so that executed processes can be traced better.
- Two new organization-roles are now available: `DTS`, `UAC`.
- The helper classes for Task and QuestionnaireResponse resources have been adapted to the new process plugin API.
- The documentation generator can now be used as a maven plugin using compile-time only annotations.
- The code base has been migrated to Java 17 and uses the new `dsf.dev` namespace.
- The Jetty config properties are now aligned with all other existing `dev.dsf...` properties.
- A common forward proxy server config with config parameters for: `url`, `username`, `password` and a `no-proxy` list is available and can be accessed via the process plugin API.
- The database migration steps have been streamlined as much as possible because there is no backwards 
compatibility with 0.9.x and older versions.
- Maven modules are now released via [maven central](https://repo.maven.apache.org/maven2/dev/dsf/).
- Self hosted runners are now provided to circumvent RAM and CPU shortages in GitHub hosted runners.

Removed:
- It is no longer possible to define dependencies between processes.
- It is no longer possible to deploy processes as folders.
- FHIR Metadata resources, profiles and authorization rules only needed for HiGHmed processes have been removed.
- Modules that are not considered as core modules of the DSF but are process specific have been removed: `dsf-consent`, `dsf-mpi`, `dsf-openehr`, `dsf-pseudonymization`, `dsf-bpe-webservice-client`
- The deprecated `organization-type` CodeSystem and ValueSet have been removed.
- The `plugin` folder has beed hidden from standard deployments. Processes should be released as fat-jars containing the "old" plugins.
- The VM-based test-setup has been removed in favor of the docker-based test-setup.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.0.0](https://github.com/orgs/datasharingframework/packages/container/bpe/105302481?tag=1.0.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.0.0](https://github.com/orgs/datasharingframework/packages/container/fhir/105300858?tag=1.0.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.0.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/105293483?tag=1.0.0)

Issues closed:
- Rework Draft Task Authorization and Extend ActivityDefinition Task Authorization Rules #51
- Create a Task HTML view #50
- Add OAuth Bearer Token Authentication #47
- Simplify the DB Migration Scripts #45
- Better align organization roles with currently existing roles #43
- Add Default External bundle.xml to Docker Image #40
- Cleanup TaskHelper and Add JavaDoc #38
- Add Common Forward Proxy Server Config #36
- Switch to self hosted github runner #34
- Separate documentation-generator and -annotations #30
- Mandatory business-key input parameter #27
- Improve Process Plugin API #26
- Add Support for Query Parameter _summary #23
- Remove dependencies between processes #22
- Remove process deployments using folders #21
- Align Jetty Config Properties With Existing dev.dsf... Properties #18
- Remove FHIR Metadata resources, profiles and authorization rules only needed for HiGHmed processes #13
- Remove deprecated organization-type CodeSystem and ValueSet #12
- Hide/rename plugin folder from default deployments #11
- Remove process specific modules #9
- Add OpenID Connect Authentication for Local Users #7
- Remove VM-based Test-Setup #6
- Migrate to Java 17 #2
- Migrate to dsf.dev Namespace #1

This release contains contributions from @schwzr, @wetret and @hhund.

### 1.0.0-M1 - First Milestone Pre Release
General remarks:
- This is the first milestone release for the upcoming major version 1.0.0. Do not use this in production.
- The upcoming new major version 1.0.0 is not compatible with old HiGHmed DSF releases.

Features:
- Maven modules are now released via [maven central](https://repo.maven.apache.org/maven2/dev/dsf/).
- The process plugin API has been redesigned. Process plugins are now build for a specific API version that will be supported across future DSF versions.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.0.0-M1](https://github.com/orgs/datasharingframework/packages/container/bpe/94695138?tag=1.0.0-M1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.0.0-M1](https://github.com/orgs/datasharingframework/packages/container/fhir/94693948?tag=1.0.0-M1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.0.0-M1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/94692546?tag=1.0.0-M1)

Issues closed:
- Add Default External bundle.xml to Docker Image #40
- Cleanup TaskHelper and Add JavaDoc #38
- Add Common Forward Proxy Server Config #36
- Switch to self hosted github runner #34
- Separate documentation-generator and -annotations #30
- Mandatory business-key input parameter #27
- Improve Process Plugin API #26
- Add Support for Query Parameter _summary #23
- Remove dependencies between processes #22
- Remove process deployments using folders #21
- Remove FHIR Metadata resources, profiles and authorization rules only needed for HiGHmed processes #13
- Remove deprecated organization-type CodeSystem and ValueSet #12
- Hide/rename plugin folder from default deployments #11
- Remove process specific modules #9
- Add OpenID Connect Authentication for Local Users #7
- Remove VM-based Test-Setup #6
- Migrate to Java 17 #2
- Migrate to dsf.dev Namespace #1

This release contains contributions from @schwzr, @wetret and @hhund.

