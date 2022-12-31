---
bookTitle: fics
layout: base.html
---

# {{ title | title }}

<ul>
  {% for book in collections.writing %}
  <li><a href="{{ book.url }}">{{ book.data.bookTitle }}</a></li>
  {% endfor %}
</ul>