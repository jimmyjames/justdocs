---
date: 2016-11-26T20:29:18-06:00
title: Callouts
tagline: <i class="fa fa-info" style="font-size:48px;padding:10px 30px;"></i><i class="fa fa-lightbulb-o" style="font-size:48px;padding:10px 30px;"></i><i class="fa fa-warning" style="font-size:48px;padding:10px 30px;"></i></br>Bring attention to important information using JustDocs callouts.
menu:
  main:
    parent: usage
weight: 35
prev: /usage/toc
next: /contributing/index
---

Bring attention to important information in your docs by using one of JustDocs built-in [shortcodes](https://gohugo.io/extras/shortcodes/).

## Info

Use the Info callout to call attention to some important information.

```go
{{%/* callout info */%}}
This is some important information.
{{%/* /callout */%}}
```

The above renders as:

{{% callout info %}}
This is some important information.
{{% /callout %}}

## Tip

Use the Tip callout to notify the reader about some good-to-know information.

```go
{{%/* callout tip */%}}
This is some good-to-know, but maybe not critical information.
{{%/* /callout */%}}
```

The above renders as:

{{% callout tip %}}
This is some good-to-know, but maybe not critical information.
{{% /callout %}}


## Warning

Use the Warning callout to let the reader know that if they do (or don't do) something, something bad will probably happen.

```go
{{%/* callout warning */%}}
This is a warning.

Something bad will probably happen if you do this.
{{%/* /callout */%}}
```

The above renders as:

{{% callout warning %}}
This is a warning.

Something bad will probably happen if you do this.
{{% /callout %}}
