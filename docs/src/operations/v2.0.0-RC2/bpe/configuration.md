---
title: Configuration Parameters
icon: config
---

### DEV_DSF_BPE_DB_LIQUIBASE_FORCEUNLOCK
- **Property:** dev.dsf.bpe.db.liquibase.forceUnlock
- **Required:** No
- **Description:** To force liquibase to unlock the migration lock set to `true`
- **Recommendation:** Only use this option temporarily to unlock a stuck DB migration step
- **Default:** `false`


### DEV_DSF_BPE_DB_LIQUIBASE_LOCKWAITTIME
- **Property:** dev.dsf.bpe.db.liquibase.lockWaitTime
- **Required:** No
- **Description:** Liquibase change lock wait time in minutes, default 2 minutes
- **Default:** `2`


### DEV_DSF_BPE_DB_LIQUIBASE_PASSWORD or DEV_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE
- **Property:** dev.dsf.bpe.db.liquibase.password
- **Required:** Yes
- **Description:** Password to access the database from the DSF BPE server to execute database migrations
- **Recommendation:** Use docker secret file to configure by using *DEV_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_liquibase.password`


### DEV_DSF_BPE_DB_LIQUIBASE_USERNAME
- **Property:** dev.dsf.bpe.db.liquibase.username
- **Required:** No
- **Description:** Username to access the database from the DSF BPE server to execute database migrations
- **Default:** `liquibase_user`


### DEV_DSF_BPE_DB_URL
- **Property:** dev.dsf.bpe.db.url
- **Required:** Yes
- **Description:** Address of the database used for the DSF BPE server
- **Recommendation:** Change only if you don't use the provided docker-compose from the installation guide or made changes to the database settings/networking in the docker-compose
- **Example:** `jdbc:postgresql://db/bpe`


### DEV_DSF_BPE_DB_USER_CAMUNDA_GROUP
- **Property:** dev.dsf.bpe.db.user.camunda.group
- **Required:** No
- **Description:** Name of the user group to access the database from the DSF BPE server for camunda processes
- **Default:** `camunda_users`


### DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD or DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE
- **Property:** dev.dsf.bpe.db.user.camunda.password
- **Required:** Yes
- **Description:** Password to access the database from the DSF BPE server for camunda processes
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user_camunda.password`


### DEV_DSF_BPE_DB_USER_CAMUNDA_USERNAME
- **Property:** dev.dsf.bpe.db.user.camunda.username
- **Required:** No
- **Description:** Username to access the database from the DSF BPE server for camunda processes
- **Recommendation:** Use a different user then in *DEV_DSF_BPE_DB_USER_USERNAME*
- **Default:** `camunda_server_user`


### DEV_DSF_BPE_DB_USER_GROUP
- **Property:** dev.dsf.bpe.db.user.group
- **Required:** No
- **Description:** Name of the user group to access the database from the DSF BPE server
- **Default:** `bpe_users`


### DEV_DSF_BPE_DB_USER_PASSWORD or DEV_DSF_BPE_DB_USER_PASSWORD_FILE
- **Property:** dev.dsf.bpe.db.user.password
- **Required:** Yes
- **Description:** Password to access the database from the DSF BPE server
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_BPE_DB_USER_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user.password`


### DEV_DSF_BPE_DB_USER_USERNAME
- **Property:** dev.dsf.bpe.db.user.username
- **Required:** No
- **Description:** Username to access the database from the DSF BPE server
- **Default:** `bpe_server_user`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_CURRENTUSER
- **Property:** dev.dsf.bpe.debug.log.message.currentUser
- **Required:** No
- **Description:** To enable logging of the currently requesting user set to `true`
- **Recommendation:** This debug function should only be activated during development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_DBSTATEMENT
- **Property:** dev.dsf.bpe.debug.log.message.dbStatement
- **Required:** No
- **Description:** To enable logging of DB queries set to `true`
- **Recommendation:** This debug function should only be activated during development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYEND
- **Property:** dev.dsf.bpe.debug.log.message.onActivityEnd
- **Required:** No
- **Description:** To enable debug log messages for every bpmn activity end, set to `true`
- **Recommendation:** This debug function should only be activated during process plugin development
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYSTART
- **Property:** dev.dsf.bpe.debug.log.message.onActivityStart
- **Required:** No
- **Description:** To enable debug log messages for every bpmn activity start, set to `true`
- **Recommendation:** This debug function should only be activated during process plugin development
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_VARIABLES
- **Property:** dev.dsf.bpe.debug.log.message.variables
- **Required:** No
- **Description:** To enable logging of bpmn variables for every bpmn activity start or end, when logging of these events is enabled, set to `true`
- **Recommendation:** This debug function should only be activated during process plugin development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_VARIABLESLOCAL
- **Property:** dev.dsf.bpe.debug.log.message.variablesLocal
- **Required:** No
- **Description:** To enable logging of local bpmn variables for every bpmn activity start or end, when logging of these events is enabled, set to `true`
- **Recommendation:** This debug function should only be activated during process plugin development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_WEBSERVICEREQUEST
- **Property:** dev.dsf.bpe.debug.log.message.webserviceRequest
- **Required:** No
- **Description:** To enable logging of webservices requests set to `true`
- **Recommendation:** This debug function should only be activated during development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE
- **Property:** dev.dsf.bpe.fhir.client.certificate
- **Required:** Yes
- **Description:** PEM encoded file with local client certificate for https connections to local and remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate.pem`


### DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** dev.dsf.bpe.fhir.client.certificate.private.key
- **Required:** Yes
- **Description:** Private key corresponding to the local client certificate as PEM encoded file. Use DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate_private_key.pem`


### DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** dev.dsf.bpe.fhir.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the local client certificate encrypted private key
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/app_client_certificate_private_key.pem.password`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG
- **Property:** dev.dsf.bpe.fhir.client.connections.config
- **Required:** No
- **Description:** FHIR server connections YAML config for v2 process plugins


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_DEFAULT_ENABLE_DEBUG_LOGGING
- **Property:** dev.dsf.bpe.fhir.client.connections.config.default.enable.debug.logging
- **Required:** No
- **Description:** FHIR server connections YAML: Default value for properties `enable-debug-logging` and `oidc-auth.enable-debug-logging`
- **Recommendation:** To enable debug logging of requests and responses to configured FHIR servers by default set to `true`
- **Default:** `false`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_DEFAULT_ENABLE_DEBUG_LOGGING
- **Property:** dev.dsf.bpe.fhir.client.connections.config.default.enable.debug.logging
- **Required:** No
- **Description:** FHIR server connections YAML: Default value for properties `oidc-auth.verify-authorized-party`
- **Recommendation:** To disable verification of the authorized party (aud) claim by default set to `false`
- **Default:** `true`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_DEFAULT_OIDC_DISCOVERY_PATH
- **Property:** dev.dsf.bpe.fhir.client.connections.config.default.oidc.discovery.path
- **Required:** No
- **Description:** FHIR server connections YAML: Default value for property `oidc-auth.discovery-path`
- **Default:** `/.well-known/openid-configuration`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_DEFAULT_TEST_CONNECTION_ON_STARTUP
- **Property:** dev.dsf.bpe.fhir.client.connections.config.default.test.connection.on.startup
- **Required:** No
- **Description:** FHIR server connections YAML: Default value for properties `test-connection-on-startup` and `oidc-auth.test-connection-on-startup`
- **Recommendation:** To perform connection tests on BPE startup to configured FHIR servers by default set to `true`
- **Default:** `false`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_DEFAULT_TIMEOUT_CONNECT
- **Property:** dev.dsf.bpe.fhir.client.connections.config.default.timeout.connect
- **Required:** No
- **Description:** FHIR server connections YAML: Default value for properties `connect-timeout` and `oidc-auth.connect-timeout`
- **Default:** `PT2S`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_DEFAULT_TIMEOUT_READ
- **Property:** dev.dsf.bpe.fhir.client.connections.config.default.timeout.read
- **Required:** No
- **Description:** FHIR server connections YAML: Default value for properties `read-timeout` and `oidc-auth.read-timeout`
- **Default:** `PT10M`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_DEFAULT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.bpe.fhir.client.connections.config.default.trust.server.certificate.cas
- **Required:** No
- **Description:** FHIR server connections YAML: Default value for properties `trusted-root-certificates-file` and `oidc-auth.trusted-root-certificates-file`. Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted root certificates.
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`
- **Default:** `ca/server_root_cas`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_OIDC_CACHE
- **Property:** dev.dsf.bpe.fhir.client.connections.config.oidc.cache
- **Required:** No
- **Description:** Set `false` to disable caching of OIDC discovery and jwks resources as well as access tokens in the 'Client Credentials Grant' client; access tokens are evicted 10 seconds before they expire
- **Default:** `true`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_OIDC_CACHE_TIMEOUT_ACCESS_TOKEN
- **Property:** dev.dsf.bpe.fhir.client.connections.config.oidc.cache.timeout.access.token
- **Required:** No
- **Description:** OIDC 'Client Credentials Grant' client cache timeout of access tokens before they expire, duration is subtracted from the expires at value of the access token
- **Default:** `PT10S`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_OIDC_CACHE_TIMEOUT_CONFIGURATION_RESOURCE
- **Property:** dev.dsf.bpe.fhir.client.connections.config.oidc.cache.timeout.configuration.resource
- **Required:** No
- **Description:** OIDC 'Client Credentials Grant' client cache timeout of the 'openid-configuration' discovery resource
- **Default:** `PT1H`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_OIDC_CACHE_TIMEOUT_JWKS_RESOURCE
- **Property:** dev.dsf.bpe.fhir.client.connections.config.oidc.cache.timeout.jwks.resource
- **Required:** No
- **Description:** OIDC 'Client Credentials Grant' client cache timeout of the jwks resource
- **Default:** `PT1H`


### DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG_OIDC_TIME_VALIDATION_LEEWAY
- **Property:** dev.dsf.bpe.fhir.client.connections.config.oidc.time.validation.leeway
- **Required:** No
- **Description:** OIDC 'Client Credentials Grant' client access token time validation leeway for 'Not Before', 'Issued At' and 'Expires At' values
- **Default:** `PT10S`


### DEV_DSF_BPE_FHIR_CLIENT_LOCAL_TIMEOUT_CONNECT
- **Property:** dev.dsf.bpe.fhir.client.local.timeout.connect
- **Required:** No
- **Description:** Timeout until a connection is established with the local DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `PT2S`


### DEV_DSF_BPE_FHIR_CLIENT_LOCAL_TIMEOUT_READ
- **Property:** dev.dsf.bpe.fhir.client.local.timeout.read
- **Required:** No
- **Description:** Timeout until reading a resource from the local DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `PT60S`


### DEV_DSF_BPE_FHIR_CLIENT_LOCAL_VERBOSE
- **Property:** dev.dsf.bpe.fhir.client.local.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from the local DSF FHIR server, set to `true`
- **Default:** `false`


### DEV_DSF_BPE_FHIR_CLIENT_REMOTE_TIMEOUT_CONNECT
- **Property:** dev.dsf.bpe.fhir.client.remote.timeout.connect
- **Required:** No
- **Description:** Timeout until a connection is established with a remote DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `PT5S`


### DEV_DSF_BPE_FHIR_CLIENT_REMOTE_TIMEOUT_READ
- **Property:** dev.dsf.bpe.fhir.client.remote.timeout.read
- **Required:** No
- **Description:** Timeout until a reading a resource from a remote DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `PT60S`


### DEV_DSF_BPE_FHIR_CLIENT_REMOTE_VERBOSE
- **Property:** dev.dsf.bpe.fhir.client.remote.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from remote DSF FHIR servers, set to `true`
- **Default:** `false`


### DEV_DSF_BPE_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.bpe.fhir.client.trust.server.certificate.cas
- **Required:** No
- **Description:** Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to local and remote DSF FHIR servers
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`
- **Default:** `ca/server_root_cas`


### DEV_DSF_BPE_FHIR_QUESTIONNAIRE_RESPONSE_SUBSCRIPTION_SEARCH_PARAMETER
- **Property:** dev.dsf.bpe.fhir.questionnaire.response.subscription.search.parameter
- **Required:** No
- **Description:** Subscription to receive notifications about questionnaire response resources from the DSF FHIR server
- **Default:** `?criteria:exact=QuestionnaireResponse%3Fstatus%3Dcompleted&status=active&type=websocket&payload=application/fhir%2Bjson`


### DEV_DSF_BPE_FHIR_SERVER_BASE_URL
- **Property:** dev.dsf.bpe.fhir.server.base.url
- **Required:** Yes
- **Description:** Base address of the local DSF FHIR server to read/store fhir resources
- **Example:** `https://foo.bar/fhir`


### DEV_DSF_BPE_FHIR_TASK_SUBSCRIPTION_RETRY_MAX
- **Property:** dev.dsf.bpe.fhir.task.subscription.retry.max
- **Required:** No
- **Description:** Number of retries until a websocket connection can be established with the DSF FHIR server, `-1` means infinite number of retries
- **Default:** `-1`


### DEV_DSF_BPE_FHIR_TASK_SUBSCRIPTION_RETRY_SLEEP
- **Property:** dev.dsf.bpe.fhir.task.subscription.retry.sleep
- **Required:** No
- **Description:** Time between two retries to establish a websocket connection with the DSF FHIR server
- **Default:** `PT5S`


### DEV_DSF_BPE_FHIR_TASK_SUBSCRIPTION_SEARCH_PARAMETER
- **Property:** dev.dsf.bpe.fhir.task.subscription.search.parameter
- **Required:** No
- **Description:** Subscription to receive notifications about task resources from the DSF FHIR server
- **Default:** `?criteria:exact=Task%3Fstatus%3Drequested&status=active&type=websocket&payload=application/fhir%2Bjson`


### DEV_DSF_BPE_MAIL_CLIENT_CERTIFICATE
- **Property:** dev.dsf.bpe.mail.client.certificate
- **Required:** No
- **Description:** PEM encoded file with client certificate used to authenticate against the SMTP server. Requires SMTP over TLS to be enabled via *DEV_DSF_BPE_MAIL_USESMTPS*
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smtp_server_client_certificate.pem`


### DEV_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** dev.dsf.bpe.mail.client.certificate.private.key
- **Required:** No
- **Description:** Private key corresponging to the SMTP server client certificate as PEM encoded file. Use DEV_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *DEV_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted. Requires SMTP over TLS to be enabled via *DEV_DSF_BPE_MAIL_USESMTPS*
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smtp_server_client_certificate_private_key.pem`


### DEV_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or DEV_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** dev.dsf.bpe.mail.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the local client certificate encrypted private key
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/smtp_server_client_certificate_private_key.pem.password`


### DEV_DSF_BPE_MAIL_FROMADDRESS
- **Property:** dev.dsf.bpe.mail.fromAddress
- **Required:** No
- **Description:** Mail service sender address
- **Example:** `sender@localhost`


### DEV_DSF_BPE_MAIL_HOST
- **Property:** dev.dsf.bpe.mail.host
- **Required:** No
- **Description:** SMTP server hostname
- **Example:** `smtp.server.de`


### DEV_DSF_BPE_MAIL_MAILONERRORLOGEVENTBUFFERSIZE
- **Property:** dev.dsf.bpe.mail.mailOnErrorLogEventBufferSize
- **Required:** No
- **Description:** Number of previous INFO, WARN log messages to include in ERROR log event mails (>=0); requires send mail on ERROR log event option to be enabled to have an effect
- **Default:** `4`


### DEV_DSF_BPE_MAIL_MAILONERRORLOGEVENTDEBUGLOGLOCATION
- **Property:** dev.dsf.bpe.mail.mailOnErrorLogEventDebugLogLocation
- **Required:** No
- **Description:** Location of the BPE debug log as displayed in the footer of ERROR log event mails, does not modify the actual location of the debug log file; requires send mail on ERROR log event option to be enabled to have an effect
- **Default:** `/opt/bpe/log/bpe.log`


### DEV_DSF_BPE_MAIL_PASSWORD or DEV_DSF_BPE_MAIL_PASSWORD_FILE
- **Property:** dev.dsf.bpe.mail.password
- **Required:** No
- **Description:** SMTP server authentication password
- **Recommendation:** Configure if the SMTP server requires username/password authentication; use docker secret file to configure using *DEV_DSF_BPE_MAIL_PASSWORD_FILE*; enable SMTP over TLS via *DEV_DSF_BPE_MAIL_USESMTPS*


### DEV_DSF_BPE_MAIL_PORT
- **Property:** dev.dsf.bpe.mail.port
- **Required:** No
- **Description:** SMTP server port
- **Example:** `465`
- **Default:** `0`


### DEV_DSF_BPE_MAIL_REPLYTOADDRESSES
- **Property:** dev.dsf.bpe.mail.replyToAddresses
- **Required:** No
- **Description:** Mail service reply to addresses; comma or space separated list, YAML block scalars supported
- **Example:** `reply.to@localhost`


### DEV_DSF_BPE_MAIL_SENDMAILONERRORLOGEVENT
- **Property:** dev.dsf.bpe.mail.sendMailOnErrorLogEvent
- **Required:** No
- **Description:** To enable mails being send for every ERROR logged, set to `true`; requires SMTP server to be configured
- **Default:** `false`


### DEV_DSF_BPE_MAIL_SENDTESTMAILONSTARTUP
- **Property:** dev.dsf.bpe.mail.sendTestMailOnStartup
- **Required:** No
- **Description:** To enable a test mail being send on startup of the BPE, set to `true`; requires SMTP server to be configured
- **Default:** `false`


### DEV_DSF_BPE_MAIL_SMIME_P12KEYSTORE
- **Property:** dev.dsf.bpe.mail.smime.p12Keystore
- **Required:** No
- **Description:** PKCS12 encoded file with S/MIME certificate, private key and certificate chain to enable send mails to be S/MIME signed
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smime_certificate.p12`


### DEV_DSF_BPE_MAIL_SMIME_P12KEYSTORE_PASSWORD or DEV_DSF_BPE_MAIL_SMIME_P12KEYSTORE_PASSWORD_FILE
- **Property:** dev.dsf.bpe.mail.smime.p12Keystore.password
- **Required:** No
- **Description:** Password to decrypt the PKCS12 encoded S/MIMIE certificate file
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_BPE_MAIL_SMIME_P12KEYSTORE_PASSWORD_FILE*
- **Example:** `/run/secrets/smime_certificate.p12.password`


### DEV_DSF_BPE_MAIL_TOADDRESSES
- **Property:** dev.dsf.bpe.mail.toAddresses
- **Required:** No
- **Description:** Mail service recipient addresses, configure at least one; comma or space separated list, YAML block scalars supported
- **Example:** `recipient@localhost`


### DEV_DSF_BPE_MAIL_TOADDRESSESCC
- **Property:** dev.dsf.bpe.mail.toAddressesCc
- **Required:** No
- **Description:** Mail service CC recipient addresses; comma or space separated list, YAML block scalars supported
- **Example:** `cc.recipient@localhost`


### DEV_DSF_BPE_MAIL_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.bpe.mail.trust.server.certificate.cas
- **Required:** No
- **Description:** Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted root certificates to validate the server certificate of the SMTP server. Requires SMTP over TLS to be enabled via *DEV_DSF_BPE_MAIL_USESMTPS*
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/smtp_server_trust_certificates.pem`
- **Default:** `ca/server_root_cas`


### DEV_DSF_BPE_MAIL_USERNAME
- **Property:** dev.dsf.bpe.mail.username
- **Required:** No
- **Description:** SMTP server authentication username
- **Recommendation:** Configure if the SMTP server requires username/password authentication; enable SMTP over TLS via *DEV_DSF_BPE_MAIL_USESMTPS*


### DEV_DSF_BPE_MAIL_USESMTPS
- **Property:** dev.dsf.bpe.mail.useSmtps
- **Required:** No
- **Description:** To enable SMTP over TLS (smtps), set to `true`
- **Default:** `false`


### DEV_DSF_BPE_PROCESS_API_ALLOWED_BPE_CLASSES
- **Property:** dev.dsf.bpe.process.api.allowed.bpe.classes
- **Required:** No
- **Description:** Map with files containing qualified class names allowed to be loaded by plugins for api versions; map key must match v([1-9]+[0-9]*)
- **Recommendation:** Change only during development
- **Example:** `{v1: 'some/example.file', v2: 'other.file'}`
- **Default:** `{:}`


### DEV_DSF_BPE_PROCESS_API_ALLOWED_BPE_RESOURCE
- **Property:** dev.dsf.bpe.process.api.allowed.bpe.resource
- **Required:** No
- **Description:** Map with files containing resources allowed to be loaded by plugins for api versions; map key must match v([1-9]+[0-9]*)
- **Recommendation:** Change only during development
- **Example:** `{v1: 'some/example.file', v2: 'other.file'}`
- **Default:** `{:}`


### DEV_DSF_BPE_PROCESS_API_DIRECTORY
- **Property:** dev.dsf.bpe.process.api.directory
- **Required:** No
- **Description:** Directory containing the DSF BPE process plugin api jar files
- **Recommendation:** Change only during development
- **Default:** `api`


### DEV_DSF_BPE_PROCESS_API_RESOURCES_WITH_PRIORITY
- **Property:** dev.dsf.bpe.process.api.resources.with.priority
- **Required:** No
- **Description:** Map with files containing api/plugin resource with priority over bpe resources for plugins for api versions; map key must match v([1-9]+[0-9]*)
- **Recommendation:** Change only during development
- **Example:** `{v1: 'some/example.file', v2: 'other.file'}`
- **Default:** `{:}`


### DEV_DSF_BPE_PROCESS_ENGINE_COREPOOLSIZE
- **Property:** dev.dsf.bpe.process.engine.corePoolSize
- **Required:** No
- **Description:** Process engine job executor core pool size
- **Default:** `4`


### DEV_DSF_BPE_PROCESS_ENGINE_MAXPOOLSIZE
- **Property:** dev.dsf.bpe.process.engine.maxPoolSize
- **Required:** No
- **Description:** Process engine job executor max pool size, additional threads until max pool size are created if the queue is full
- **Default:** `10`


### DEV_DSF_BPE_PROCESS_ENGINE_QUEUESIZE
- **Property:** dev.dsf.bpe.process.engine.queueSize
- **Required:** No
- **Description:** Process engine job executor queue size, jobs are added to the queue if all core pool threads are busy
- **Default:** `40`


### DEV_DSF_BPE_PROCESS_EXCLUDED
- **Property:** dev.dsf.bpe.process.excluded
- **Required:** No
- **Description:** List of process names that should be excluded from deployment during startup of the DSF BPE server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Only deploy processes that can be started depending on your organization's roles in the Allow-List
- **Example:** `dsfdev_updateAllowList|1.0, another_process|x.y`


### DEV_DSF_BPE_PROCESS_FHIR_SERVER_RETRY_MAX
- **Property:** dev.dsf.bpe.process.fhir.server.retry.max
- **Required:** No
- **Description:** Number of retries until a connection can be established with the local DSF FHIR server during process deployment, `-1` means infinite number of retries
- **Default:** `-1`


### DEV_DSF_BPE_PROCESS_FHIR_SERVER_RETRY_SLEEP
- **Property:** dev.dsf.bpe.process.fhir.server.retry.sleep
- **Required:** No
- **Description:** Time between two retries to establish a connection with the local DSF FHIR server during process deployment
- **Default:** `PT5S`


### DEV_DSF_BPE_PROCESS_FHIR_VALIDATION_ENABLED
- **Property:** dev.dsf.bpe.process.fhir.validation.enabled
- **Required:** No
- **Description:** Set to true to enable FHIR validation feature for process plugins, not implemented for DSF version 2.0.x
- **Default:** `false`


### DEV_DSF_BPE_PROCESS_PLUGIN_DIRECTORY
- **Property:** dev.dsf.bpe.process.plugin.directory
- **Required:** No
- **Description:** Directory containing the DSF BPE process plugins for deployment on startup of the DSF BPE server
- **Recommendation:** Change only if you don't use the provided directory structure from the installation guide or made changes to tit
- **Default:** `process`


### DEV_DSF_BPE_PROCESS_PLUGIN_EXPLODED
- **Property:** dev.dsf.bpe.process.plugin.exploded
- **Required:** No
- **Description:** Directories containing exploded DSF BPE process plugins for deployment on startup of the DSF BPE server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Only for testing


### DEV_DSF_BPE_PROCESS_RETIRED
- **Property:** dev.dsf.bpe.process.retired
- **Required:** No
- **Description:** List of already deployed process names that should be retired during startup of the DSF BPE server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Retire processes that where deployed previously but are not anymore available
- **Example:** `old_process|x.y`


### DEV_DSF_BPE_PROCESS_THREADS
- **Property:** dev.dsf.bpe.process.threads
- **Required:** No
- **Description:** Number of parallel Task / QuestionnaireResponse threads to start new or continue existing processes, a value `<= 0` means number of cpu cores
- **Default:** `-1`


### DEV_DSF_BPE_SERVER_BASE_URL
- **Property:** dev.dsf.bpe.server.base.url
- **Required:** No
- **Description:** Base address of the BPE server, configure when exposing the web-ui
- **Example:** `https://foo.bar/bpe`
- **Default:** `https://localhost/bpe`


### DEV_DSF_BPE_SERVER_ROLECONFIG
- **Property:** dev.dsf.bpe.server.roleConfig
- **Required:** No
- **Description:** Role config YAML as defined in [BPE Server: Access Control](access-control)


### DEV_DSF_BPE_SERVER_STATIC_RESOURCE_CACHE
- **Property:** dev.dsf.bpe.server.static.resource.cache
- **Required:** No
- **Description:** To disable static resource caching, set to `false`
- **Recommendation:** Only set to `false` for development
- **Default:** `true`


### DEV_DSF_BPE_SERVER_UI_THEME
- **Property:** dev.dsf.bpe.server.ui.theme
- **Required:** No
- **Description:** UI theme parameter, adds a color indicator to the ui to distinguish `dev`, `test` and `prod` environments if configured; supported values: `dev`, `test` and `prod`


### DEV_DSF_LOG_CONFIG
- **Property:** dev.dsf.log.config
- **Required:** No
- **Description:** Location of a log4j configuration xml file; if file is readable, overrides configuration specified via *DEV_DSF_LOG_...* parameters
- **Default:** `conf/log4j2.xml`


### DEV_DSF_LOG_CONSOLE_ERR_ENABLED
- **Property:** dev.dsf.log.console.err.enabled
- **Required:** No
- **Description:** Set to `true` to enable console err output of the standard logger
- **Default:** `false`


### DEV_DSF_LOG_CONSOLE_ERR_LEVEL
- **Property:** dev.dsf.log.console.err.level
- **Required:** No
- **Description:** Standard logger console err output level, one of: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`
- **Default:** `INFO`


### DEV_DSF_LOG_CONSOLE_ERR_STYLE
- **Property:** dev.dsf.log.console.err.style
- **Required:** No
- **Description:** Standard logger console err output style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`, `TEXT_COLOR_MDC`, `TEXT_COLOR`
- **Default:** `TEXT_COLOR`


### DEV_DSF_LOG_CONSOLE_OUT_ENABLED
- **Property:** dev.dsf.log.console.out.enabled
- **Required:** No
- **Description:** Set to `false` to disable console out output of the standard logger
- **Default:** `true`


### DEV_DSF_LOG_CONSOLE_OUT_LEVEL
- **Property:** dev.dsf.log.console.out.level
- **Required:** No
- **Description:** Standard logger console out output level, one of: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`
- **Default:** `INFO`


### DEV_DSF_LOG_CONSOLE_OUT_STYLE
- **Property:** dev.dsf.log.console.out.style
- **Required:** No
- **Description:** Standard logger console out output style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`, `TEXT_COLOR_MDC`, `TEXT_COLOR`
- **Default:** `TEXT_COLOR`


### DEV_DSF_LOG_DATA_CONSOLE_ERR_ENABLED
- **Property:** dev.dsf.log.data.console.err.enabled
- **Required:** No
- **Description:** Set to `true` to enable console err output of the special data logger; the data logger can be used by process plugins to log sensitive data
- **Default:** `false`


### DEV_DSF_LOG_DATA_CONSOLE_ERR_STYLE
- **Property:** dev.dsf.log.data.console.err.style
- **Required:** No
- **Description:** Special data logger console err style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `TEXT`


### DEV_DSF_LOG_DATA_CONSOLE_OUT_ENABLED
- **Property:** dev.dsf.log.data.console.out.enabled
- **Required:** No
- **Description:** Set to `true` to enable console out output of the special data logger; the data logger can be used by process plugins to log sensitive data
- **Default:** `false`


### DEV_DSF_LOG_DATA_CONSOLE_OUT_STYLE
- **Property:** dev.dsf.log.data.console.out.style
- **Required:** No
- **Description:** Special data logger console out style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `TEXT`


### DEV_DSF_LOG_DATA_FILE_ENABLED
- **Property:** dev.dsf.log.data.file.enabled
- **Required:** No
- **Description:** Set to `true` to enable log file output of the special data logger; the data logger can be used by process plugins to log sensitive data
- **Default:** `false`


### DEV_DSF_LOG_DATA_FILE_STYLE
- **Property:** dev.dsf.log.data.file.style
- **Required:** No
- **Description:** Special data logger file style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `TEXT`


### DEV_DSF_LOG_FILE_ENABLED
- **Property:** dev.dsf.log.file.enabled
- **Required:** No
- **Description:** Set to `false` to disable log file output of the standard logger
- **Default:** `true`


### DEV_DSF_LOG_FILE_LEVEL
- **Property:** dev.dsf.log.file.level
- **Required:** No
- **Description:** Standard logger log file output level, one of: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`
- **Default:** `DEBUG`


### DEV_DSF_LOG_FILE_STYLE
- **Property:** dev.dsf.log.file.style
- **Required:** No
- **Description:** Standard logger log file output style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `TEXT_MDC`


### DEV_DSF_PROXY_NOPROXY
- **Property:** dev.dsf.proxy.noProxy
- **Required:** No
- **Description:** Forward proxy no-proxy list, entries will match exactly or against (one level) sub-domains, if no port is specified - all ports are matched; comma or space separated list, YAML block scalars supported
- **Example:** `foo.bar, test.com:8080`


### DEV_DSF_PROXY_PASSWORD or DEV_DSF_PROXY_PASSWORD_FILE
- **Property:** dev.dsf.proxy.password
- **Required:** No
- **Description:** Forward Proxy password
- **Recommendation:** Configure password if proxy requires authentication, use docker secret file to configure using *DEV_DSF_PROXY_PASSWORD_FILE*


### DEV_DSF_PROXY_URL
- **Property:** dev.dsf.proxy.url
- **Required:** No
- **Description:** Forward (http/https) proxy url, use *DEV_DSF_BPE_PROXY_NOPROXY* to list domains that do not require a forward proxy
- **Example:** `http://proxy.foo:8080`


### DEV_DSF_PROXY_USERNAME
- **Property:** dev.dsf.proxy.username
- **Required:** No
- **Description:** Forward proxy username
- **Recommendation:** Configure username if proxy requires authentication


### DEV_DSF_SERVER_API_HOST
- **Property:** dev.dsf.server.api.host
- **Required:** No
- **Description:** API connector host, default in docker image: `0.0.0.0`
- **Default:** `127.0.0.1`


### DEV_DSF_SERVER_API_PORT
- **Property:** dev.dsf.server.api.port
- **Required:** No
- **Description:** API connector port, default in docker image: `8080`


### DEV_DSF_SERVER_AUTH_CLIENT_CERTIFICATE_HEADER
- **Property:** dev.dsf.server.auth.client.certificate.header
- **Required:** No
- **Description:** Name of HTTP header with client certificate from reverse proxy
- **Default:** `X-ClientCert`


### DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW
- **Property:** dev.dsf.server.auth.oidc.authorization.code.flow
- **Required:** No
- **Description:** Set to `true` to enable OIDC authorization code flow
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL*, *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID* and *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET* or *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET_FILE* to be specified
- **Default:** `false`


### DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT
- **Property:** dev.dsf.server.auth.oidc.back.channel.logout
- **Required:** No
- **Description:** Set to `true` to enable OIDC back-channel logout
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW* to be set to `true` (enabled), *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID* and *DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT_PATH* to be specified
- **Default:** `false`


### DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT_PATH
- **Property:** dev.dsf.server.auth.oidc.back.channel.logout.path
- **Required:** No
- **Description:** Path called by the OIDC provide to request back-channel logout
- **Default:** `/back-channel-logout`


### DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN
- **Property:** dev.dsf.server.auth.oidc.bearer.token
- **Required:** No
- **Description:** Set to `true` to enable OIDC bearer token authentication
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL* to be specified
- **Default:** `false`


### DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN_AUDIENCE
- **Property:** dev.dsf.server.auth.oidc.bearer.token.audience
- **Required:** No
- **Description:** Audience (aud) value to verify before accepting OIDC bearer tokens, uses value from `DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID` by default, set blank string e.g. `''` to disable
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL* to be specified and *DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN* set tor `true`


### DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID
- **Property:** dev.dsf.server.auth.oidc.client.id
- **Required:** No
- **Description:** OIDC provider client_id, must be specified if *DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW* is enabled


### DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET or DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET_FILE
- **Property:** dev.dsf.server.auth.oidc.client.secret
- **Required:** No
- **Description:** OIDC provider client_secret, must be specified if *DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW* is enabled


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE
- **Property:** dev.dsf.server.auth.oidc.provider.client.certificate
- **Required:** No
- **Description:** PEM encoded file with client certificate for https connections to the OIDC provider
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/oidc_provider_client_certificate.pem`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** dev.dsf.server.auth.oidc.provider.client.certificate.private.key
- **Required:** No
- **Description:** Private key corresponding to the client certificate for the OIDC provider as PEM encoded file. Use *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/oidc_provider_client_certificate_private_key.pem`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** dev.dsf.server.auth.oidc.provider.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the client certificate for the OIDC provider encrypted private key
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/oidc_provider_client_certificate_private_key.pem.password`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TIMEOUT_CONNECT
- **Property:** dev.dsf.server.auth.oidc.provider.client.timeout.connect
- **Required:** No
- **Description:** OIDC provider client connect timeout
- **Default:** `PT5S`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TIMEOUT_READ
- **Property:** dev.dsf.server.auth.oidc.provider.client.timeout.read
- **Required:** No
- **Description:** OIDC provider client read timeout
- **Default:** `PT30S`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.server.auth.oidc.provider.client.trust.server.certificate.cas
- **Required:** No
- **Description:** Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to the OIDC provider
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/oidc_provider_trust_certificates.pem`
- **Default:** `ca/server_root_cas`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_DISCOVERY_PATH
- **Property:** dev.dsf.server.auth.oidc.provider.discovery.path
- **Required:** No
- **Description:** OIDC provider discovery path
- **Default:** `/.well-known/openid-configuration`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL
- **Property:** dev.dsf.server.auth.oidc.provider.realm.base.url
- **Required:** No
- **Description:** OIDC provider realm base url
- **Example:** `https://keycloak.test.com:8443/realms/example-realm-name`


### DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS
- **Property:** dev.dsf.server.auth.trust.client.certificate.cas
- **Required:** No
- **Description:** Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted full CA chains to validate client certificates for https connections from local and remote clients
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`
- **Default:** `ca/client_ca_chains`


### DEV_DSF_SERVER_CERTIFICATE
- **Property:** dev.dsf.server.certificate
- **Required:** No
- **Description:** Server certificate file for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CERTIFICATE_CHAIN
- **Property:** dev.dsf.server.certificate.chain
- **Required:** No
- **Description:** Server certificate chain file for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CERTIFICATE_KEY
- **Property:** dev.dsf.server.certificate.key
- **Required:** No
- **Description:** Server certificate private key file for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CERTIFICATE_KEY_PASSWORD or DEV_DSF_SERVER_CERTIFICATE_KEY_PASSWORD_FILE
- **Property:** dev.dsf.server.certificate.key.password
- **Required:** No
- **Description:** Server certificate private key file password for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CONTEXT_PATH
- **Property:** dev.dsf.server.context.path
- **Required:** No
- **Description:** Web application context path, default in `bpe` docker image: `/bpe`, default in `fhir` docker image: `/fhir`
- **Recommendation:** Only modify for testing


### DEV_DSF_SERVER_STATUS_HOST
- **Property:** dev.dsf.server.status.host
- **Required:** No
- **Description:** Status connector host
- **Default:** `127.0.0.1`


### DEV_DSF_SERVER_STATUS_PORT
- **Property:** dev.dsf.server.status.port
- **Required:** No
- **Description:** Status connector port, default in docker image: `10000`