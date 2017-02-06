---
date: 2016-11-25T10:43:41-06:00
title: Organization
tagline: Use Hugo's menu feature to build a flexible main docs site navigation.
menu:
  main:
    parent: usage
weight: 15
prev: /getting-started
next: /usage/tagline
---

## Layout

Content is created in the `/content` directory (shocking, right?).
A typical content layout would look like this:

```
  .
  └─ content
      └─ getting-started
      |   └─ index.md          // <- http://yoursite.com/getting-started/
      ├─ usage
      |   ├─ organization.md   // <- http://yoursite.com/usage/organization/
      |   ├─ tagline.md        // <- http://yoursite.com/usage/tagline
```

You can create content using the `hugo new <directory>/<file>` command, or just by creating the directories and files maually.

## Menus

There are two different ways to get your content to appear in the left navigation menu, depending on if the document will be a standalone page, or be contained within a top-level navigation category.

### Standalone page

For a standalone page, all you need to do is add an entry to `config.toml` like this:

```toml
[[menu.main]]
    name = "Docs Home"
    identifier = "docs home"
    pre = "<i class='fa fa-home'></i>"
    url = "/home"
    weight = -220
```

Note that the `pre` is used to (optionally) specify a FontAwesome icon before the menu item.

The `weight` determines the order in which the item appears in the navigation.
The navigation is ordered from lowest-to-highest, top-to-bottom.

### Menu categories

For documents that you wish to group under a high level category (like "Usage" in this documentation), you need to specify the menu information both in the `config.toml`, as well as in the document's frontmatter itself.

Consider the `config.toml` entry for this page.
First, only the top-level category ("Usage" in this case) is defined in `config.toml`:

```toml
[[menu.main]]
    name = "Usage"
    identifier = "usage"
    pre = "<i class='fa fa-book'></i>"
    weight = -180
```

Next, we specify the menu the document belongs to in the frontmatter itself:

```yaml
menu:
  main:
    parent: usage
weight: 15
```

Here, the weight determines the order this document appears within the "Usage" menu.
