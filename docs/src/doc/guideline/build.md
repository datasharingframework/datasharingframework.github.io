---
title: Build and Test
icon: back-stage
---
## Build Project
Prerequisite: Java 11, Maven 3.6, Docker
```cmd
mvn install
```
### Manual Integration Testing (without Docker)

Prerequisite: Java 11, Maven 3.6, PostgreSQL 11
- Build the entire project from the root directory of the repository 
```cmd
mvn install
```
- Install PostgreSQL 11 (localhost:5432)
- Add DB User liquibase_user
```cmd
CREATE USER liquibase_user WITH LOGIN NOSUPERUSER INHERIT CREATEDB CREATEROLE NOREPLICATION
PASSWORD 'fLp6ZSd5QrMAkGZMjxqXjmcWrTfa3Dn8fA57h92Y';
```
- Create Databases fhir and bpe with owner liquibase_user
```cmd
CREATE DATABASE bpe OWNER liquibase_user;
CREATE DATABASE fhir OWNER liquibase_user;
```
- Start org.highmed.dsf.fhir.FhirJettyServerHttps from your IDE with execution folder: .../highmed-dsf/dsf-fhir/dsf-fhir-server-jetty
- Start org.highmed.dsf.bpe.BpeJettyServerHttps from your IDE with execition folder: .../highmed-dsf/dsf-bpe/dsf-bpe-server-jetty
- To access the FHIR endpoint (https://localhost:8001/fhir/...) and BPE rest interface (https://localhost:8002/bpe/...) via WebBrowser install .../highmed-dsf/dsf-tools/dsf-tools-test-data-generator/cert/Webbrowser_Test_User/Webbrowser_Test_User_certificate.p12 (Password: password) in your browsers certifiate store. The p12 file includes a client certificate for "Webbrowser Test User" and the "Test CA" certificate. All private-keys and certificates including the Test CA are generated during the maven build and are private to your machine. Make sure to protect the CA private-key at .../highmed-dsf/dsf-tools/dsf-tools-test-data-generator/cert/ca/testca_private-key.pem from third-party access if you have installed the Test CA certificate in your certificate store.

### Manual Integration Testing (local with Docker)
Prerequisite: Java 11, Maven 3.6, Docker 18

- Build the entire project from the root directory of this repository
```cmd
mvn install
```
- Build docker images
    - Windows: in the .../dsf-docker-test-setup folder execute 
```cmd
docker-build.bat
```

...