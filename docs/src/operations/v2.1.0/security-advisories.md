---
title: Security Advisories
icon: safe
---

# Security Advisories

The following security advisories have been published as part of the {{release.tag}} release.

## Missing Session Timeout for OIDC Sessions
CVE ID: [CVE-2026-40939](https://github.com/datasharingframework/dsf/security/advisories/GHSA-gj7p-595x-qwf5)
CVSS Score: Moderate, 6.8 / 10
CVSS: 4.0/AV:P/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N

### Affected Components
- DSF FHIR Server with enabled [OIDC authentication](fhir/oidc).
- DSF BPE Server with enabled [OIDC authentication](bpe/oidc).

### Summary
OIDC-authenticated sessions had no configured maximum inactivity timeout. Sessions persisted indefinitely after login, even after the OIDC access token expired.

### Impact
If a user logs in via OIDC and leaves their browser without explicitly logging out, the session remains valid indefinitely. Another person using the same browser can access the DSF UI with the previous user's permissions. This is a realistic threat in hospital environments with shared workstations.

Only affects OIDC browser sessions, not relevant for mTLS machine-to-machine communication.

### Fix (commits [f4ecb00](https://github.com/datasharingframework/dsf/commit/f4ecb00), [7d25fea](https://github.com/datasharingframework/dsf/commit/7d25fea))
- Added configurable session timeout via dev.dsf.server.auth.oidc.session.timeout (default: PT30M).
- Enabled logoutWhenIdTokenIsExpired(true) in OpenID configuration to tie session lifetime to token lifetime.
- Websocket sessions are now closed with VIOLATED_POLICY when credentials expire, prevents stale websocket connections from continuing to receive events after session timeout.


## Inverted Time Comparison in OIDC JWKS and Token Cache
CVE ID: [CVE-2026-40942](https://github.com/datasharingframework/dsf/security/advisories/GHSA-xmj9-7625-f634)
CVSS Score: Moderate, 6.3 / 10
CVSS: 4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N

### Affected Components
- DSF FHIR Server with enabled [bearer-token authentication](fhir/oidc) or [back-channel logout](fhir/oidc).
- DSF BPE Server with enabled [bearer-token authentication](bpe/oidc) or [back-channel logout](bpe/oidc).
- DSF BPE Server API v2 process plugins using [FHIR client connections](bpe/fhir-client-connections) with configured OIDC authentication.

### Summary
- The OIDC JWKS and Metadata Document caches used an inverted time comparison (isBefore instead of isAfter), causing the cache to never return cached values. Every incoming request triggered a fresh HTTP fetch of the OIDC Metadata Document and JWKS keys from the OIDC provider.
- The OIDC token cache for the [FHIR client connections](bpe/fhir-client-connections) used an inverted time comparison (isBefore instead of isAfter), causing the cache to never invalidate. Every incoming request returned the same OIDC token even if expired.

### Impact
- Performance: Every OIDC-authenticated request added network round-trips to the OIDC provider, increasing latency
- Reliability: Cached OIDC tokens become unusable after expiration and can only be invalidated by restart of the BPE.
  If the OIDC provider is temporarily unreachable, all requests fail immediately instead of using cached keys
- Load: Unnecessary load on the OIDC provider, potentially causing rate limiting

### Fix (commits [31c2e97](https://github.com/datasharingframework/dsf/commit/31c2e97), [d3ca59b](https://github.com/datasharingframework/dsf/commit/d3ca59b))
- Fixed cache timeout comparison from isBefore to isAfter in BaseOidcClientWithCache (configuration and JWKS caches) and OidcClientWithCache (configuration, JWKS, and access token caches)
- Added configurable cache timeouts via dev.dsf.server.auth.oidc.provider.client.cache.timeout.configuration.resource and dev.dsf.server.auth.oidc.provider.client.cache.timeout.jwks.resource (default: PT1H)