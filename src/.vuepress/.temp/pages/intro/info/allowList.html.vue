<template><div><h2 id="goal" tabindex="-1"><a class="header-anchor" href="#goal"><span>Goal</span></a></h2>
<p>The main objective is to allow only authorized organizations to do what &quot;we&quot; allow them to do (e.g. query data).<br>
First, we need a list of organizations that we trust. Secondly, we need a way to ensure that the other party is a member of the parent organization. Thirdly, a list of actions we want to allow the organization to perform is needed. An organization can have different roles in different use cases.</p>
<p>The Allow List consists of Organization-, Endpoint- and OrganisationAffiliation- resources. With these resources the allow list defines communication partners and and parent organizations like research consortia and groups as well as the roles of each organization. Each DSF FHIR server stores their own allow list. To make sure that processes can be executed, parties must allow access via their allow list.</p>
<figure><img src="/photos/info/allowList/allowList-architecture.png" alt="Architecture" tabindex="0" loading="lazy"><figcaption>Architecture</figcaption></figure>
<h2 id="allow-list-managment" tabindex="-1"><a class="header-anchor" href="#allow-list-managment"><span>Allow List Managment</span></a></h2>
<p><RouteLink to="/stable/maintain/allowList-mgm.html">Here</RouteLink> you can read all the information if you want to create or update an Allow List.</p>
<h4 id="feel-free-to-contact-us-via-e-mail-dsf-gecko-hs-heilbronn-de-and-we-will-take-care-of-your-request-as-soon-as-possible" tabindex="-1"><a class="header-anchor" href="#feel-free-to-contact-us-via-e-mail-dsf-gecko-hs-heilbronn-de-and-we-will-take-care-of-your-request-as-soon-as-possible"><span>Feel free to contact us via <a href="mailto:dsf-gecko@hs-heilbronn.de"> E-Mail (dsf-gecko@hs-heilbronn.de)</a> and we will take care of your request as soon as possible.</span></a></h4>
</div></template>


