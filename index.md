---
layout: default
title: Início
---

<div class="content list">
  {% if site.posts.size == 0 %}
    <h2>No post found =(</h2>
  {% else %}
    {% for post in site.posts %}
      <div class="list-item">
     
  <a class="list-post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          <div class="list-post-date">
          <time>{{ post.date | date_to_string }}</time>
        </div>

<div class="list-post-description">
<img hei src="{{ post.thumbnail }}" alt="thumbnail"/>
<p>{{ post.description }}</p>
      </div>

  </div>
    {% endfor %}
  {% endif %}
</div>
