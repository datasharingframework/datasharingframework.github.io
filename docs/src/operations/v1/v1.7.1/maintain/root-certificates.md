---
title: Default Root Certificates
icon: safe
---

A number of trusted certificate authorities (CAs) are included in the DSF docker images [fhir_proxy](https://github.com/datasharingframework/dsf/pkgs/container/fhir_proxy), [fhir](https://github.com/datasharingframework/dsf/pkgs/container/fhir), [bpe_proxy](https://github.com/datasharingframework/dsf/pkgs/container/bpe_proxy) and [bpe](https://github.com/datasharingframework/dsf/pkgs/container/bpe) by default. Root and intermediate certificates as well as the configured usage of issuing CAs as either **server**, **client** oder **server and client** CA are listed at the end.

:::info
Please ensure that you are using an organization-validated certificate (OV). We check for the presence of certain elements in the FHIR proxy. These are not set for domain-validated (DV) certificates. DV-validated certificates cannot be used in the standard setup.
:::

## Extending or Replacing Trusted Certificate Authorities
X.509 certificates of default trusted CAs are stored as .pem files containing multiple certificates in the docker images and can be replaced by either using docker [bind mounts](https://docs.docker.com/engine/storage/bind-mounts) or configuring appropriate environment variables with different targets.

### FHIR Reverse Proxy
Defaults are configured for the list of issuing, intermediate and root CAs used for validating client certificates (Apache httpd mod_ssl configuration option [SSLCACertificateFile](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcacertificatefile)) as well as the CA Certificates for defining acceptable CA names (option [SSLCADNRequestFile](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcadnrequestfile)).
Use the following environment variable to configure non default .pem files or override the existing files using docker bind mounts:
* [SSL_CA_CERTIFICATE_FILE](fhir-reverse-proxy/configuration.html#ssl-ca-certificate-file)
  Default Value: [ca/client_cert_ca_chains.pem](/download/1.7.0/client_cert_ca_chains.pem)
* [SSL_CA_DN_REQUEST_FILE](fhir-reverse-proxy/configuration.html#ssl-ca-dn-request-file)
  Default Value: [ca/client_cert_issuing_cas.pem](/download/1.7.0/client_cert_issuing_cas.pem)

**Note:** Default file location are relative to the docker image work directory `/usr/local/apache2`.
**Also Note:** Using non default .pem files for the environment variables above may require also modifying the default values of the environment variables [SSL_EXPECTED_CLIENT_S_DN_C_VALUES](fhir-reverse-proxy/configuration.html#ssl-expected-client-s-dn-c-values) and [SSL_EXPECTED_CLIENT_I_DN_CN_VALUES](fhir-reverse-proxy/configuration.html#ssl-expected-client-i-dn-cn-values).

### FHIR Server
Defaults are configured for the list of issuing, intermediate and root CAs used for validating client certificates as well as root CAs used for validating server certificates of remote DSF FHIR servers and the OIDC provider when using [OpenID Connect](fhir/oidc.html) for authenticating local users.
Use the following environment variable to configure non default .pem files or override the existing files using docker bind mounts:
* [DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS](fhir/configuration.html#dev-dsf-server-auth-trust-client-certificate-cas)
  Default Value: [ca/client_cert_ca_chains.pem](/download/1.7.0/client_cert_ca_chains.pem)
* [DEV_DSF_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS](fhir/configuration.html#dev-dsf-fhir-client-trust-server-certificate-cas)
  Default Value: [ca/server_cert_root_cas.pem](/download/1.7.0/server_cert_root_cas.pem)
* [DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS](fhir/configuration.html#dev-dsf-server-auth-oidc-provider-client-trust-server-certificate-cas)
  Default Value: [ca/server_cert_root_cas.pem](/download/1.7.0/server_cert_root_cas.pem)

**Note:** Default file location are relative to the docker image work directory `/opt/fhir`.

### BPE Reverse Proxy
Defaults are configured for the list of issuing, intermediate and root CAs used for validating client certificates (Apache httpd mod_ssl configuration option [SSLCACertificateFile](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcacertificatefile)) as well as the CA Certificates for defining acceptable CA names (option [SSLCADNRequestFile](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcadnrequestfile)).
Use the following environment variable to configure non default .pem files or override the existing files using docker bind mounts:
* [SSL_CA_CERTIFICATE_FILE](bpe-reverse-proxy/configuration.html#ssl-ca-certificate-file)
  Default Value: [ca/client_cert_ca_chains.pem](/download/1.7.0/client_cert_ca_chains.pem)
* [SSL_CA_DN_REQUEST_FILE](bpe-reverse-proxy/configuration.html#ssl-ca-dn-request-file)
  Default Value: [ca/client_cert_issuing_cas.pem](/download/1.7.0/client_cert_issuing_cas.pem)

**Note:** Default file location are relative to the docker image work directory `/usr/local/apache2`.
**Also Note:** Using non default .pem files for the environment variables above may require also modifying the default values of the environment variables [SSL_EXPECTED_CLIENT_S_DN_C_VALUES](bpe-reverse-proxy/configuration.html#ssl-expected-client-s-dn-c-values) and [SSL_EXPECTED_CLIENT_I_DN_CN_VALUES](bpe-reverse-proxy/configuration.html#ssl-expected-client-i-dn-cn-values).

### BPE Server
Defaults are configured for the list of issuing, intermediate and root CAs used for validating client certificates as well as root CAs used for validating server certificates of local and remote DSF FHIR servers, the local mail server (if configured and SMTP over TLS required) and the OIDC provider when using [OpenID Connect](fhir/oidc.html) for authenticating local users.
Use the following environment variable to configure non default .pem files or override the existing files using docker bind mounts:
* [DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS](bpe/configuration.html#dev-dsf-server-auth-trust-client-certificate-cas)
  Default Value: [ca/client_cert_ca_chains.pem](/download/1.7.0/client_cert_ca_chains.pem)
* [DEV_DSF_BPE_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS](bpe/configuration.html#dev-dsf-bpe-fhir-client-trust-server-certificate-cas)
  Default Value: [ca/server_cert_root_cas.pem](/download/1.7.0/server_cert_root_cas.pem)
  [DEV_DSF_BPE_MAIL_TRUST_SERVER_CERTIFICATE_CAS](bpe/configuration.html#dev-dsf-bpe-mail-trust-server-certificate-cas)
  Default Value: [ca/server_cert_root_cas.pem](/download/1.7.0/server_cert_root_cas.pem)
* [DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS](bpe/configuration.html#dev-dsf-server-auth-oidc-provider-client-trust-server-certificate-cas)
  Default Value: [ca/server_cert_root_cas.pem](/download/1.7.0/server_cert_root_cas.pem)

**Note:** Default file location are relative to the docker image work directory `/opt/bpe`.

## List of Default Trusted Certificate Authorities
If not mentioned explicitly, issuing CAs listed will sign X.509 certificates with [Extended Key Usage](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12) entries `TLS WWW server authentication` and `TLS WWW client authentication`.

### CAs Trusted by Common Web Browsers and Operating Systems

* Root CA: **HARICA TLS ECC Root CA 2021**
  Info: https://crt.sh/?caid=202185
  X509 Certificate: https://crt.sh/?id=4147045948
  Not after: Feb 13 11:01:09 2045 GMT
    * Issuing CA: **GEANT TLS ECC 1**
      Info: https://crt.sh/?caid=390050
      X509 Certificate: https://crt.sh/?id=16099180990
      Not after: Dec 31 11:14:20 2039 GMT
    * Issuing CA: **HARICA OV TLS ECC**
      Info: https://crt.sh/?caid=207661
      X509 Certificate: https://crt.sh/?id=4442848530
      Not after: Mar 15 09:33:51 2036 GMT
* Root CA: **HARICA TLS RSA Root CA 2021**
  Info: https://crt.sh/?caid=202184
  X509 Certificate: https://crt.sh/?id=4147041876
  Not after: Feb 13 10:55:37 2045 GMT
    * Issuing CA: **GEANT TLS RSA 1**
      Info: https://crt.sh/?caid=390054
      X509 Certificate: https://crt.sh/?id=16099180997
      Not after: Dec 31 11:14:59 2039 GMT
    * Issuing CA: **HARICA OV TLS RSA**
      Info: https://crt.sh/?caid=207660
      X509 Certificate: https://crt.sh/?id=4442848529
      Not after: Mar 15 09:34:16 2036 GMT
* Root CA: **HARICA Client ECC Root CA 2021**
  Info: https://crt.sh/?caid=202189
  X509 Certificate: https://crt.sh/?id=4147052292
  Not after: Feb 13 11:03:33 2045 GMT
    * Issuing CA: **GEANT S/MIME ECC 1** [client/smime certificates only]
      Info: https://crt.sh/?caid=390048
      X509 Certificate: https://crt.sh/?id=16099180988
      Not after: Dec 31 11:11:39 2039 GMT
    * Issuing CA: **HARICA S/MIME ECC** [client/smime certificates only]
      Info: https://crt.sh/?caid=207659
      X509 Certificate: https://crt.sh/?id=4442848523
      Not after: Mar 15 09:36:57 2036 GMT
* Root CA: **HARICA Client RSA Root CA 2021**
  Info: https://crt.sh/?caid=202188
  X509 Certificate: https://crt.sh/?id=4147049674
  Not after: Feb 13 10:58:45 2045 GMT
    * Issuing CA: **GEANT S/MIME RSA 1** [client/smime certificates only]
      Info: https://crt.sh/?caid=390049
      X509 Certificate: https://crt.sh/?id=16099180989
      Not after: Dec 31 11:13:07 2039 GMT
    * Issuing CA: **HARICA S/MIME RSA** [client/smime certificates only]
      Info: https://crt.sh/?caid=207658
      X509 Certificate: https://crt.sh/?id=4442848517
      Not after: Mar 15 09:37:37 2036 GMT
* Root CA: **T-TeleSec GlobalRoot Class 2** [will be removed in a future release, incl. derived CAs]
  Info: https://crt.sh/?caid=6068
  X509 Certificate: https://crt.sh/?id=8733622
  Not after: Oct 1 23:59:59 2033 GMT
    * Intermediate Root CA: **DFN-Verein Certification Authority 2**
      Info: https://crt.sh/?caid=22818
      X509 Certificate: https://crt.sh/?id=23908438
      Not after: Feb 22 23:59:59 2031 GMT
      * Issuing CA: **DFN-Verein Global Issuing CA** [existing, still valid client certificates, no new certificates]
        Info: https://crt.sh/?caid=23770
        X509 Certificate: https://crt.sh/?id=25484751
        Not after: Feb 22 23:59:59 2031 GMT
      * Issuing CA: **Fraunhofer User CA - G02** [existing, still valid client certificates, no new certificates]
        Info: https://crt.sh/?caid=23772
        X509 Certificate: https://crt.sh/?id=25484789
        Not after: Feb 22 23:59:59 2031 GMT
* Root CA: **D-TRUST Root Class 3 CA 2 2009**
  Info: https://crt.sh/?caid=712
  X509 Certificate: https://crt.sh/?id=133226
  Not after: Nov 5 08:35:58 2029 GMT
    * Issuing CA: **D-TRUST SSL Class 3 CA 1 2009** [server certificates via TMF e.V.]
      Info: https://crt.sh/?caid=713
      X509 Certificate: https://crt.sh/?id=133227
      Not after: Nov 5 08:35:58 2029 GMT
* Root CA: **USERTrust ECC Certification Authority** [will be removed in a future release, incl. derived CAs]
  Info: https://crt.sh/?caid=1390
  X509 Certificate: https://crt.sh/?id=2841410
  Not after: Jan 18 23:59:59 2038 GMT
    * Issuing CA: **Sectigo ECC Organization Validation Secure Server CA**
      Info: https://crt.sh/?caid=105483
      X509 Certificate: https://crt.sh/?id=924467859
      Not after: Dec 31 23:59:59 2030 GMT
    * Issuing CA: **GEANT OV ECC CA 4**
      Info: https://crt.sh/?caid=160140
      X509 Certificate: https://crt.sh/?id=2475254970
    * Issuing CA: **GEANT Personal ECC CA 4** [client/smime certificates only]
      Info: https://crt.sh/?caid=160136
      X509 Certificate: https://crt.sh/?id=2475254903
      Not after: May 1 23:59:59 2033 GMT
    * Issuing CA: **GEANT eScience Personal ECC CA 4** [client/smime certificates only]
      Info: https://crt.sh/?caid=160138
      X509 Certificate: https://crt.sh/?id=2475254888
      Not after: May 1 23:59:59 2033 GMT
* Root CA: **USERTrust RSA Certification Authority** [will be removed in a future release, incl. derived CAs]
  Info: https://crt.sh/?caid=1167
  X509 Certificate: https://crt.sh/?id=1199354
  Not after: Jan 18 23:59:59 2038 GMT
    * Issuing CA: **Sectigo RSA Organization Validation Secure Server CA**
      Info: https://crt.sh/?caid=105487
      X509 Certificate: https://crt.sh/?id=924467857
      Not after: Dec 31 23:59:59 2030 GMT
    * Issuing CA: **GEANT OV RSA CA 4**
      Info: https://crt.sh/?caid=160137
      X509 Certificate: https://crt.sh/?id=2475254782
      Not after: May 1 23:59:59 2033 GMT
    * Issuing CA: **GEANT Personal CA 4** [client/smime certificates only]
      Info: https://crt.sh/?caid=160144
      X509 Certificate: https://crt.sh/?id=2475255043
      Not after: May 1 23:59:59 2033 GMT
    * Issuing CA: **GEANT eScience Personal CA 4** [client/smime certificates only]
      Info: https://crt.sh/?caid=160134
      X509 Certificate: https://crt.sh/?id=2475253350
      Not after: May 1 23:59:59 2033 GMT

### Other CAs
* Root CA: **D-TRUST Limited Basic Root CA 1 2019**
  X509 Certificate: https://www.d-trust.net/cgi-bin/D-TRUST_Limited_Basic_Root_CA_1_2019.crt
  Not after: Jun 19 08:15:51 2034 GMT
    * Issuing CA: **D-TRUST Limited Basic CA 1-2 2019** [client certificates via TMF e.V.]
      X509 Certificate: https://www.d-trust.net/cgi-bin/D-TRUST_Limited_Basic_CA_1-2_2019.crt
      Not after: Jun 19 08:15:51 2034 GMT
    * Issuing CA: **D-TRUST Limited Basic CA 1-3 2019** [client certificates via TMF e.V.]
      X509 Certificate: https://www.d-trust.net/cgi-bin/D-TRUST_Limited_Basic_CA_1-3_2019.crt
      Not after: Jun 19 08:15:51 2034 GMT