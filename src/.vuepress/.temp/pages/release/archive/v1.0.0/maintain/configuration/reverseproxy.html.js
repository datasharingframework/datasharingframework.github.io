import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.0.0/maintain/configuration/reverseproxy.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.0.0/maintain/configuration/reverseproxy.html\",\"title\":\"Parameters FHIR Reverse Proxy\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[{\"level\":3,\"title\":\"APP_SERVER_IP\",\"slug\":\"app-server-ip\",\"link\":\"#app-server-ip\",\"children\":[]},{\"level\":3,\"title\":\"HTTPS_SERVER_NAME_PORT\",\"slug\":\"https-server-name-port\",\"link\":\"#https-server-name-port\",\"children\":[]},{\"level\":3,\"title\":\"PROXY_PASS_CONNECTION_TIMEOUT_HTTP\",\"slug\":\"proxy-pass-connection-timeout-http\",\"link\":\"#proxy-pass-connection-timeout-http\",\"children\":[]},{\"level\":3,\"title\":\"PROXY_PASS_CONNECTION_TIMEOUT_WS\",\"slug\":\"proxy-pass-connection-timeout-ws\",\"link\":\"#proxy-pass-connection-timeout-ws\",\"children\":[]},{\"level\":3,\"title\":\"PROXY_PASS_TIMEOUT_HTTP\",\"slug\":\"proxy-pass-timeout-http\",\"link\":\"#proxy-pass-timeout-http\",\"children\":[]},{\"level\":3,\"title\":\"PROXY_PASS_TIMEOUT_WS\",\"slug\":\"proxy-pass-timeout-ws\",\"link\":\"#proxy-pass-timeout-ws\",\"children\":[]},{\"level\":3,\"title\":\"SSL_CA_CERTIFICATE_FILE\",\"slug\":\"ssl-ca-certificate-file\",\"link\":\"#ssl-ca-certificate-file\",\"children\":[]},{\"level\":3,\"title\":\"SSL_CA_DN_REQUEST_FILE\",\"slug\":\"ssl-ca-dn-request-file\",\"link\":\"#ssl-ca-dn-request-file\",\"children\":[]},{\"level\":3,\"title\":\"SSL_CERTIFICATE_CHAIN_FILE\",\"slug\":\"ssl-certificate-chain-file\",\"link\":\"#ssl-certificate-chain-file\",\"children\":[]},{\"level\":3,\"title\":\"SSL_CERTIFICATE_FILE\",\"slug\":\"ssl-certificate-file\",\"link\":\"#ssl-certificate-file\",\"children\":[]},{\"level\":3,\"title\":\"SSL_CERTIFICATE_KEY_FILE\",\"slug\":\"ssl-certificate-key-file\",\"link\":\"#ssl-certificate-key-file\",\"children\":[]}],\"readingTime\":{\"minutes\":1.16,\"words\":348},\"filePathRelative\":\"release/archive/v1.0.0/maintain/configuration/reverseproxy.md\",\"excerpt\":\"\\n<h3>APP_SERVER_IP</h3>\\n<ul>\\n<li><strong>Required:</strong> Yes</li>\\n<li><strong>Description:</strong> Hostname or IP-Address of the DSF FHIR servers application container, the reverse proxy target</li>\\n<li><strong>Example:</strong> <code>app</code>, <code>172.28.1.3</code></li>\\n</ul>\\n<h3>HTTPS_SERVER_NAME_PORT</h3>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
