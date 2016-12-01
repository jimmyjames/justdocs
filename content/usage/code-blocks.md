---
date: 2016-11-26T20:29:33-06:00
title: Code Blocks
tagline: <i class="fa fa-code" style="font-size:48px;margin-bottom:10px;"></i><br/>Show, don't tell. PrettyDocs features beautiful code formatting and syntax highlighting.<br/>Functionality is key too - it also allows for copying code blocks to the user's clipboard.
menu:
  main:
    parent: usage
weight: 25
prev: /usage/tagline
next: /usage/toc
---

PrettyDocs uses [highlight.js](https://highlightjs.org/) and Markdown [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) to show code examples.

## Usage

Simple surround code blocks with three back-ticks, followed by the (optional) language:

<pre>
```javascript
  $(document).ready(functin() {
    console.log('Ready!');
  });
```
</pre>

Renders as:

```javascript
  $(document).ready(functin() {
    console.log('Ready!');
  });
```

## Copy code blocks

{{% callout info %}}
Coming Soon.
{{% /callout %}}

## Supported languages

PrettyDocs includes all of the standard languages supported by highlight.js, as well as Groovy, Go, and YAML.

If you need additional languages, simply [configure and download](https://highlightjs.org/download/) a custom version, and replace the `themes/hugo-pretty-docs/static/js/highlight.pack.js` file with your downloaded version.
