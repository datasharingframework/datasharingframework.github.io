---
title: Exercise 1.1 - Process Debugging
icon: slides
---
 [Prerequisites](/oldstable/tutorial/prerequisites.md) | [Exercise 1](/oldstable/tutorial/exercise1-simpleProcess.md) | [Exercise 1.1](/oldstable/tutorial/exercise11-processDebugging.md) | [Exercise 2](/oldstable/tutorial/exercise2-inputParameters.md) | [Exercise 3](/oldstable/tutorial/exercise3-messageEvents.md) | [Exercise 4](/oldstable/tutorial/exercise4-exclusiveGateways.md) | [Exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md)

### docker-compose.yml
```yml
version: '3.8'
services:
  proxy:
    image: nginx:1.23
    restart: "no"
    ports:
      - 127.0.0.1:443:443
    secrets:
      - proxy_certificate_and_int_cas.pem
      - proxy_certificate_private_key.pem
      - proxy_trusted_client_cas.pem
    volumes:
      - type: bind
        source: ./proxy/conf.d
        target: /etc/nginx/conf.d
        read_only: true
      - type: bind
        source: ./proxy/nginx.conf
        target: /etc/nginx/nginx.conf
        read_only: true
    networks:
      dic-fhir-frontend:
        ipv4_address: 172.20.0.66
      hrp-fhir-frontend:
        ipv4_address: 172.20.0.82
      cos-fhir-frontend:
        ipv4_address: 172.20.0.98
      internet:
        aliases:
          - cos
          - dic
          - hrp
    environment:
      TZ: Europe/Berlin

  db:
    image: postgres:13
    restart: "no"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U liquibase_user -d postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    environment:
      TZ: Europe/Berlin
      POSTGRES_PASSWORD_FILE: /run/secrets/db_liquibase.password
      POSTGRES_USER: liquibase_user
      POSTGRES_DB: postgres
    networks:
      - cos-fhir-backend
      - dic-fhir-backend
      - hrp-fhir-backend
      - cos-bpe-backend
      - dic-bpe-backend
      - hrp-bpe-backend
    secrets:
      - db_liquibase.password
    volumes:
      - type: volume
        source: db-data
        target: /var/lib/postgresql/data
      - type: bind
        source: ./db/init-db.sh
        target: /docker-entrypoint-initdb.d/init-db.sh
        read_only: true

  cos-fhir:
    image: ghcr.io/highmed/fhir:0.7.0
    restart: "no"
    ports:
      - 127.0.0.1:5002:5002
    secrets:
      - db_liquibase.password
      - db_cos_fhir_user.password
      - db_cos_fhir_user_permanent_delete.password
      - app_client_trust_certificates.pem
      - app_cos_client_certificate.pem
      - app_cos_client_certificate_private_key.pem
      - app_client_certificate_private_key.pem.password
    volumes:
      - type: bind
        source: ./cos/fhir/conf/bundle.xml
        target: /opt/fhir/conf/bundle.xml
      - type: bind
        source: ./cos/fhir/log
        target: /opt/fhir/log
    environment:
      TZ: Europe/Berlin
      EXTRA_JVM_ARGS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5002
      ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
      ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE: /run/secrets/db_cos_fhir_user.password
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE: /run/secrets/db_cos_fhir_user_permanent_delete.password
      ORG_HIGHMED_DSF_FHIR_CLIENT_TRUST_CERTIFICATES: /run/secrets/app_client_trust_certificates.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_cos_client_certificate.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY: /run/secrets/app_cos_client_certificate_private_key.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
      ORG_HIGHMED_DSF_FHIR_DB_URL: jdbc:postgresql://db/cos_fhir
      ORG_HIGHMED_DSF_FHIR_DB_USER_GROUP: cos_fhir_users
      ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME: cos_fhir_server_user
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP: cos_fhir_permanent_delete_users
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME: cos_fhir_server_permanent_delete_user
      ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL: https://cos/fhir
      ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: Test_COS
      ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS: ${COS_USER_THUMBPRINTS}
      ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE: ${COS_USER_THUMBPRINTS_PERMANENT_DELETE}
    networks:
      cos-fhir-frontend:
        ipv4_address: 172.20.0.99
      cos-fhir-backend:
      internet:
    depends_on:
      - db
      - proxy
  cos-bpe:
    image: ghcr.io/highmed/bpe:0.7.0
    restart: "no"
    ports:
      - 127.0.0.1:5005:5005
    secrets:
      - db_liquibase.password
      - db_cos_bpe_user.password
      - db_cos_bpe_user_camunda.password
      - app_client_trust_certificates.pem
      - app_cos_client_certificate.pem
      - app_cos_client_certificate_private_key.pem
      - app_client_certificate_private_key.pem.password
    volumes:
      - type: bind
        source: ./cos/bpe/plugin
        target: /opt/bpe/plugin
        read_only: true
      - type: bind
        source: ./cos/bpe/process
        target: /opt/bpe/process
        read_only: true
      - type: bind
        source: ./cos/bpe/log
        target: /opt/bpe/log
      - type: bind
        source: ./cos/bpe/last_event
        target: /opt/bpe/last_event
    environment:
      TZ: Europe/Berlin
      EXTRA_JVM_ARGS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
      ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
      ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE: /run/secrets/db_cos_bpe_user.password
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE: /run/secrets/db_cos_bpe_user_camunda.password
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_TRUST_CERTIFICATES: /run/secrets/app_client_trust_certificates.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_cos_client_certificate.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY: /run/secrets/app_cos_client_certificate_private_key.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
      ORG_HIGHMED_DSF_BPE_DB_URL: jdbc:postgresql://db/cos_bpe
      ORG_HIGHMED_DSF_BPE_DB_USER_GROUP: cos_bpe_users
      ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME: cos_bpe_server_user
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_GROUP: cos_camunda_users
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_USERNAME: cos_camunda_server_user
      ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: Test_COS
      ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL: https://cos/fhir
    networks:
      cos-bpe-frontend:
      cos-bpe-backend:
      internet:
    depends_on:
      - db
      - cos-fhir

  dic-fhir:
    image: ghcr.io/highmed/fhir:0.7.0
    restart: "no"
    ports:
      - 127.0.0.1:5000:5000
    secrets:
      - db_liquibase.password
      - db_dic_fhir_user.password
      - db_dic_fhir_user_permanent_delete.password
      - app_client_trust_certificates.pem
      - app_dic_client_certificate.pem
      - app_dic_client_certificate_private_key.pem
      - app_client_certificate_private_key.pem.password
    volumes:
      - type: bind
        source: ./dic/fhir/conf/bundle.xml
        target: /opt/fhir/conf/bundle.xml
      - type: bind
        source: ./dic/fhir/log
        target: /opt/fhir/log
    environment:
      TZ: Europe/Berlin
      EXTRA_JVM_ARGS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5000
      ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
      ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE: /run/secrets/db_dic_fhir_user.password
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE: /run/secrets/db_dic_fhir_user_permanent_delete.password
      ORG_HIGHMED_DSF_FHIR_CLIENT_TRUST_CERTIFICATES: /run/secrets/app_client_trust_certificates.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_dic_client_certificate.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY: /run/secrets/app_dic_client_certificate_private_key.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
      ORG_HIGHMED_DSF_FHIR_DB_URL: jdbc:postgresql://db/dic_fhir
      ORG_HIGHMED_DSF_FHIR_DB_USER_GROUP: dic_fhir_users
      ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME: dic_fhir_server_user
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP: dic_fhir_permanent_delete_users
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME: dic_fhir_server_permanent_delete_user
      ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL: https://dic/fhir
      ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: Test_DIC
      ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS: ${DIC_USER_THUMBPRINTS}
      ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE: ${DIC_USER_THUMBPRINTS_PERMANENT_DELETE}
    networks:
      dic-fhir-frontend:
        ipv4_address: 172.20.0.67
      dic-fhir-backend:
      internet:
    depends_on:
      - db
      - proxy
  dic-bpe:
    image: ghcr.io/highmed/bpe:0.7.0
    restart: "no"
    ports:
      - 127.0.0.1:5003:5003
    secrets:
      - db_liquibase.password
      - db_dic_bpe_user.password
      - db_dic_bpe_user_camunda.password
      - app_client_trust_certificates.pem
      - app_dic_client_certificate.pem
      - app_dic_client_certificate_private_key.pem
      - app_client_certificate_private_key.pem.password
    volumes:
      - type: bind
        source: ./dic/bpe/plugin
        target: /opt/bpe/plugin
        read_only: true
      - type: bind
        source: ./dic/bpe/process
        target: /opt/bpe/process
        read_only: true
      - type: bind
        source: ./dic/bpe/log
        target: /opt/bpe/log
      - type: bind
        source: ./dic/bpe/last_event
        target: /opt/bpe/last_event
    environment:
      TZ: Europe/Berlin
      EXTRA_JVM_ARGS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5003
      ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
      ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE: /run/secrets/db_dic_bpe_user.password
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE: /run/secrets/db_dic_bpe_user_camunda.password
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_TRUST_CERTIFICATES: /run/secrets/app_client_trust_certificates.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_dic_client_certificate.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY: /run/secrets/app_dic_client_certificate_private_key.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
      ORG_HIGHMED_DSF_BPE_DB_URL: jdbc:postgresql://db/dic_bpe
      ORG_HIGHMED_DSF_BPE_DB_USER_GROUP: dic_bpe_users
      ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME: dic_bpe_server_user
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_GROUP: dic_camunda_users
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_USERNAME: dic_camunda_server_user
      ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: Test_DIC
      ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL: https://dic/fhir
    networks:
      dic-bpe-frontend:
      dic-bpe-backend:
      internet:
    depends_on:
      - db
      - dic-fhir

  hrp-fhir:
    image: ghcr.io/highmed/fhir:0.7.0
    restart: "no"
    ports:
      - 127.0.0.1:5001:5001
    secrets:
      - db_liquibase.password
      - db_hrp_fhir_user.password
      - db_hrp_fhir_user_permanent_delete.password
      - app_client_trust_certificates.pem
      - app_hrp_client_certificate.pem
      - app_hrp_client_certificate_private_key.pem
      - app_client_certificate_private_key.pem.password
    volumes:
      - type: bind
        source: ./hrp/fhir/conf/bundle.xml
        target: /opt/fhir/conf/bundle.xml
      - type: bind
        source: ./hrp/fhir/log
        target: /opt/fhir/log
    environment:
      TZ: Europe/Berlin
      EXTRA_JVM_ARGS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5001
      ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
      ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE: /run/secrets/db_hrp_fhir_user.password
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE: /run/secrets/db_hrp_fhir_user_permanent_delete.password
      ORG_HIGHMED_DSF_FHIR_CLIENT_TRUST_CERTIFICATES: /run/secrets/app_client_trust_certificates.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_hrp_client_certificate.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY: /run/secrets/app_hrp_client_certificate_private_key.pem
      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
      ORG_HIGHMED_DSF_FHIR_DB_URL: jdbc:postgresql://db/hrp_fhir
      ORG_HIGHMED_DSF_FHIR_DB_USER_GROUP: hrp_fhir_users
      ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME: hrp_fhir_server_user
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP: hrp_fhir_permanent_delete_users
      ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME: hrp_fhir_server_permanent_delete_user
      ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL: https://hrp/fhir
      ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS: ${HRP_USER_THUMBPRINTS}
      ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE: ${HRP_USER_THUMBPRINTS_PERMANENT_DELETE}
      ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: Test_HRP
    networks:
      hrp-fhir-frontend:
        ipv4_address: 172.20.0.83
      hrp-fhir-backend:
      internet:
    depends_on:
      - db
      - proxy
  hrp-bpe:
    image: ghcr.io/highmed/bpe:0.7.0
    restart: "no"
    ports:
      - 127.0.0.1:5004:5004
    secrets:
      - db_liquibase.password
      - db_hrp_bpe_user.password
      - db_hrp_bpe_user_camunda.password
      - app_client_trust_certificates.pem
      - app_hrp_client_certificate.pem
      - app_hrp_client_certificate_private_key.pem
      - app_client_certificate_private_key.pem.password
    volumes:
      - type: bind
        source: ./hrp/bpe/plugin
        target: /opt/bpe/plugin
        read_only: true
      - type: bind
        source: ./hrp/bpe/process
        target: /opt/bpe/process
        read_only: true
      - type: bind
        source: ./hrp/bpe/log
        target: /opt/bpe/log
      - type: bind
        source: ./hrp/bpe/last_event
        target: /opt/bpe/last_event
    environment:
      TZ: Europe/Berlin
      EXTRA_JVM_ARGS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5004
      ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
      ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE: /run/secrets/db_hrp_bpe_user.password
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE: /run/secrets/db_hrp_bpe_user_camunda.password
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_TRUST_CERTIFICATES: /run/secrets/app_client_trust_certificates.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_hrp_client_certificate.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY: /run/secrets/app_hrp_client_certificate_private_key.pem
      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
      ORG_HIGHMED_DSF_BPE_DB_URL: jdbc:postgresql://db/hrp_bpe
      ORG_HIGHMED_DSF_BPE_DB_USER_GROUP: hrp_bpe_users
      ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME: hrp_bpe_server_user
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_GROUP: hrp_camunda_users
      ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_USERNAME: hrp_camunda_server_user
      ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: Test_HRP
      ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL: https://hrp/fhir
    networks:
      hrp-bpe-frontend:
      hrp-bpe-backend:
      internet:
    depends_on:
      - db
      - hrp-fhir

secrets:
  proxy_certificate_and_int_cas.pem:
    file: ./secrets/proxy_certificate_and_int_cas.pem
  proxy_certificate_private_key.pem:
    file: ./secrets/proxy_certificate_private_key.pem
  proxy_trusted_client_cas.pem:
    file: ./secrets/proxy_trusted_client_cas.pem

  db_liquibase.password:
    file: ./secrets/db_liquibase.password

  db_dic_fhir_user.password:
    file: ./secrets/db_dic_fhir_user.password
  db_dic_fhir_user_permanent_delete.password:
    file: ./secrets/db_dic_fhir_user_permanent_delete.password
  db_dic_bpe_user.password:
    file: ./secrets/db_dic_bpe_user.password
  db_dic_bpe_user_camunda.password:
    file: ./secrets/db_dic_bpe_user_camunda.password

  db_hrp_fhir_user.password:
    file: ./secrets/db_hrp_fhir_user.password
  db_hrp_fhir_user_permanent_delete.password:
    file: ./secrets/db_hrp_fhir_user_permanent_delete.password
  db_hrp_bpe_user.password:
    file: ./secrets/db_hrp_bpe_user.password
  db_hrp_bpe_user_camunda.password:
    file: ./secrets/db_hrp_bpe_user_camunda.password

  db_cos_fhir_user.password:
    file: ./secrets/db_cos_fhir_user.password
  db_cos_fhir_user_permanent_delete.password:
    file: ./secrets/db_cos_fhir_user_permanent_delete.password
  db_cos_bpe_user.password:
    file: ./secrets/db_cos_bpe_user.password
  db_cos_bpe_user_camunda.password:
    file: ./secrets/db_cos_bpe_user_camunda.password

  app_client_trust_certificates.pem:
    file: ./secrets/app_client_trust_certificates.pem
  app_client_certificate_private_key.pem.password:
    file: ./secrets/app_client_certificate_private_key.pem.password

  app_dic_client_certificate.pem:
    file: ./secrets/app_dic_client_certificate.pem
  app_dic_client_certificate_private_key.pem:
    file: ./secrets/app_dic_client_certificate_private_key.pem

  app_hrp_client_certificate.pem:
    file: ./secrets/app_hrp_client_certificate.pem
  app_hrp_client_certificate_private_key.pem:
    file: ./secrets/app_hrp_client_certificate_private_key.pem

  app_cos_client_certificate.pem:
    file: ./secrets/app_cos_client_certificate.pem
  app_cos_client_certificate_private_key.pem:
    file: ./secrets/app_cos_client_certificate_private_key.pem

networks:
  internet:
  dic-fhir-frontend:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.20.0.64/28
  dic-fhir-backend:
  dic-bpe-frontend:
  dic-bpe-backend:
  hrp-fhir-frontend:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.20.0.80/28
  hrp-fhir-backend:
  hrp-bpe-frontend:
  hrp-bpe-backend:
  cos-fhir-frontend:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.20.0.96/28
  cos-fhir-backend:
  cos-bpe-frontend:
  cos-bpe-backend:


volumes:
  db-data:
    name: dsf-process-tutorial-db
```

 [Prerequisites](/oldstable/tutorial/prerequisites.md) | [Exercise 1](/oldstable/tutorial/exercise1-simpleProcess.md) | [Exercise 1.1](/oldstable/tutorial/exercise11-processDebugging.md) | [Exercise 2](/oldstable/tutorial/exercise2-inputParameters.md) | [Exercise 3](/oldstable/tutorial/exercise3-messageEvents.md) | [Exercise 4](/oldstable/tutorial/exercise4-exclusiveGateways.md) | [Exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md)