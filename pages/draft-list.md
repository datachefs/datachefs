---
layout: default
title:  Drafts
permalink: /drafts/
---
<h1> Drafts</h1>

<p> Here's a list of the files in the /drafts folder:</p>

<div class="post-content">
  {%- for draft in site.pages -%} 
    {% if draft.path contains 'drafts/' %}
      <p><a href="{{ draft.url | relative_url }}"> {{ draft.title | escape }} </a> ({{ draft.path}})</p>
    {% endif %}
  {%- endfor -%}
 </div> 
