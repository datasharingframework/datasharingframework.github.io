---
title: Access Control
icon: config
---

## Overview

The DSF BPE server provides a user interface for administrators. Without any additional configuration the user interface is not accessible with the organizations X.509 client certificate or any other certificate or OpenID Connect authenticated user.

::: tip OpenID Connect
To enable OpenID Connect authentication of local user, see the DSF BPE server OpenID Connect [configuration page](oidc).
:::

Access to the user interface can be enabled for client certificates and local users authenticating via OAuth 2.0 OpenID Connect. Access can be configured for so called roles, with all roles specified using the configuration parameter [DEV_DSF_BPE_SERVER_ROLECONFIG](configuration#dev-dsf-bpe-server-roleconfig). The value for this environment variable is specified as YAML using the block scalar `|`.

The listing below shows a minimal configuration to enable access for a specific client-certificate:

```yaml
      DEV_DSF_BPE_SERVER_ROLECONFIG: |
        - example_read_only_role:
            thumbprint: 00474993fa261b0225f93c5a66aa6fcc... [a-f0-9]{128}
            dsf-role:
              - ADMIN
```
The list of user roles above contains a single rule-entry `example_read_only_role`, matching the user via a client certificate SHA-512 thumprint and assigning three DSF roles. Any string can be used as the name for the rule-enty.

::: tip Certificate Thumbprints
SHA-512 certificate thumbprints in HEX form `[a-f0-9]{128}` can be calculated using:
```sh
certtool --fingerprint --hash=sha512 --infile=certificate.pem
```
:::

Multiple user roles can be specified and all matching roles will be applied to an authenticated users. Use an empty string `""` or a single block scalar `|` character as the value for the configuration parameter [DEV_DSF_BPE_SERVER_ROLECONFIG](configuration#dev-dsf-bpe-server-roleconfig) if no roles should be configured.

## Matching Users

To apply roles, users can be matched via the `thumbprint`, `email`, `token-role` or `token-group` properties. A single value or a list of values can be specified.

#### thumbprint

The property `thumbprint` can used to specify one or multiple SHA-512 certificate thumbprints. Roles from this rule are applied to the authenticating user if the certificate matches one of the specified thumbprints.

#### email

Using the property `email` users can be matched against e-mail addresses specified in X.509 client certificates and in OpenID Connect access tokens. Values will be matched against e-mail addresses specified in the subject DN (via PKCS#9 extension 1.2.840.113549.1.9.1) and RFC-822 Name entries of the Subject Alternative Name field. If the user authenticates via OpenID Connect, the `email` [claim](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) from the access token will be matched against the property values.

#### token-role and token-group

With the properties `token-role` and `token-group` role and group names can be specified to match against role and group claims within OAuth 2.0 access tokens.


## DSF and Practitioner Roles

Two types of roles can be applied to matched users. 

#### dsf-role

DSF roles specified via the `dsf-role` property define general access to the user interface. Allowed values are:

`ADMIN`.

#### practitioner-role

The BPE server currently does not support any practionier-roles.


## Examples

The first example defines a group of DSF administrators. Two client certificates match against this role:

```yaml
      DEV_DSF_BPE_SERVER_ROLECONFIG: |
        - certificate-admins:
            thumbprint: 
              - afb68b1d9d47e691b8b3d50fd9848467cada8b1c76f5f4b45f00c9f8432d505361a3ee27805f4aa06799d9ac8dace94b3f1942fce44d84866961259b13be825d
              - 2441bfddcad97eeb83c8c31fe181b90652787b8b59bf4e569219da7db4429e389479cb7c4a2f311e34217357d594ecad7d58ccfeef2a9e93c6fcf8d98897d88c
            dsf-role:
              - ADMIN
```


The second example defines a group of DSF administrators by specifying an `admin` role that gets matched against OAuth 2.0 access tokens:

```yaml
      DEV_DSF_BPE_SERVER_ROLECONFIG: |
        - token-role-admins:
            token-role: admin
            dsf-role:
              - ADMIN
```


The third example allows administrator access and users e-mail addresses to match this role. E-mail addresses from X.509 client certificates and OAuth 2.0 access tokens are matched:

```yaml
      DEV_DSF_BPE_SERVER_ROLECONFIG: |
        - email-admins:
            email:
              - first.user@test.org
              - second.user@test.org
            dsf-role:
              - ADMIN
```
