---
title: Passwords and Secrets
icon: safe
---

Environment variables ending in `_PASSWORD` or `_SECRET` can be configured using plain-text files. To achieve this, environment variable should be defined with `_FILE` appended to the name with the value defined as the location of the file. For all variables ending in `_PASSWORD_FILE` or `_SECRET_FILE` the DSF FHIR and DSF BPE applications will read the content of the fist line of the referenced file and dynamically define the corresponding `_PASSWORD` or `_SECRET` environment variables with the read values.

### Example Environment Variables
- **DEV_DSF_BPE_DB_USER_PASSWORD_FILE**: If set to `/run/secrets/db_user_password`, the application will read the contents of the `/run/secrets/db_user_password` file and set the `DEV_DSF_BPE_DB_USER_PASSWORD` environment variable with the content from that file.
- **DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET_FILE**: If set to `/run/secrets/oidc_client_secret`, the application will read the contents of the referenced file and set the `DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET` environment variable accordingly.

### Docker Secrets

It is recommended to use [docker secrets](https://docs.docker.com/compose/how-tos/use-secrets) as files for these environment variables. Docker secrets are mounted as files in `/run/secrets/<secret_name>` inside the container.

#### Example docker-compose
```yaml
services:
  app:
    image: ghcr.io/datasharingframework/fhir
    secrets:
      - db_user_password
      - oidc_client_secret
    environment:
      DEV_DSF_BPE_DB_USER_PASSWORD_FILE: /run/secrets/db_user_password
      DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET_FILE: /run/secrets/oidc_client_secret

secrets:
  db_user_password:
    file: ./secrets/db_user.password
  api_key:
    file: ./secrets/oidc_client.secret
```