---
title: Read Timeout
icon: time
---

A read timeout is a network error that usually happens when a resource is read from a server but the resource takes too long to arrive at the client.
There are many possible reasons for why this happens:
- The server unexpectedly went down during transmission
- The server is under heavy load and unable to process the request in a timely manner
- Ping pong 2.x may run in read timeouts if the download resource size too large. This can be mitigated by setting the `pong-timeout-duration` when starting the ping pong process, the environment variables `DEV_DSF_BPE_FHIR_CLIENT_REMOTE_TIMEOUT_READ` and `DEV_DSF_BPE_FHIR_CLIENT_LOCAL_TIMEOUT_READ` of the BPE and/or the `DEV_DSF_FHIR_CLIENT_TIMEOUT_READ` of the DSF FHIR server to higher values
- Arbitrary network issues

If this is happens during the execution of a DSF process, it is recommended to try starting the process again to see if the issue persists. If the issue persists, further troubleshooting might have include system administrators or a member of the [DSF team](../../community/communication.md).