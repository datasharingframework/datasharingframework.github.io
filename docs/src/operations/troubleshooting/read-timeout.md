---
title: Read Timeout
icon: time
---

A read timeout is a network error that usually happens when a resource is read from a server but the resource takes too long to arrive at the client.
There are many possible reasons for why this happens:
- The server unexpectedly went down during transmission
- The server is under heavy load and unable to process the request in a timely manner
- Arbitrary network issues

If this is happens during the execution of a DSF process, it is recommended to try starting the process again to see if the issue persists. If the issue persists, further troubleshooting might have include system administrators or a member of the [DSF team](../../community/communication.md).