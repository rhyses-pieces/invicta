---
bookTitle: fics
layout: base.html
---

# {{ title | title }}

<section>
  {% for book in collections.writing %}
  <article>
    <h2><a href="{{ book.url }}">{{ book.data.bookTitle }}</a></h2>
    <p>{{ book.data.summary }}</p>
  </article>
  {% endfor %}
</section>