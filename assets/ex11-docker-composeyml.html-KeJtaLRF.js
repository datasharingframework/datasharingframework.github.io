import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c,a as t,d as a,w as e,b as n,e as u}from"./app-ZCWvZDX3.js";const o={},r=u(`<h3 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml"><span>docker-compose.yml</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.23</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>443<span class="token punctuation">:</span><span class="token number">443</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> proxy_certificate_and_int_cas.pem
      <span class="token punctuation">-</span> proxy_certificate_private_key.pem
      <span class="token punctuation">-</span> proxy_trusted_client_cas.pem
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./proxy/conf.d
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/nginx/conf.d
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./proxy/nginx.conf
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/nginx/nginx.conf
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">dic-fhir-frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.20.0.66
      <span class="token key atrule">hrp-fhir-frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.20.0.82
      <span class="token key atrule">cos-fhir-frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.20.0.98
      <span class="token key atrule">internet</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> cos
          <span class="token punctuation">-</span> dic
          <span class="token punctuation">-</span> hrp
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span><span class="token number">13</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pg_isready -U liquibase_user -d postgres&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin
      <span class="token key atrule">POSTGRES_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_liquibase.password
      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> liquibase_user
      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> postgres
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cos<span class="token punctuation">-</span>fhir<span class="token punctuation">-</span>backend
      <span class="token punctuation">-</span> dic<span class="token punctuation">-</span>fhir<span class="token punctuation">-</span>backend
      <span class="token punctuation">-</span> hrp<span class="token punctuation">-</span>fhir<span class="token punctuation">-</span>backend
      <span class="token punctuation">-</span> cos<span class="token punctuation">-</span>bpe<span class="token punctuation">-</span>backend
      <span class="token punctuation">-</span> dic<span class="token punctuation">-</span>bpe<span class="token punctuation">-</span>backend
      <span class="token punctuation">-</span> hrp<span class="token punctuation">-</span>bpe<span class="token punctuation">-</span>backend
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_liquibase.password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> volume
        <span class="token key atrule">source</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>data
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /var/lib/postgresql/data
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./db/init<span class="token punctuation">-</span>db.sh
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d/init<span class="token punctuation">-</span>db.sh
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token key atrule">cos-fhir</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/highmed/fhir<span class="token punctuation">:</span>0.7.0
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>5002<span class="token punctuation">:</span><span class="token number">5002</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_liquibase.password
      <span class="token punctuation">-</span> db_cos_fhir_user.password
      <span class="token punctuation">-</span> db_cos_fhir_user_permanent_delete.password
      <span class="token punctuation">-</span> app_client_trust_certificates.pem
      <span class="token punctuation">-</span> app_cos_client_certificate.pem
      <span class="token punctuation">-</span> app_cos_client_certificate_private_key.pem
      <span class="token punctuation">-</span> app_client_certificate_private_key.pem.password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./cos/fhir/conf/bundle.xml
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/fhir/conf/bundle.xml
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./cos/fhir/log
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/fhir/log
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin
      <span class="token key atrule">EXTRA_JVM_ARGS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>agentlib<span class="token punctuation">:</span>jdwp=transport=dt_socket<span class="token punctuation">,</span>server=y<span class="token punctuation">,</span>suspend=n<span class="token punctuation">,</span>address=<span class="token important">*:</span><span class="token number">5002</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_liquibase.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_cos_fhir_user.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_cos_fhir_user_permanent_delete.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_TRUST_CERTIFICATES</span><span class="token punctuation">:</span> /run/secrets/app_client_trust_certificates.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE</span><span class="token punctuation">:</span> /run/secrets/app_cos_client_certificate.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY</span><span class="token punctuation">:</span> /run/secrets/app_cos_client_certificate_private_key.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/app_client_certificate_private_key.pem.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_URL</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>postgresql<span class="token punctuation">:</span>//db/cos_fhir
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_GROUP</span><span class="token punctuation">:</span> cos_fhir_users
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME</span><span class="token punctuation">:</span> cos_fhir_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP</span><span class="token punctuation">:</span> cos_fhir_permanent_delete_users
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME</span><span class="token punctuation">:</span> cos_fhir_server_permanent_delete_user
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cos/fhir
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</span><span class="token punctuation">:</span> Test_COS
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>COS_USER_THUMBPRINTS<span class="token punctuation">}</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>COS_USER_THUMBPRINTS_PERMANENT_DELETE<span class="token punctuation">}</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">cos-fhir-frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.20.0.99
      <span class="token key atrule">cos-fhir-backend</span><span class="token punctuation">:</span>
      <span class="token key atrule">internet</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
      <span class="token punctuation">-</span> proxy
  <span class="token key atrule">cos-bpe</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/highmed/bpe<span class="token punctuation">:</span>0.7.0
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>5005<span class="token punctuation">:</span><span class="token number">5005</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_liquibase.password
      <span class="token punctuation">-</span> db_cos_bpe_user.password
      <span class="token punctuation">-</span> db_cos_bpe_user_camunda.password
      <span class="token punctuation">-</span> app_client_trust_certificates.pem
      <span class="token punctuation">-</span> app_cos_client_certificate.pem
      <span class="token punctuation">-</span> app_cos_client_certificate_private_key.pem
      <span class="token punctuation">-</span> app_client_certificate_private_key.pem.password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./cos/bpe/plugin
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/plugin
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./cos/bpe/process
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/process
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./cos/bpe/log
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/log
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./cos/bpe/last_event
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/last_event
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin
      <span class="token key atrule">EXTRA_JVM_ARGS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>agentlib<span class="token punctuation">:</span>jdwp=transport=dt_socket<span class="token punctuation">,</span>server=y<span class="token punctuation">,</span>suspend=n<span class="token punctuation">,</span>address=<span class="token important">*:</span><span class="token number">5005</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_liquibase.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_cos_bpe_user.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_cos_bpe_user_camunda.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_TRUST_CERTIFICATES</span><span class="token punctuation">:</span> /run/secrets/app_client_trust_certificates.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE</span><span class="token punctuation">:</span> /run/secrets/app_cos_client_certificate.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY</span><span class="token punctuation">:</span> /run/secrets/app_cos_client_certificate_private_key.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/app_client_certificate_private_key.pem.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_URL</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>postgresql<span class="token punctuation">:</span>//db/cos_bpe
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_GROUP</span><span class="token punctuation">:</span> cos_bpe_users
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME</span><span class="token punctuation">:</span> cos_bpe_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_GROUP</span><span class="token punctuation">:</span> cos_camunda_users
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_USERNAME</span><span class="token punctuation">:</span> cos_camunda_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</span><span class="token punctuation">:</span> Test_COS
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cos/fhir
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">cos-bpe-frontend</span><span class="token punctuation">:</span>
      <span class="token key atrule">cos-bpe-backend</span><span class="token punctuation">:</span>
      <span class="token key atrule">internet</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
      <span class="token punctuation">-</span> cos<span class="token punctuation">-</span>fhir

  <span class="token key atrule">dic-fhir</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/highmed/fhir<span class="token punctuation">:</span>0.7.0
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>5000<span class="token punctuation">:</span><span class="token number">5000</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_liquibase.password
      <span class="token punctuation">-</span> db_dic_fhir_user.password
      <span class="token punctuation">-</span> db_dic_fhir_user_permanent_delete.password
      <span class="token punctuation">-</span> app_client_trust_certificates.pem
      <span class="token punctuation">-</span> app_dic_client_certificate.pem
      <span class="token punctuation">-</span> app_dic_client_certificate_private_key.pem
      <span class="token punctuation">-</span> app_client_certificate_private_key.pem.password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./dic/fhir/conf/bundle.xml
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/fhir/conf/bundle.xml
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./dic/fhir/log
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/fhir/log
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin
      <span class="token key atrule">EXTRA_JVM_ARGS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>agentlib<span class="token punctuation">:</span>jdwp=transport=dt_socket<span class="token punctuation">,</span>server=y<span class="token punctuation">,</span>suspend=n<span class="token punctuation">,</span>address=<span class="token important">*:</span><span class="token number">5000</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_liquibase.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_dic_fhir_user.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_dic_fhir_user_permanent_delete.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_TRUST_CERTIFICATES</span><span class="token punctuation">:</span> /run/secrets/app_client_trust_certificates.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE</span><span class="token punctuation">:</span> /run/secrets/app_dic_client_certificate.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY</span><span class="token punctuation">:</span> /run/secrets/app_dic_client_certificate_private_key.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/app_client_certificate_private_key.pem.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_URL</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>postgresql<span class="token punctuation">:</span>//db/dic_fhir
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_GROUP</span><span class="token punctuation">:</span> dic_fhir_users
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME</span><span class="token punctuation">:</span> dic_fhir_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP</span><span class="token punctuation">:</span> dic_fhir_permanent_delete_users
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME</span><span class="token punctuation">:</span> dic_fhir_server_permanent_delete_user
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//dic/fhir
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</span><span class="token punctuation">:</span> Test_DIC
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DIC_USER_THUMBPRINTS<span class="token punctuation">}</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DIC_USER_THUMBPRINTS_PERMANENT_DELETE<span class="token punctuation">}</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">dic-fhir-frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.20.0.67
      <span class="token key atrule">dic-fhir-backend</span><span class="token punctuation">:</span>
      <span class="token key atrule">internet</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
      <span class="token punctuation">-</span> proxy
  <span class="token key atrule">dic-bpe</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/highmed/bpe<span class="token punctuation">:</span>0.7.0
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>5003<span class="token punctuation">:</span><span class="token number">5003</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_liquibase.password
      <span class="token punctuation">-</span> db_dic_bpe_user.password
      <span class="token punctuation">-</span> db_dic_bpe_user_camunda.password
      <span class="token punctuation">-</span> app_client_trust_certificates.pem
      <span class="token punctuation">-</span> app_dic_client_certificate.pem
      <span class="token punctuation">-</span> app_dic_client_certificate_private_key.pem
      <span class="token punctuation">-</span> app_client_certificate_private_key.pem.password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./dic/bpe/plugin
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/plugin
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./dic/bpe/process
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/process
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./dic/bpe/log
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/log
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./dic/bpe/last_event
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/last_event
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin
      <span class="token key atrule">EXTRA_JVM_ARGS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>agentlib<span class="token punctuation">:</span>jdwp=transport=dt_socket<span class="token punctuation">,</span>server=y<span class="token punctuation">,</span>suspend=n<span class="token punctuation">,</span>address=<span class="token important">*:</span><span class="token number">5003</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_liquibase.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_dic_bpe_user.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_dic_bpe_user_camunda.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_TRUST_CERTIFICATES</span><span class="token punctuation">:</span> /run/secrets/app_client_trust_certificates.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE</span><span class="token punctuation">:</span> /run/secrets/app_dic_client_certificate.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY</span><span class="token punctuation">:</span> /run/secrets/app_dic_client_certificate_private_key.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/app_client_certificate_private_key.pem.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_URL</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>postgresql<span class="token punctuation">:</span>//db/dic_bpe
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_GROUP</span><span class="token punctuation">:</span> dic_bpe_users
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME</span><span class="token punctuation">:</span> dic_bpe_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_GROUP</span><span class="token punctuation">:</span> dic_camunda_users
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_USERNAME</span><span class="token punctuation">:</span> dic_camunda_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</span><span class="token punctuation">:</span> Test_DIC
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//dic/fhir
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">dic-bpe-frontend</span><span class="token punctuation">:</span>
      <span class="token key atrule">dic-bpe-backend</span><span class="token punctuation">:</span>
      <span class="token key atrule">internet</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
      <span class="token punctuation">-</span> dic<span class="token punctuation">-</span>fhir

  <span class="token key atrule">hrp-fhir</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/highmed/fhir<span class="token punctuation">:</span>0.7.0
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>5001<span class="token punctuation">:</span><span class="token number">5001</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_liquibase.password
      <span class="token punctuation">-</span> db_hrp_fhir_user.password
      <span class="token punctuation">-</span> db_hrp_fhir_user_permanent_delete.password
      <span class="token punctuation">-</span> app_client_trust_certificates.pem
      <span class="token punctuation">-</span> app_hrp_client_certificate.pem
      <span class="token punctuation">-</span> app_hrp_client_certificate_private_key.pem
      <span class="token punctuation">-</span> app_client_certificate_private_key.pem.password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./hrp/fhir/conf/bundle.xml
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/fhir/conf/bundle.xml
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./hrp/fhir/log
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/fhir/log
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin
      <span class="token key atrule">EXTRA_JVM_ARGS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>agentlib<span class="token punctuation">:</span>jdwp=transport=dt_socket<span class="token punctuation">,</span>server=y<span class="token punctuation">,</span>suspend=n<span class="token punctuation">,</span>address=<span class="token important">*:</span><span class="token number">5001</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_liquibase.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_hrp_fhir_user.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_hrp_fhir_user_permanent_delete.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_TRUST_CERTIFICATES</span><span class="token punctuation">:</span> /run/secrets/app_client_trust_certificates.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE</span><span class="token punctuation">:</span> /run/secrets/app_hrp_client_certificate.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY</span><span class="token punctuation">:</span> /run/secrets/app_hrp_client_certificate_private_key.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/app_client_certificate_private_key.pem.password
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_URL</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>postgresql<span class="token punctuation">:</span>//db/hrp_fhir
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_GROUP</span><span class="token punctuation">:</span> hrp_fhir_users
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME</span><span class="token punctuation">:</span> hrp_fhir_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP</span><span class="token punctuation">:</span> hrp_fhir_permanent_delete_users
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME</span><span class="token punctuation">:</span> hrp_fhir_server_permanent_delete_user
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//hrp/fhir
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>HRP_USER_THUMBPRINTS<span class="token punctuation">}</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>HRP_USER_THUMBPRINTS_PERMANENT_DELETE<span class="token punctuation">}</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</span><span class="token punctuation">:</span> Test_HRP
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">hrp-fhir-frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.20.0.83
      <span class="token key atrule">hrp-fhir-backend</span><span class="token punctuation">:</span>
      <span class="token key atrule">internet</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
      <span class="token punctuation">-</span> proxy
  <span class="token key atrule">hrp-bpe</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/highmed/bpe<span class="token punctuation">:</span>0.7.0
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>5004<span class="token punctuation">:</span><span class="token number">5004</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_liquibase.password
      <span class="token punctuation">-</span> db_hrp_bpe_user.password
      <span class="token punctuation">-</span> db_hrp_bpe_user_camunda.password
      <span class="token punctuation">-</span> app_client_trust_certificates.pem
      <span class="token punctuation">-</span> app_hrp_client_certificate.pem
      <span class="token punctuation">-</span> app_hrp_client_certificate_private_key.pem
      <span class="token punctuation">-</span> app_client_certificate_private_key.pem.password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./hrp/bpe/plugin
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/plugin
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./hrp/bpe/process
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/process
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./hrp/bpe/log
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/log
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./hrp/bpe/last_event
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/bpe/last_event
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Berlin
      <span class="token key atrule">EXTRA_JVM_ARGS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>agentlib<span class="token punctuation">:</span>jdwp=transport=dt_socket<span class="token punctuation">,</span>server=y<span class="token punctuation">,</span>suspend=n<span class="token punctuation">,</span>address=<span class="token important">*:</span><span class="token number">5004</span>
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_liquibase.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_hrp_bpe_user.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/db_hrp_bpe_user_camunda.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_TRUST_CERTIFICATES</span><span class="token punctuation">:</span> /run/secrets/app_client_trust_certificates.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE</span><span class="token punctuation">:</span> /run/secrets/app_hrp_client_certificate.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY</span><span class="token punctuation">:</span> /run/secrets/app_hrp_client_certificate_private_key.pem
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/app_client_certificate_private_key.pem.password
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_URL</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>postgresql<span class="token punctuation">:</span>//db/hrp_bpe
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_GROUP</span><span class="token punctuation">:</span> hrp_bpe_users
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME</span><span class="token punctuation">:</span> hrp_bpe_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_GROUP</span><span class="token punctuation">:</span> hrp_camunda_users
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_USERNAME</span><span class="token punctuation">:</span> hrp_camunda_server_user
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</span><span class="token punctuation">:</span> Test_HRP
      <span class="token key atrule">ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//hrp/fhir
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">hrp-bpe-frontend</span><span class="token punctuation">:</span>
      <span class="token key atrule">hrp-bpe-backend</span><span class="token punctuation">:</span>
      <span class="token key atrule">internet</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
      <span class="token punctuation">-</span> hrp<span class="token punctuation">-</span>fhir

<span class="token key atrule">secrets</span><span class="token punctuation">:</span>
  <span class="token key atrule">proxy_certificate_and_int_cas.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/proxy_certificate_and_int_cas.pem
  <span class="token key atrule">proxy_certificate_private_key.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/proxy_certificate_private_key.pem
  <span class="token key atrule">proxy_trusted_client_cas.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/proxy_trusted_client_cas.pem

  <span class="token key atrule">db_liquibase.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_liquibase.password

  <span class="token key atrule">db_dic_fhir_user.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_dic_fhir_user.password
  <span class="token key atrule">db_dic_fhir_user_permanent_delete.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_dic_fhir_user_permanent_delete.password
  <span class="token key atrule">db_dic_bpe_user.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_dic_bpe_user.password
  <span class="token key atrule">db_dic_bpe_user_camunda.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_dic_bpe_user_camunda.password

  <span class="token key atrule">db_hrp_fhir_user.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_hrp_fhir_user.password
  <span class="token key atrule">db_hrp_fhir_user_permanent_delete.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_hrp_fhir_user_permanent_delete.password
  <span class="token key atrule">db_hrp_bpe_user.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_hrp_bpe_user.password
  <span class="token key atrule">db_hrp_bpe_user_camunda.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_hrp_bpe_user_camunda.password

  <span class="token key atrule">db_cos_fhir_user.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_cos_fhir_user.password
  <span class="token key atrule">db_cos_fhir_user_permanent_delete.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_cos_fhir_user_permanent_delete.password
  <span class="token key atrule">db_cos_bpe_user.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_cos_bpe_user.password
  <span class="token key atrule">db_cos_bpe_user_camunda.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/db_cos_bpe_user_camunda.password

  <span class="token key atrule">app_client_trust_certificates.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_client_trust_certificates.pem
  <span class="token key atrule">app_client_certificate_private_key.pem.password</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_client_certificate_private_key.pem.password

  <span class="token key atrule">app_dic_client_certificate.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_dic_client_certificate.pem
  <span class="token key atrule">app_dic_client_certificate_private_key.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_dic_client_certificate_private_key.pem

  <span class="token key atrule">app_hrp_client_certificate.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_hrp_client_certificate.pem
  <span class="token key atrule">app_hrp_client_certificate_private_key.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_hrp_client_certificate_private_key.pem

  <span class="token key atrule">app_cos_client_certificate.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_cos_client_certificate.pem
  <span class="token key atrule">app_cos_client_certificate_private_key.pem</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./secrets/app_cos_client_certificate_private_key.pem

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">internet</span><span class="token punctuation">:</span>
  <span class="token key atrule">dic-fhir-frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.20.0.64/28
  <span class="token key atrule">dic-fhir-backend</span><span class="token punctuation">:</span>
  <span class="token key atrule">dic-bpe-frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">dic-bpe-backend</span><span class="token punctuation">:</span>
  <span class="token key atrule">hrp-fhir-frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.20.0.80/28
  <span class="token key atrule">hrp-fhir-backend</span><span class="token punctuation">:</span>
  <span class="token key atrule">hrp-bpe-frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">hrp-bpe-backend</span><span class="token punctuation">:</span>
  <span class="token key atrule">cos-fhir-frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.20.0.96/28
  <span class="token key atrule">cos-fhir-backend</span><span class="token punctuation">:</span>
  <span class="token key atrule">cos-bpe-frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">cos-bpe-backend</span><span class="token punctuation">:</span>


<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">db-data</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> dsf<span class="token punctuation">-</span>process<span class="token punctuation">-</span>tutorial<span class="token punctuation">-</span>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(d,_){const s=i("RouteLink");return l(),c("div",null,[t("p",null,[a(s,{to:"/oldstable/tutorial/prerequisites.html"},{default:e(()=>[n("Prerequisites")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise1-simpleProcess.html"},{default:e(()=>[n("Exercise 1")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise11-processDebugging.html"},{default:e(()=>[n("Exercise 1.1")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise2-inputParameters.html"},{default:e(()=>[n("Exercise 2")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise3-messageEvents.html"},{default:e(()=>[n("Exercise 3")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise4-exclusiveGateways.html"},{default:e(()=>[n("Exercise 4")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise5-eventBasedGateways.html"},{default:e(()=>[n("Exercise 5")]),_:1})]),r,t("p",null,[a(s,{to:"/oldstable/tutorial/prerequisites.html"},{default:e(()=>[n("Prerequisites")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise1-simpleProcess.html"},{default:e(()=>[n("Exercise 1")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise11-processDebugging.html"},{default:e(()=>[n("Exercise 1.1")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise2-inputParameters.html"},{default:e(()=>[n("Exercise 2")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise3-messageEvents.html"},{default:e(()=>[n("Exercise 3")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise4-exclusiveGateways.html"},{default:e(()=>[n("Exercise 4")]),_:1}),n(" | "),a(s,{to:"/oldstable/tutorial/exercise5-eventBasedGateways.html"},{default:e(()=>[n("Exercise 5")]),_:1})])])}const m=p(o,[["render",k],["__file","ex11-docker-composeyml.html.vue"]]),E=JSON.parse('{"path":"/oldstable/tutorial/ex11-docker-composeyml.html","title":"Exercise 1.1 - Process Debugging","lang":"en-US","frontmatter":{"title":"Exercise 1.1 - Process Debugging","icon":"slides"},"headers":[{"level":3,"title":"docker-compose.yml","slug":"docker-compose-yml","link":"#docker-compose-yml","children":[]}],"git":{"createdTime":1692783801000,"updatedTime":1692786258000,"contributors":[{"name":"Hauke Hund","email":"hauke.hund@hs-heilbronn.de","commits":1},{"name":"Simon Schweizer","email":"simon-tobias.schweizer@hs-heilbronn.de","commits":1}]},"readingTime":{"minutes":3.1,"words":931},"filePathRelative":"oldstable/tutorial/ex11-docker-composeyml.md","localizedDate":"August 23, 2023","excerpt":"<p><a href=\\"/oldstable/tutorial/prerequisites.html\\" target=\\"_blank\\">Prerequisites</a> | <a href=\\"/oldstable/tutorial/exercise1-simpleProcess.html\\" target=\\"_blank\\">Exercise 1</a> | <a href=\\"/oldstable/tutorial/exercise11-processDebugging.html\\" target=\\"_blank\\">Exercise 1.1</a> | <a href=\\"/oldstable/tutorial/exercise2-inputParameters.html\\" target=\\"_blank\\">Exercise 2</a> | <a href=\\"/oldstable/tutorial/exercise3-messageEvents.html\\" target=\\"_blank\\">Exercise 3</a> | <a href=\\"/oldstable/tutorial/exercise4-exclusiveGateways.html\\" target=\\"_blank\\">Exercise 4</a> | <a href=\\"/oldstable/tutorial/exercise5-eventBasedGateways.html\\" target=\\"_blank\\">Exercise 5</a></p>"}');export{m as comp,E as data};
