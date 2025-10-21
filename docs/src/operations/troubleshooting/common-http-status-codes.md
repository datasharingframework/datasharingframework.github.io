---
title: Common HTTP Status Codes
icon: support
---

# 401 Unauthorized
This HTTP status code may be a result of an allow list mismatch. Either the requesting party is using a client certificate that was not updated after making changes to the allow list or the receiving party is using an outdated version of the allow list.

# 403 Forbidden
This HTTP status code may be encountered in different ways in the context of the DSF:
- Process plugin is not installed at FHIR server where the Task resource was posted
- Client certificate of the FHIR server where the Task resource was posted is invalid e.g. because it is expired

# 413 Content Too Large
This HTTP status code is a result of trying to upload a resource that is too large for the server to handle. This might be due to a misconfiguration of the DSF FHIR server's reverse proxy not allowing this much data to be uploaded.

# 500 Internal Server Error
This HTTP status may be a result of a connection timeout if a forward proxy is used or when using ping pong 2.x in DSF 1.x with a download resource size of >400MB.

# 502 Bad Gateway
This HTTP status code is usually the response of a proxy because the upstream server sent an invalid response.

# 504 Gateway Timeout
This HTTP status code is usually the response of a proxy because the upstream server did not send a response in time.