---
title: SSL
icon: lock
---

SSL issues arise if there is a misconfiguration of client/server certificates.
Client certificates may:
- Be expired
- Have an untrusted root
- Be revoked

Server certificates may:
- Be expired
- Have an untrusted root
- Be revoked
- Have the wrong host as the subject

It is recommended to use [OpenSSL](https://openssl.org/) for further debugging.