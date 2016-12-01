---
date: 2016-11-26T20:29:18-06:00
title: Tagline
tagline: <strong>Call to Action.</strong><br/><br/>Every page features an optional Call to Action to give readers a brief summary of what they will learn, and why they should care.
menu:
  main:
    parent: usage
weight: 20
notoc: true
prev: /usage/organization
next: /usage/code-blocks
---

Provide an optional Call to Action for your content by specifying a `tagline` in your front matter.

## Usage

You can provide an optional `tagline` in the front matter.
This will render below the document title.
You can use HTML in the `tagline` value as well (useful for line breaks, icons, or text emphasis like `<strong>`).

Yaml example:

```yaml
title: Tagline
tagline: <strong>Call to Action.</strong><br/><br/>Every page features an optional Call to Action to give readers a brief summary of what they will learn, and why they should care.
menu:
  main:
    parent: content
weight: 20
```
