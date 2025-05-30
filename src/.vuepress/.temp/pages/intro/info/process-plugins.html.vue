<template><div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>It is important to understand that the DSF is <em>only</em> the silent helper in the background: a middleware. The DSF is use case agnostic. This means that process plugins make it possible to execute almost any use case you can imagine with the DSF. Process plugins provide individual functionality. For example, it is possible to use the Ping Pong process to test bilateral communication or the <a href="/intro/use-cases/feasibility">Feasibility process</a> to perform feasibility queries for research.<br>
However, it is possible to deploy several process plugins together, even the same process plugin in different versions. A process plugin is basically an archive of BPMN 2.0 models, FHIR R4 resources and Java code. This process plugin is deployed as a Jar file on the BPE.</p>
<h2 id="bpmn-example" tabindex="-1"><a class="header-anchor" href="#bpmn-example"><span>BPMN: Example</span></a></h2>
<p>BPMN models can be created with <a href="https://camunda.com/de" target="_blank" rel="noopener noreferrer">Camunda Modeler</a>. The following model is a BPMN model consisting of two lanes: These are the square boxes, i.e. Organization A and B. This process is intended only as an example to illustrate the formalities. We will look at realistic processes in the next <a href="/intro/use-cases">chapter</a>.</p>
<figure><img src="/photos/info/plugins/bpmn-example.png" alt="BPMN: Example" tabindex="0" loading="lazy"><figcaption>BPMN: Example</figcaption></figure>
<h2 id="ping-pong-process" tabindex="-1"><a class="header-anchor" href="#ping-pong-process"><span>Ping Pong Process</span></a></h2>
<p>The <a href="https://github.com/datasharingframework/dsf-process-ping-pong" target="_blank" rel="noopener noreferrer">ping process plugin</a> can be used for (periodic) connection testing between organizations that are part of your DSF allow list. The following figure shows a representation of the process.</p>
<figure><img src="/photos/info/use-cases/ping-pong.png" alt="Ping-Pong Process" tabindex="0" loading="lazy"><figcaption>Ping-Pong Process</figcaption></figure>
<p>The ping pong process is composed of 3 different subprocesses:</p>
<h3 id="autostart-ping-process" tabindex="-1"><a class="header-anchor" href="#autostart-ping-process"><span>Autostart Ping Process</span></a></h3>
<p>The autostart ping process is used to execute connection tests in a predefined interval. This subprocess performs the following steps:</p>
<ul>
<li>Start a timer with a predefined interval (default 24 h)</li>
<li>Start the ping process once per interval</li>
<li>Stop the timer after the current interval completes</li>
</ul>
<h3 id="ping-process" tabindex="-1"><a class="header-anchor" href="#ping-process"><span>Ping Process</span></a></h3>
<p>The ping process is used to check outgoing and incoming connections to organizations in your allow-list. This subprocess performs the following steps:</p>
<ul>
<li>Select organizations in your allow list that should receive a ping message</li>
<li>Send ping message to selected organizations</li>
<li>Receive pong message from selected organizations</li>
<li>Log status of ping/pong messages</li>
<li>Log errors if any occur</li>
</ul>
<h3 id="pong-process" tabindex="-1"><a class="header-anchor" href="#pong-process"><span>Pong Process</span></a></h3>
<p>The pong process is used to send a response during the connection test to the requesting organization. This subprocess performs the following steps:</p>
<ul>
<li>Receive ping message from requesting organizations</li>
<li>Send pong message to requesting organizations</li>
<li>Log status of ping/pong message</li>
<li>Log errors if any occur</li>
</ul>
<!--
## BPMN: Communicate
*Message Events* enable the communication between different organizations. Every time there is a *Message Event* between two business processes, there is a corresponding *TaskResource* on the FHIR side. When one organization sends a message for example “do some work” to another organization or when we send a message to ourselves to start or continue a process, we do this by creating a FHIR *TaskResource* with the status “requested”. After that the Business Process Engine starts the work and the status switches to “in-progress” and if the work is done to “completed” or if there is a problem to “failed”. 

![Message Send Task / Message Receive Task (Multi-Instance, Error Handling)](/photos/info/plugins/bpmn-communicate.png)

blablabla

![Event Based Gateway – OK Message, Error Message, Timeout](/photos/info/plugins/bpmn-event-based-gateway.png)

blablabla

![Message Events Intermediate | Send / Receive](/photos/info/plugins/bpmn-intermediate.png =750x90)
--></div></template>


