<template><div><p>Your code can make a difference for the Data Sharing Framework (DSF). We invite all users to share their code, tests, scripts and improvement ideas. Contributions of any size enhance the DSF and support the data sharing framework community.</p>
<h3 id="benefits-of-contributing" tabindex="-1"><a class="header-anchor" href="#benefits-of-contributing"><span>Benefits of Contributing:</span></a></h3>
<ul>
<li>Foster community growth and diversification.</li>
<li>Sharpen your coding skills.</li>
<li>Gain recognition in the DSF community.</li>
<li>Directly impact the future of data sharing in medicine.</li>
</ul>
<p>Start now by visiting our contribution pages. Every line of code helps us build a stronger and more versatile DSF.</p>
<h2 id="general" tabindex="-1"><a class="header-anchor" href="#general"><span>General</span></a></h2>
<h3 id="code-style" tabindex="-1"><a class="header-anchor" href="#code-style"><span>Code style</span></a></h3>
<p>You can import our code style for your specific IDE:</p>
<ul>
<li><a href="https://github.com/datasharingframework/dsf/blob/main/src/main/resources/eclipse-formatter-config.xml" target="_blank" rel="noopener noreferrer">Eclipse</a>. Open your preferences, click on <code v-pre>Java</code>, <code v-pre>Code style</code>, <code v-pre>Formatter</code>, <code v-pre>Import</code> and select the downloaded file.</li>
<li><a href="https://github.com/datasharingframework/dsf/blob/main/src/main/resources/intellij-formatter-config.xml" target="_blank" rel="noopener noreferrer">IntelliJ</a>. Open your settings, click on <code v-pre>Editor</code>, <code v-pre>Code style</code>, <code v-pre>Java</code>, the settings icon, <code v-pre>import scheme</code>, <code v-pre>IntelliJ</code> and select the downloaded file.</li>
</ul>
<p>Pull requests will only be approved if the code is formatted according to the code style configurations above. To format the code with maven before pushing to GitHub, use <code v-pre>mvn compile -Pformat-and-sort</code>.</p>
<h3 id="branching-strategy" tabindex="-1"><a class="header-anchor" href="#branching-strategy"><span>Branching strategy</span></a></h3>
<p><a href="https://www.atlassian.com/de/git/tutorials/comparing-workflows/gitflow-workflow" target="_blank" rel="noopener noreferrer">Git Flow</a> is used as this project's branching strategy. Therefore, you will find the following structure:</p>
<ul>
<li>main</li>
<li>develop</li>
<li>issue</li>
<li>hotfix</li>
<li>release</li>
</ul>
<p>Notice that only the first two elements listed are actual branches. The other elements are containers to hold all branches belonging to that category.</p>
<h4 id="branch-naming" tabindex="-1"><a class="header-anchor" href="#branch-naming"><span>Branch naming</span></a></h4>
<p>The following ruleset is applied to name branches:</p>
<ul>
<li><code v-pre>issue/&lt;issue-number&gt;_&lt;issue-name&gt;</code></li>
<li><code v-pre>hotfix/&lt;version&gt;</code></li>
<li><code v-pre>release/&lt;version&gt;</code></li>
</ul>
<h2 id="setting-up-the-project" tabindex="-1"><a class="header-anchor" href="#setting-up-the-project"><span>Setting up the project</span></a></h2>
<p>This chapter lists all important requirements to get the project buildable and running properly.</p>
<h3 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java</span></a></h3>
<p>This project uses Java JDK 17, so make sure you have it installed on your system.</p>
<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3>
<p><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> is used in this project to test database functionality and to run more complex test-setups.</p>
<h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven"><span>Maven</span></a></h3>
<p>The project relies on <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">Maven</a> as its management tool.<br>
<em>Important:</em> When building the project you might encounter the following error:<br>
<em>Could not determine gpg version</em> <a href="https://gnupg.org/" target="_blank" rel="noopener noreferrer">GPG</a> is used to sign artifacts for public release. Since this does not concern contributors, you may skip this step in the maven build process with <code v-pre>-Dgpg.skip</code>.</p>
<h2 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow"><span>Workflow</span></a></h2>
<ol>
<li>Create an issue or comment on an issue that you want to contribute some feature</li>
<li>Fork the repository, create a branch and mention it in the issue</li>
<li>If you desire feedback, create a pull request or comment on it in the issue. Feel free to @ any member with write permissions if you feel like your request has not been registered yet. They will review your changes and/or change requests</li>
<li>If your changes are production-ready, create a <a href="https://github.com/datasharingframework/dsf/pulls" target="_blank" rel="noopener noreferrer">pull request</a>.</li>
</ol>
<h3 id="pull-request-process" tabindex="-1"><a class="header-anchor" href="#pull-request-process"><span>Pull request process</span></a></h3>
<p>We follow Martin Fowler's method for managing pull requests. This approach categorizes pull requests based on the level of trust and experience of the contributor, as well as the impact of the changes. Here's how we apply it:</p>
<ol>
<li>
<p><strong>Ship</strong>: For our most trusted contributors with a proven track record. These members can merge their pull requests without prior review, typically for minor or highly confident changes.</p>
</li>
<li>
<p><strong>Show</strong>: This level is for trusted contributors who need some oversight, as well as for experienced developers who want to demonstrate how certain changes should be made in the future. They create pull requests and show their work to the team.</p>
</li>
<li>
<p><strong>Ask</strong>: New or less experienced contributors, as well as those submitting more complex changes, fall into this category. They are required to ask for feedback and approval before their changes can be merged, ensuring thorough review and quality control.</p>
</li>
</ol>
<p>This method helps us maintain a balance between code quality and efficient development, recognizing the varying levels of expertise among our contributors.</p>
<p>For more information on Fowler's approach, visit <a href="https://martinfowler.com/articles/ship-show-ask.html" target="_blank" rel="noopener noreferrer">Martin Fowler's article on Pull Requests</a>.</p>
<h2 id="data-security-in-dsf-development" tabindex="-1"><a class="header-anchor" href="#data-security-in-dsf-development"><span>Data Security in DSF Development</span></a></h2>
<p>The DSF (Data Sharing Framework) and its process plugins are frequently used to transmit sensitive personal data. To prevent the release of personal data during development, please adhere to the following guidelines:</p>
<ul>
<li><strong>No development with real personal data:</strong> Always use anonymized or synthetic data for development purposes.</li>
<li><strong>No personal data in repositories:</strong> Ensure no personal data is present in local and remote repositories intended for publication, not even temporarily.</li>
<li><strong>Review all log files:</strong> Before using log files in issues, examples, etc., thoroughly review them to ensure no personal and sensitive data is included.</li>
</ul>
</div></template>


