---
title: Connection Timeout
icon: time
---

A connection timeout happens when a connection attempt is made but there is no response from the endpoint in a certain timeframe.
There are many possible reasons for why this happens:
- The server is currently down or unreachable due to network configuration
- The server is under heavy load and thus unresponsive
- Firewalls might be blocking outgoing connections to the server
- Arbitrary network issues

If this is happens during the execution of a DSF process, it is recommended to try starting the process again to see if the issue persists. If the issue persists, further troubleshooting might have include system administrators or a member of the [DSF team](../../community/communication.md).