---
title: Other Niceties
tagline: Hugo offers several other nice features to make writing docs easy.<br/>Embedding videos, images, or gists are trivial.
menu:
  main:
    parent: usage
weight: 40
prev: /usage/callouts
---

## Google analytics

Simply add your analytics tracking number to `config.toml`:

```toml
googleAnalytics = "UA-XXXXXXXX-X"
```

## Shortcodes

Hugo supports a powerful feature called Shortcodes, which allow for adding content that is not simple Markdown text.

Check out the [documentation](https://gohugo.io/extras/shortcodes/), and expirement with embedding videos, twitter feeds, images and figures, GitHub gists, etc.

Even better, Hugo makes adding your own shortcodes easy - it's just HTML/CSS/JavaScript.
This theme uses custom Shortcodes for the tabbed code blocks, tagline, and callouts.
