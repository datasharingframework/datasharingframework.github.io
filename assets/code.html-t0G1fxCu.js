import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as o,e as l,f as n,a as d,r as s,o as c,d as a}from"./app-C6t45yFC.js";const m={};function f(h,e){const t=s("RouteLink");return c(),r("div",null,[e[2]||(e[2]=o("h2",{id:"code-style",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#code-style"},[o("span",null,"Code Style")])],-1)),e[3]||(e[3]=o("p",null,"HiGHmed DSF code-style configurations for Eclipse and IntelliJ IDEA can be found here:",-1)),o("ul",null,[o("li",null,[l(t,{to:"/oldstable/code/eclipseContent.html"},{default:n(()=>e[0]||(e[0]=[a("Eclipse")])),_:1})]),o("li",null,[l(t,{to:"/oldstable/code/intelliJContent.html"},{default:n(()=>e[1]||(e[1]=[a("IntelliJ IDEA")])),_:1})])]),e[4]||(e[4]=d('<p>Pull Requests are only approved, if the code is formatted according to the code-style configurations above. To format the code with maven before pushing to GitHub, use <code>mvn compile -Pformat-and-sort</code>.</p><h2 id="git-workflow" tabindex="-1"><a class="header-anchor" href="#git-workflow"><span>Git Workflow</span></a></h2><p>Since Release 0.1.0, we follow <code>git-flow</code> as described <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" target="_blank" rel="noopener noreferrer">here</a>.<br> New features should branch from <code>develop</code> and merged back if done. Hot-Fixes for the latest release will branch of <code>master</code> and will be merged into develop and later into master. A new release will branch of develop for a ramp down phase and will then be merged into master. The new master should merge back into develop to start a new development cycle.</p><h3 id="branch-naming" tabindex="-1"><a class="header-anchor" href="#branch-naming"><span>Branch Naming:</span></a></h3><ul><li>Features: <code>issue/&lt;issue-number&gt;_&lt;issue-name&gt;</code></li><li>Hot-Fix: <code>hot-fix/&lt;issue-number&gt;_&lt;issue-name&gt;</code></li><li>Release: <code>release/&lt;version&gt;</code></li></ul>',5))])}const g=i(m,[["render",f],["__file","code.html.vue"]]),b=JSON.parse('{"path":"/oldstable/code/code.html","title":"Writing Code","lang":"en-US","frontmatter":{"title":"Writing Code","icon":"code","gitInclude":[]},"headers":[{"level":2,"title":"Code Style","slug":"code-style","link":"#code-style","children":[]},{"level":2,"title":"Git Workflow","slug":"git-workflow","link":"#git-workflow","children":[{"level":3,"title":"Branch Naming:","slug":"branch-naming","link":"#branch-naming","children":[]}]}],"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"oldstable/code/code.md","excerpt":"<h2>Code Style</h2>\\n<p>HiGHmed DSF code-style configurations for Eclipse and IntelliJ IDEA can be found here:</p>\\n<ul>\\n<li><a href=\\"/oldstable/code/eclipseContent.html\\" target=\\"_blank\\">Eclipse</a></li>\\n<li><a href=\\"/oldstable/code/intelliJContent.html\\" target=\\"_blank\\">IntelliJ IDEA</a></li>\\n</ul>\\n<p>Pull Requests are only approved, if the code is formatted according to the code-style configurations above. To format the code with maven before pushing to GitHub, use <code>mvn compile -Pformat-and-sort</code>.</p>"}');export{g as comp,b as data};