---
layout: default
title:  Datachefs Blog
image: cupcakes-reflection.jpg
permalink: /blog/
---

<article class="post">

  <header class="post-header">
    <h1 class="post-title">{{ page.title | escape }}</h1>
  </header>
  {%- if page.image -%}
  <div class="main-image">
    <img src="{{'/assets/images/' | append:  page.image | relative_url }} ">
    {%- if page.image-citation -%}
      <div class="main-image-citation">{{ page.image-citation }} </div>
    {%- endif -%}

  </div>  
  {%- endif -%}

  <div class="post-content">

    <ul class="post-list">
      {%- for post in site.posts -%}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>

    <p class="feed-subscribe">
      <a href="{{ 'feed.xml' | relative_url }}">
        <svg class="svg-icon orange"><use xlink:href="{{ 'assets/minima-social-icons.svg#rss' | relative_url }}"></use></svg><span>Subscribe</span>
      </a>
    </p>

 </div>

</article>
