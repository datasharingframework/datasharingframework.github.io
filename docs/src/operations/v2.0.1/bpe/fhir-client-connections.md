---
title: FHIR Client Connections
icon: config
---

::: info Compatible Process Plugins
To our knowledge, as of January 2026 no process plugins have been released into production compatible with this plugin API v2 feature.
:::

AS part of the process plugin API v2 the DSF BPE Server provides a standardized way for plugins to use FHIR (data) server client connections configured for the entire BPE server. Connections are configured using YAML and specified via the environment variable [`DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG`](configuration.html#dev-dsf-bpe-fhir-client-connections-config). The value for this environment variable is specified as YAML using the block scalar |.

The listing below shows a minimal configuration:

```yaml
      DEV_DSF_BPE_FHIR_CLIENT_CONNECTIONS_CONFIG: |
        min-server:
          base-url: http://min.server/fhir
```


The mechanism supports authenticated and non-authenticated connections to FHIR (data) servers using `http` and `https` connections. Basic, Bearer-Token, Client-Certificate, and OIDC Client-Credentials-Flow authentication schemes are supported.

Multiple connections can be configured. Every connection has an ID (valid YAML property name) that needs to be supplied to the process plugin that is supposed to use the connection. Multiple process plugins can use the same connection config.

<!-- TODO default values and environment variables to configure them -->

A JSON schema is available to validate the configuration YAML: https://dsf.dev/schema/fhir_client_connections.json

### Configuration Examples

#### No Authentication, some defaults overridden

ID: `no-auth-server` 

```yaml
# yaml-language-server: $schema=https://dsf.dev/schema/fhir_client_connections.json
no-auth-server:
  base-url: https://no.auth.server:8443/fhir
  test-connection-on-startup: yes
  enable-debug-logging: yes
  connect-timeout: PT0.5S
  read-timeout: PT5M
  trusted-root-certificates-file: 'ca.crt'
```

#### Basic Authentication

ID: `basic-auth-server` 

```yaml
# yaml-language-server: $schema=https://dsf.dev/schema/fhir_client_connections.json
basic-auth-server:
  base-url: https://basic.auth.server/fhir
  basic-auth:
    username: user
    password-file: 'password.file’
```

#### Client Certificate Authentication

ID: `cert-auth-server` 

```yaml
# yaml-language-server: $schema=https://dsf.dev/schema/fhir_client_connections.json
cert-auth-server:
  base-url: https://cert.auth.server/fhir/foo
  cert-auth:
    private-key-file: 'client.key'
    certificate-file: 'client.crt'
    password: 'password'
```

#### OIDC Client-Credentials-Flow Authentication

ID: `oidc-auth-server`

```yaml
# yaml-language-server: $schema=https://dsf.dev/schema/fhir_client_connections.json
oidc-auth-server:
  base-url: https://oidc.auth.server/fhir
  oidc-auth:
    base-url: https://oidc.server
    client-id: some_client_id
    client-secret-file: 'path/password.file’
```

For a full list of configuration properties see the FHIR client connections [validation schema](https://dsf.dev/schema/fhir_client_connections.json).