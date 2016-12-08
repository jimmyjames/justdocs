---
date: 2016-11-26T20:29:33-06:00
title: Code Blocks
tagline: <i class="fa fa-code" style="font-size:48px;margin-bottom:10px;"></i><br/>Show, don't tell. PrettyDocs features beautiful code formatting and syntax highlighting.<br/>It also supports tabbed code blocks for showing tasks in different langauges.
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
  $(document).ready(function() {
    console.log('Ready!');
  });
```
</pre>

Renders as:

```javascript
  $(document).ready(function() {
    console.log('Ready!');
  });
```

## Supported languages

PrettyDocs includes all of the standard languages supported by highlight.js, as well as Groovy, Go, and YAML.

If you need additional languages, simply [configure and download](https://highlightjs.org/download/) a custom version, and replace the `themes/hugo-pretty-docs/static/js/highlight.pack.js` file with your downloaded version.

## Tabbed code blocks

You can create tabs for code blocks by using the ``tabs`` and nested `tab` shortcodes.
These are useful for showing code examples in multiple languages.

Here's an example showing how to iterate over an array in different languages:

{{% tabs %}}

{{% tab "JavaScript" %}}
```javascript
var items = [1, 2, 3, 4, 5]
items.forEach(function(item) {
  console.log('item: ' + item);
})
```
{{% /tab %}}

{{% tab "Ruby" %}}
```ruby
array = [1, 2, 3, 4, 5, 6]
array.each {
  |x| puts x
}
```  
{{% /tab %}}

{{% tab "Groovy" %}}
```groovy
def items = [1, 2, 3, 4, 5]
items.each {item ->
  println "item is $item"
}
println "extra line"
```
{{% /tab %}}

{{% /tabs %}}

To use, simply use the `tabs` shortcode with nested `tabs`.
Note that each tab should specify a title for the tab.

```go
{{%/* tabs */%}}
{{%/* tab "Groovy" */%}}
 standard fenced code block here
{{%/* /tab */%}}

{{%/* tab "JavaScript" */%}}
 standard fenced code block here
{{%/* /tab */%}}

{{%/* tab "Ruby" */%}}
 standard fenced code block here
{{%/* /tab */%}}

{{%/* /tabs */%}}
```

{{% tabs %}}
{{% tab "Tab 1" %}}
```groovy
println 'hi'
```
{{% /tab %}}
{{% tab "Tab 2"%}}
```
1
2
3
4
5
6
7
8
9
10
```
{{% /tab %}}
{{% /tabs %}}
## Copy code blocks

{{% callout info %}}
Coming Soon.
{{% /callout %}}
