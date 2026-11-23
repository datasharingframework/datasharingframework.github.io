---
title: Access Control
icon: config
---

## Overview

The DSF FHIR server implements a subset of the FHIR R4 [REST API](http://hl7.org/fhir/R4/http.html). When accessing the API with a web browser a limited graphical user interface is shown. Without any additional configuration the API and user interface is only accessible with the X.509 client certificate configured for the organization via the client certificate configuration parameter  [DEV_DSF_FHIR_CLIENT_CERTIFICATE](configuration##dev-dsf-fhir-client-certificate) or the manual override option [DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT](configuration#dev-dsf-fhir-server-organization-thumbprint).

::: tip OpenID Connect
To enable OpenID Connect authentication of local user, see the DSF FHIR server OpenID Connect [configuration page](oidc).
:::

Access to the API and user interface can be enabled for additional client certificates and local users authenticating via OAuth 2.0 OpenID Connect. Access can be configured for so called roles, with all roles specified using the configuration parameter [DEV_DSF_FHIR_SERVER_ROLECONFIG](configuration#dev-dsf-fhir-server-roleconfig). The value for this environment variable is specified as YAML using the block scalar `|`.

The listing below shows a minimal configuration to enable read access for all resources for a specific client-certificate:

```yaml
      DEV_DSF_FHIR_SERVER_ROLECONFIG: |
        - example_read_only_role:
            thumbprint: 00474993fa261b0225f93c5a66aa6fcc... [a-f0-9]{128}
            dsf-role:
              - READ
              - SEARCH
              - HISTORY
```

The list of user roles above contains a single rule-entry `example_read_only_role`, matching the user via a client certificate SHA-512 thumbprint and assigning three DSF roles. Any string can be used as the name for the rule-entry.

With DSF 2, you can now restrict the granted priviledges to specific resource types. If you want to restrict the rule-entry `example_read_only_role` to Organization resources, you can specify the resource type per dsf-role ("action"):

```yaml
      DEV_DSF_FHIR_SERVER_ROLECONFIG: |
        - example_read_only_organization_role:
            thumbprint: 00474993fa261b0225f93c5a66aa6fcc... [a-f0-9]{128}
            dsf-role:
              - READ: [Organization]
              - SEARCH: [Organization]
              - HISTORY: [Organization]
```

::: tip Certificate Thumbprints
SHA-512 certificate thumbprints in HEX form `[a-f0-9]{128}` can be calculated using:
```sh
certtool --fingerprint --hash=sha512 --infile=certificate.pem
```
:::

Multiple user roles can be specified and all matching roles will be applied to an authenticated users. Use an empty string `""` or a single block scalar `|` character as the value for the configuration parameter [DEV_DSF_FHIR_SERVER_ROLECONFIG](configuration#dev-dsf-fhir-server-roleconfig) if no roles should be configured.

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

DSF roles specified via the `dsf-role` property define general access to the REST API and user interface. Allowed values are:

`CREATE`, `READ`, `UPDATE`, `DELETE`, `SEARCH`, `HISTORY`, `PERMANENT_DELETE` and `WEBSOCKET`.


#### practitioner-role

In order to allow users to start processes, the property `practitioner-role` can be used to assign codes from FHIR [CodeSystem](http://hl7.org/fhir/R4/codesystem.html) resources. Codes are specified in the form `system-url|code`.
If the uses has a code specified here that match with a `requester` extension within the process plugin's [ActivityDefinition](http://hl7.org/fhir/R4/activitydefinition.html) resource, the user can start the process if he also has the `dsf-role` `CREATE`.

Process plugins can define and use their own code-systems. However, the DSF specifies a standard set of practitioner roles within the CodeSystem `http://dsf.dev/fhir/CodeSystem/practitioner-role`:

`UAC_USER`, `COS_USER`, `CRR_USER`, `DIC_USER`, `DMS_USER`, `DTS_USER`, `HRP_USER`, `TTP_USER`, `AMS_USER`, `ASP_USER`, `SPR_USER`, `TSP_USER`, `PPH_USER`, `BIO_USER`, and `DSF_ADMIN`.


## Examples

The first example defines a group of DSF administrators. Two client certificates match against this role:

```yaml
      DEV_DSF_FHIR_SERVER_ROLECONFIG: |
        - certificate-admins:
            thumbprint: 
              - afb68b1d9d47e691b8b3d50fd9848467cada8b1c76f5f4b45f00c9f8432d505361a3ee27805f4aa06799d9ac8dace94b3f1942fce44d84866961259b13be825d
              - 2441bfddcad97eeb83c8c31fe181b90652787b8b59bf4e569219da7db4429e389479cb7c4a2f311e34217357d594ecad7d58ccfeef2a9e93c6fcf8d98897d88c
            dsf-role:
              - CREATE
              - READ
              - UPDATE
              - DELETE
              - SEARCH
              - HISTORY
            practitioner-role:
              - http://dsf.dev/fhir/CodeSystem/practitioner-role|DSF_ADMIN

```


The second example defines an administrator group consisting of all users with the OAuth role admin plus two additional administrators identified by their client-certificate thumbprints. These administrators may perform the basic DSF tasks: starting and continuing of new process instances (by creating tasks and answering QuestionnaireResponses) and reading all resources on the DSF FHIR server.

```yaml
      DEV_DSF_FHIR_SERVER_ROLECONFIG: |
        - example_minimal_admin:
            thumbprint:
              - 0123...cdef
              - abcd...6789
            token-role: admin
            dsf-role:
              - CREATE: [Task]
              - READ
              - UPDATE: [QuestionnaireResponse]
              - SEARCH
              - HISTORY
            practitioner-role:
              - http://dsf.dev/fhir/CodeSystem/practitioner-role|DSF_ADMIN

```


The third example allows read-only access, restricted to QuestionnaireResponse resources only. Two e-mail addresses are used to match this role. E-mail addresses from X.509 client certificates and OAuth 2.0 access tokens are matched:

```yaml
      DEV_DSF_FHIR_SERVER_ROLECONFIG: |
        - read-only:
            email:
              - first.user@test.org
              - second.user@test.org
            dsf-role:
              - READ: [QuestionnaireResponse]
              - UPDATE: [QuestionnaireResponse]
              - SEARCH: [QuestionnaireResponse]
              - HISTORY: [QuestionnaireResponse]
```
