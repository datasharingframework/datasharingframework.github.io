---
title: OpenID Connect
icon: config
---

## Overview
Access to the DSF FHIR server REST API and user interface can be configured via [access control roles](access-control). By default users are only authenticated using X.509 client certificates, but authentication for local users via OAuth 2.0 OpenID Connect can also be enabled.

The DSF FHIR server supports [Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) for the user interface as well as [Bearer Token Authentication](https://datatracker.ietf.org/doc/html/rfc6750) for the REST API. [Back-Channel Logout](https://openid.net/specs/openid-connect-backchannel-1_0.html) is also supported.


::: tip FHIR Reverse Proxy
The DSF FHIR reverse proxy requires client certificates by default. To use OpenID Connect authentication the configuration parameter [SSL_VERIFY_CLIENT](/fhir-reverse-proxy/configuration.html#ssl-verify-client) needs to be set to `optional`.
:::


## Authorization Code Flow

To enable authentication via OpenID Connect authorization code flow, set the configuration parameter [DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW](configuration#dev-dsf-server-auth-oidc-authorization-code-flow) to `true` and specify the following parameters:

- [DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL](configuration#dev-dsf-server-auth-oidc-provider-realm-base-url)
- [DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID](configuration#dev-dsf-server-auth-oidc-client-id)
- [DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET](configuration#dev-dsf-server-auth-oidc-client-secret)

Optionally, back channel logout can be enabled by setting [DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT](configuration#dev-dsf-server-auth-oidc-back-channel-logout) to `true`. The DSF FHIR server accepts logout tokens at [DEV_DSF_FHIR_SERVER_BASE_URL](configuration#dev-dsf-fhir-server-base-url) + `/back-channel-logout`. The path can be modified via [DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT_PATH](configuration#dev-dsf-server-auth-oidc-back-channel-logout-path).


## Bearer Token Authentication

To enable bearer token authentication, set the configuration parameter [DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN](configuration#dev-dsf-server-auth-oidc-bearer-token) to `true` and specify the following parameter:
- [DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL](configuration#dev-dsf-server-auth-oidc-provider-realm-base-url)


## Additional ODIC Configuration Parameter

A number of additional `DEV_DSF_SERVER_AUTH_OIDC ...` configuration parameter are specify on the DSF FHIR server [configuration parameter page](configuration).

For example the configuration parameter [DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS](configuration#dev-dsf-server-auth-oidc-provider-client-trust-server-certificate-cas) can be used to specify a PEM encoded file with trusted root certificates to be used when accessing the OpenID Connect provider. If not specify the JVM default trusted root certificates are used for this connection.


## Example
```yaml
services:
  app:
    image: ghcr.io/datasharingframework/fhir:1.5.2
    # ...
    secrets:
      - keycloak_root_ca.pem
      # ...
    environment:
      # ...
      DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW: 'true'
      DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT: 'true'
      DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN: 'true'
      DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL: https://keycloak.test.org/realms/dsf
      DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS: /run/secrets/keycloak_root_ca.pem
      DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID: dsf-fhir
      DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET: n9bCMtjugv3Y_.szktXyQ2RH5se+J%o3
    # ...
secrets:
  keycloak_root_ca.pem:
    file: ./secrets/keycloak_root_ca.pem
```