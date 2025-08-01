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

If this is happens during the execution of a DSF process, it is recommended to try starting the process again to see if the issue persists. If the issue persists, it is recommended to ensure no firewall settings are blocking the outgoing connection attempt. If this is not the root of the issue, further troubleshooting has to take place that may have to include someone knowledgeable about the process plugin or someone from the team maintaining the server or a combination of both.