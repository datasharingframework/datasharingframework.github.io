---
title: Security Hardening Measures
icon: safe
---

# Defense-in-Depth Hardening Measures

For DSF {{release.tag}} we performed a number of IT security hardening measures. The following changes follow security best practices. They reduce risk for non-standard deployments, protect against future code changes that could introduce new attack paths, and align with common security audit expectations.

Each entry describes the change and why we consider it not exploitable in the standard DSF deployment model.

## Deployment Context

The standard DSF deployment uses:

- **Apache2 reverse proxy** with `mod_ssl` performing TLS termination and client certificate validation (`SSLVerifyClient require`, DN checks against trusted CA list)
- **Docker containers** with network isolation (frontend / backend / inter-service networks)
- **Jetty application** on internal port 8080, not directly reachable from outside
- **Status port** on `127.0.0.1:10000` (localhost only), separate Jetty connector
- **Configuration** via Docker environment variables / secrets, only admin-writable
- **PostgreSQL** not exposed to host, only accessible from the application container

The assessments below consider this standard deployment. Non-standard deployments (e.g., Jetty directly exposed, no reverse proxy) may have different risk profiles.

## Improved XML Transformer Configuration

Disabled external entity resolution and enabled secure processing on `TransformerFactory` instances in `ProcessService`, `ThymeleafTemplateServiceImpl`, and `BundleGenerator`. We consider this not exploitable because although external organizations and authorized users can create FHIR resources (e.g., Tasks), the content never reaches the TransformerFactory as raw XML. The data path is: user input is parsed by HAPI FHIR into a Java object model (stripping any XML-level constructs like DOCTYPE/ENTITY declarations), stored as JSONB in PostgreSQL, and then re-serialized to well-formed XML by HAPI's serializer when displayed. The TransformerFactory only pretty-prints HAPI's serialized output, where all text content is properly XML-escaped. `BundleGenerator` is a Maven build-time tool, not a runtime component. Hardening against CWE-611 (XXE).

Commit: [`b89c512dc`](https://github.com/datasharingframework/dsf/commit/b89c512dc)

## Database Username/Group Validation

Added regex validation (`^[a-zA-Z_][a-zA-Z0-9_$]{0,62}$`) for PostgreSQL identifier config parameters used in DDL statements. We consider this not exploitable because these values come exclusively from admin-managed config files and Docker environment variables — an attacker with write access to these already has full system control. Hardening against CWE-89.

Commit: [`7e2de0ed8`](https://github.com/datasharingframework/dsf/commit/7e2de0ed8)

## HTTPS Enforcement for OIDC Endpoints

Added explicit check that OIDC token and JWKS endpoints use HTTPS. We consider this not exploitable because a compromised OIDC provider can already issue arbitrary tokens directly, making HTTP interception redundant. In the MITM scenario (legitimate provider, network attacker), the provider URL is admin-configured as HTTPS and legitimate providers always return HTTPS endpoints in their discovery documents. In both cases, obtained tokens are constrained by the admin-managed `roleConfig` — no privilege escalation beyond configured roles is possible. Hardening against CWE-918 / CWE-319.

Commit: [`bdeddf308`](https://github.com/datasharingframework/dsf/commit/bdeddf308)

## JWKS Minimum Key Size and `use=sig` Filtering

Added 2048-bit minimum RSA key length and `use=sig` check for JWKS keys used in JWT verification. We consider this not exploitable because no mainstream OIDC provider (Keycloak, etc.) publishes RSA keys below 2048 bits. Even if an attacker could forge tokens via weak keys, privileges are constrained by the admin-managed `roleConfig` — the same limitation as with a compromised OIDC provider. Hardening against CWE-326 / CWE-347.

Commit: [`31c2e974d`](https://github.com/datasharingframework/dsf/commit/31c2e974d)

## Removed Access Token Claim Logging

Removed DEBUG-level logging of token claims (groups, roles) in `AbstractIdentityProvider` and `BearerTokenAuthenticator`. We consider this not exploitable because DEBUG logging is disabled in production by default, and the logged data (group memberships, roles) is operational metadata — not secrets like passwords or signing keys. Hardening against CWE-532.

Commit: [`cc0bb71ef`](https://github.com/datasharingframework/dsf/commit/cc0bb71ef)

## Session Cookie Security Attributes

Added `Secure`, `HttpOnly`, and `SameSite=LAX` flags to session cookies. We consider this not exploitable because TLS is terminated at the Apache HTTP Server reverse proxy (clients only communicate over HTTPS), the `HttpOnly` flag is only relevant if an XSS vulnerability exists (none is exploitable, see `th:utext` below), and `SameSite` has limited impact since primary authentication uses mTLS, not cookies. Hardening against CWE-614 / CWE-1004.

Commit: [`5cc00611b`](https://github.com/datasharingframework/dsf/commit/5cc00611b)

## JSON Serialization in JSONB Query Parameters

Replaced string concatenation with Jackson `ObjectMapper` serialization for JSONB query parameters in all DAO classes and search filters. We consider this not exploitable because user-controlled values are bound via `PreparedStatement.setString()`, which transmits query template and parameter values separately to PostgreSQL — the parameter value is never parsed as SQL and there is no way to inject `JOIN`, `UNION`, or subqueries. Within the JSONB domain, the identity filter (access control) operates as a separate `AND` condition with server-side parameters that cannot be influenced by search parameter manipulation, the `@>` containment operator becomes more restrictive with additional injected elements (not less), and result sets are always a subset of authorized resources — no enumeration of unauthorized data is possible. Hardening against CWE-89.

Commit: [`37c0282c6`](https://github.com/datasharingframework/dsf/commit/37c0282c6)

## Client Certificate Expiration Check

Added explicit certificate expiration check and changed auth type from `"RSA"` to `"UNKNOWN"` in `ClientCertificateAuthenticator`. We consider this not exploitable because the Apache HTTP Server reverse proxy performs TLS termination with `SSLVerifyClient require` and validates certificate expiration, chain trust, and revocation before requests reach Jetty. The Jetty-level check is a redundant second validation. Hardening against CWE-295 / CWE-324.

Commit: [`c6d369828`](https://github.com/datasharingframework/dsf/commit/c6d369828)

## Safe YAML Deserialization

Replaced `new Yaml()` with `new Yaml(new SafeConstructor(new LoaderOptions()))` in `RoleConfigReader`. We consider this not exploitable because the YAML content comes exclusively from admin-managed config files (`config.properties`) and Docker environment variables — an attacker with write access to these can already execute arbitrary code through simpler means. Hardening against CWE-502.

Commit: [`e0b6cf00a`](https://github.com/datasharingframework/dsf/commit/e0b6cf00a)

## Thymeleaf `th:utext` Replaced with `th:text`

Replaced `th:utext` (unescaped HTML output) with `th:text` / `th:each` for page headings built from URL segments. We consider this not exploitable because the old code applied `HtmlUtils.htmlEscape()` to all user inputs before concatenation — this escapes `& < > " '`, preventing tag injection (`<` `>` escaped to `&lt;` `&gt;`) and attribute breakout (`"` escaped to `&quot;`, which per HTML spec does not terminate double-quoted attributes). The fix makes XSS structurally impossible and removes reliance on manual escaping — a future developer could have forgotten the `htmlEscape()` call when adding new URL segments. Hardening against CWE-79.

Commit: [`58edc26c5`](https://github.com/datasharingframework/dsf/commit/58edc26c5)

## Error Message Removed from Status Endpoint

Removed database exception messages from the status endpoint error response body. We consider this not exploitable because the status endpoint runs on a separate Jetty connector (port 10000, bound to `127.0.0.1` only) with role-based access control (`STATUS_PORT_ROLE`) — it is not reachable through the Apache HTTP Server reverse proxy or from outside the Docker container. Hardening against CWE-209.

Commit: [`5103d0e9d`](https://github.com/datasharingframework/dsf/commit/5103d0e9d)

## Content Security Policy and Binary Inline Display

Introduced a new inline display mode for `Binary` resources with a strict CSP (`script-src 'none'`), a media type policy, and `ContentTypeSanitizer`. We consider this not a vulnerability fix because the old code served all `Binary` resources with `Content-Disposition: attachment` (forced download, never rendered in browser), so the old `unsafe-inline` CSP was never reachable. This commit implements a new feature with secure defaults. Hardening against CWE-1021.

Commit: [`454c1197b`](https://github.com/datasharingframework/dsf/commit/454c1197b)
