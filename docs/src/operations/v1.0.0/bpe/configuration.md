# Parameters BPE Server

Please also check [common parameters](common) for additional configuration options.

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
- **Description:** The password to access the database from the DSF BPE server to execute database migrations
- **Recommendation:** Use docker secret file to configure by using *DEV_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_liquibase.password`


### DEV_DSF_BPE_DB_LIQUIBASE_USERNAME
- **Property:** dev.dsf.bpe.db.liquibase.username
- **Required:** No
- **Description:** The user name to access the database from the DSF BPE server to execute database migrations
- **Default:** `liquibase_user`


### DEV_DSF_BPE_DB_URL
- **Property:** dev.dsf.bpe.db.url
- **Required:** Yes
- **Description:** The address of the database used for the DSF BPE server
- **Recommendation:** Change only if you don't use the provided docker-compose from the installation guide or made changes to the database settings/networking in the docker-compose
- **Example:** `jdbc:postgresql://db/bpe`


### DEV_DSF_BPE_DB_USER_CAMUNDA_GROUP
- **Property:** dev.dsf.bpe.db.user.camunda.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF BPE server for camunda processes
- **Default:** `camunda_users`


### DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD or DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE
- **Property:** dev.dsf.bpe.db.user.camunda.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF BPE server for camunda processes
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user_camunda.password`


### DEV_DSF_BPE_DB_USER_CAMUNDA_USERNAME
- **Property:** dev.dsf.bpe.db.user.camunda.username
- **Required:** No
- **Description:** The user name to access the database from the DSF BPE server for camunda processes
- **Recommendation:** Use a different user then in *DEV_DSF_BPE_DB_USER_USERNAME*
- **Default:** `camunda_server_user`


### DEV_DSF_BPE_DB_USER_GROUP
- **Property:** dev.dsf.bpe.db.user.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF BPE server
- **Default:** `bpe_users`


### DEV_DSF_BPE_DB_USER_PASSWORD or DEV_DSF_BPE_DB_USER_PASSWORD_FILE
- **Property:** dev.dsf.bpe.db.user.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF BPE server
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_BPE_DB_USER_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user.password`


### DEV_DSF_BPE_DB_USER_USERNAME
- **Property:** dev.dsf.bpe.db.user.username
- **Required:** No
- **Description:** The user name to access the database from the DSF BPE server
- **Default:** `bpe_server_user`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYEND
- **Property:** dev.dsf.bpe.debug.log.message.onActivityEnd
- **Required:** No
- **Description:** To enable debug log messages for every bpmn activity end, set to `true`.
- **Recommendation:** This debug function should only be activated during process plugin development.
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYSTART
- **Property:** dev.dsf.bpe.debug.log.message.onActivityStart
- **Required:** No
- **Description:** To enable debug log messages for every bpmn activity start, set to `true`.
- **Recommendation:** This debug function should only be activated during process plugin development.
- **Default:** `false`


### DEV_DSF_BPE_DEBUG_LOG_MESSAGE_VARIABLES
- **Property:** dev.dsf.bpe.debug.log.message.variables
- **Required:** No
- **Description:** To enable loging bpmn variables for every bpmn activity start or end, when logging of these events is enabled, set to `true`.
- **Recommendation:** This debug function should only be activated during process plugin development. WARNNING: Confidential information may be leaked via the debug log!
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


### DEV_DSF_BPE_FHIR_CLIENT_LOCAL_TIMEOUT_CONNECT
- **Property:** dev.dsf.bpe.fhir.client.local.timeout.connect
- **Required:** No
- **Description:** The timeout in milliseconds until a connection is established with the local DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `2000`


### DEV_DSF_BPE_FHIR_CLIENT_LOCAL_TIMEOUT_READ
- **Property:** dev.dsf.bpe.fhir.client.local.timeout.read
- **Required:** No
- **Description:** The timeout in milliseconds until reading a resource from the local DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `60000`


### DEV_DSF_BPE_FHIR_CLIENT_LOCAL_VERBOSE
- **Property:** dev.dsf.bpe.fhir.client.local.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from the local DSF FHIR server, set to `true`
- **Default:** `false`


### DEV_DSF_BPE_FHIR_CLIENT_REMOTE_TIMEOUT_CONNECT
- **Property:** dev.dsf.bpe.fhir.client.remote.timeout.connect
- **Required:** No
- **Description:** The timeout in milliseconds until a connection is established with a remote DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `5000`


### DEV_DSF_BPE_FHIR_CLIENT_REMOTE_TIMEOUT_READ
- **Property:** dev.dsf.bpe.fhir.client.remote.timeout.read
- **Required:** No
- **Description:** The timeout in milliseconds until a reading a resource from a remote DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `60000`


### DEV_DSF_BPE_FHIR_CLIENT_REMOTE_VERBOSE
- **Property:** dev.dsf.bpe.fhir.client.remote.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from remote DSF FHIR servers, set to `true`
- **Default:** `false`


### DEV_DSF_BPE_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.bpe.fhir.client.trust.server.certificate.cas
- **Required:** Yes
- **Description:** PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to local and remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_server_trust_certificates.pem`


### DEV_DSF_BPE_FHIR_QUESTIONNAIRE_RESPONSE_SUBSCRIPTION_SEARCH_PARAMETER
- **Property:** dev.dsf.bpe.fhir.questionnaire.response.subscription.search.parameter
- **Required:** No
- **Description:** Subscription to receive notifications about questionnaire response resources from the DSF FHIR server
- **Default:** `?criteria=QuestionnaireResponse%3Fstatus%3Dcompleted&status=active&type=websocket&payload=application/fhir%2Bjson`


### DEV_DSF_BPE_FHIR_SERVER_BASE_URL
- **Property:** dev.dsf.bpe.fhir.server.base.url
- **Required:** Yes
- **Description:** The base address of the local DSF FHIR server to read/store fhir resources
- **Example:** `https://foo.bar/fhir`


### DEV_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE
- **Property:** dev.dsf.bpe.fhir.server.organization.identifier.value
- **Required:** Yes
- **Description:** The local identifier value used in the Allow-List
- **Recommendation:** By convention: The shortest possible FQDN that resolve the homepage of the organization
- **Example:** `hospital.com`


### DEV_DSF_BPE_FHIR_TASK_SUBSCRIPTION_RETRY_MAX
- **Property:** dev.dsf.bpe.fhir.task.subscription.retry.max
- **Required:** No
- **Description:** Number of retries until a websocket connection can be established with the DSF FHIR server, `-1` means infinite number of retries
- **Default:** `-1`


### DEV_DSF_BPE_FHIR_TASK_SUBSCRIPTION_RETRY_SLEEP
- **Property:** dev.dsf.bpe.fhir.task.subscription.retry.sleep
- **Required:** No
- **Description:** Milliseconds between two retries to establish a websocket connection with the DSF FHIR server
- **Default:** `5000`


### DEV_DSF_BPE_FHIR_TASK_SUBSCRIPTION_SEARCH_PARAMETER
- **Property:** dev.dsf.bpe.fhir.task.subscription.search.parameter
- **Required:** No
- **Description:** Subscription to receive notifications about task resources from the DSF FHIR server
- **Default:** `?criteria=Task%3Fstatus%3Drequested&status=active&type=websocket&payload=application/fhir%2Bjson`


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
- **Description:** Number of previous INFO, WARN log messages to include in ERROR log event mails (>=0). Requires send mail on ERROR log event option to be enabled to have an effect.
- **Default:** `4`


### DEV_DSF_BPE_MAIL_MAILONERRORLOGEVENTDEBUGLOGLOCATION
- **Property:** dev.dsf.bpe.mail.mailOnErrorLogEventDebugLogLocation
- **Required:** No
- **Description:** Location of the BPE debug log as displayed in the footer of ERROR log event mails, does not modify the actual location of the debug log file. Requires send mail on ERROR log event option to be enabled to have an effect.
- **Default:** `/opt/bpe/log/bpe.log`


### DEV_DSF_BPE_MAIL_PASSWORD or DEV_DSF_BPE_MAIL_PASSWORD_FILE
- **Property:** dev.dsf.bpe.mail.password
- **Required:** No
- **Description:** SMTP server authentication password
- **Recommendation:** Configure if the SMTP server reqiures username/password authentication; use docker secret file to configure using *DEV_DSF_BPE_MAIL_PASSWORD_FILE*; enable SMTP over TLS via *DEV_DSF_BPE_MAIL_USESMTPS*


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
- **Description:** To enable mails being send for every ERROR logged, set to `true`. Requires SMTP server to be configured.
- **Default:** `false`


### DEV_DSF_BPE_MAIL_SENDTESTMAILONSTARTUP
- **Property:** dev.dsf.bpe.mail.sendTestMailOnStartup
- **Required:** No
- **Description:** To enable a test mail being send on startup of the BPE, set to `true`. Requires SMTP server to be configured.
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
- **Description:** PEM encoded file with one or more trusted root certificates to validate the server certificate of the SMTP server. Requires SMTP over TLS to be enabled via *DEV_DSF_BPE_MAIL_USESMTPS*
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smtp_server_trust_certificates.pem`


### DEV_DSF_BPE_MAIL_USERNAME
- **Property:** dev.dsf.bpe.mail.username
- **Required:** No
- **Description:** SMTP server authentication username
- **Recommendation:** Configure if the SMTP server reqiures username/password authentication; enable SMTP over TLS via *DEV_DSF_BPE_MAIL_USESMTPS*


### DEV_DSF_BPE_MAIL_USESMTPS
- **Property:** dev.dsf.bpe.mail.useSmtps
- **Required:** No
- **Description:** To enable SMTP over TLS (smtps), set to `true`
- **Default:** `false`


### DEV_DSF_BPE_PROCESS_EXCLUDED
- **Property:** dev.dsf.bpe.process.excluded
- **Required:** No
- **Description:** List of process names that should be excluded from deployment during startup of the DSF BPE server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Only deploy processes that can be started depending on your organization's roles in the Allow-List


### DEV_DSF_BPE_PROCESS_FHIR_SERVER_RETRY_MAX
- **Property:** dev.dsf.bpe.process.fhir.server.retry.max
- **Required:** No
- **Description:** Number of retries until a connection can be established with the local DSF FHIR server during process deployment, `-1` means infinite number of retries
- **Default:** `-1`


### DEV_DSF_BPE_PROCESS_FHIR_SERVER_RETRY_SLEEP
- **Property:** dev.dsf.bpe.process.fhir.server.retry.sleep
- **Required:** No
- **Description:** Milliseconds between two retries to establish a connection with the local DSF FHIR server during process deployment
- **Default:** `5000`


### DEV_DSF_BPE_PROCESS_PLUGIN_DIRECTROY
- **Property:** dev.dsf.bpe.process.plugin.directroy
- **Required:** No
- **Description:** Directory containing the DSF BPE process plugins for deployment on startup of the DSF BPE server
- **Recommendation:** Change only if you don't use the provided directory structure from the installation guide or made changes to tit
- **Default:** `process`


### DEV_DSF_BPE_PROCESS_RETIRED
- **Property:** dev.dsf.bpe.process.retired
- **Required:** No
- **Description:** List of already deployed process names that should be retired during startup of the DSF BPE server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Retire processes that where deployed previously but are not anymore available


### DEV_DSF_PROXY_NOPROXY
- **Property:** dev.dsf.proxy.noProxy
- **Required:** No
- **Description:** Forward proxy no-proxy list, entries will match exactly or agianst (one level) sub-domains, if no port is specified - all ports are matched; comma or space separated list, YAML block scalars supported
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


