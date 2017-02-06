---
date: 2016-11-26T08:51:08-06:00
title: JustDocs
tagline: Making beautiful docs easy, and free.
weight: 5
next: /getting-started/index
---

## Overview

JustDocs is a Hugo theme for online software documentaiton.
It is free, open-source, simple, responsive, and customizable.

## Simple layout

JustDocs is content-first.

It uses a simple layout that allows for easy navigation and discoverability.
An optional Table of Contents on the right of the page shows readers where they currently are, and to easily navigate within a page.

## Responsive

Developers read docs on their mobile devices, not just their oversized monitors.
JustDocs is built with mobile-first in mind.

## Beautiful code blocks

{{% tabs %}}
{{% tab JavaScript %}}
```javascript
var count = [1, 2, 3, 4, 5];
for (i = 0; i < count.length; i++) {
    console.log("The number is " + count[i]);
}
```
{{% /tab %}}
{{% tab Python %}}
```python
count = [1, 2, 3, 4, 5]
for number in count:
    print "The number is %d" % number
```
{{% /tab %}}
{{% tab Groovy %}}
```groovy
[1, 2, 3, 4, 5].each { ->
    println "The number is $it"
}
```
{{% /tab %}}
{{% /tabs %}}

Developer documentation needs to show more than it tells.
Code examples are key to good docs, and JustDocs features beautiful syntax highlighting with [highlight.js](https://highlightjs.org/), a [tabbed code blocks shortcode](/usage/code-blocks), and the ability to copy code blocks to the clipboard.

## Tagline

Adding a tagline to your document allows readers to quickly see what they will learn in the document, and why they should care.

Taglines can be added to any page by specifying it in the front matter:

```yaml
title: Tagline
tagline: <strong>Call to Action.</strong><br/><br/>Every page features an optional Call to Action to give readers a brief summary of what they will learn, and why they should care.
```

## Callouts

{{% callout info %}}
This is some information you should know!
{{% /callout %}}

Bring attention to certain information by using the [custom callout shortcode](/usage/callouts).

## Simple technologies

JustDocs is a simple theme composed of HTML, JavaScript, and CSS.
Bootstrap is used for some basic grid layout and other features.

You can customize these resources as you see fit, without having to learn any new frameworks - if you know HTML/CSS/JavaScript, you can customize this theme.

## Next steps

Why not install theme and start writing?
Click the "Next" button below.
