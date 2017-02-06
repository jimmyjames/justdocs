---
date: 2016-11-25T08:54:46-06:00
title: Getting Started
tagline: Start writing with JustDocs.
next: /usage/organization
prev: /home/
weight: 7
---

## Install Hugo

If you haven't yet, install Hugo and become familiar with it by following [these instructions](https://gohugo.io/overview/introduction/).

Hugo is simple, fast, and well-documented.
Take some time to learn about its features and how it works.

## Create a new site

Create a new Hugo site for your project:

```bash
hugo new site name-of-your-site
```

Change directories to the new site:

```bash
cd name-of-your-site
```

## Install the JustDocs theme

Clone the GitHub JustDocs theme repository:

```bash
cd themes
git clone https://github.com/jimmyjames/hugo-just-docs-theme.git
```

Next, edit the `config.toml` at the site's root directory to use the theme.
You may wish to specify a metadata format of `yaml`, as the example pages and documentation will use this format (you are free to use the `toml` format, but the examples will have to be modified accordingly).

```toml
theme = "hugo-just-docs-theme"
MetaDataFormat = "yaml"
```

## Create a new document

Let's add our first page to our docs:

```bash
hugo new home/index.md
```

## Add page to menu

Open `config.toml` and add the following:

```toml
[params]
    # supported values: "monokai", "github"
    codeTheme = "monokai"

[[menu.main]]
    name = "Docs Home"
    identifier = "docs home"
    pre = "<i class='fa fa-home'></i>"
    url = "/home"
    weight = -220
```

## Add some content

Open `home/index.md` in your editor, and paste in the following:

```md
---
title: My Title
tagline: This is a tagline, where you can provide summary/intro text for your readers.
weight: 5
---

## Step 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum tellus et lacus egestas, at rutrum justo tincidunt. Donec facilisis enim purus, sit amet mattis mauris sollicitudin non. Nulla id tellus id erat viverra semper. Nulla mollis neque quis lacus viverra, ac posuere mi dictum. Aenean in tellus scelerisque, varius nunc efficitur, commodo velit. Nulla enim dui, vehicula eu ipsum eget, ultrices tincidunt nunc. Curabitur eu nulla et augue cursus luctus. Maecenas finibus dui lobortis laoreet euismod. Praesent nulla leo, dignissim imperdiet dapibus lacinia, auctor sed enim. Aenean in cursus dolor. Fusce ut odio id augue facilisis volutpat. Ut tincidunt metus vel enim auctor, lobortis interdum ligula fermentum.

## Step 2

Suspendisse dapibus magna sem, porta porttitor nibh mollis vitae. Etiam convallis tellus purus, sit amet ornare massa tempus vel. Nunc et leo in nisi aliquet pulvinar. Quisque ultricies at libero eu varius. Suspendisse tempor scelerisque libero eget facilisis. Mauris cursus tortor in arcu bibendum vestibulum. Aenean egestas libero non erat tristique, quis sodales sapien commodo. Suspendisse commodo tellus vitae tellus lacinia varius. Nullam semper orci quis ligula condimentum volutpat. Pellentesque malesuada lectus consequat sapien tristique, nec congue ligula vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi.

## Step 3

Maecenas vel sodales purus. Etiam finibus in purus et mattis. Aliquam eget ornare ex. Donec tempor orci nec ex gravida mattis. Donec tincidunt blandit ante congue euismod. Cras imperdiet nulla vel nisi condimentum, sed imperdiet justo aliquet. Suspendisse potenti. Mauris scelerisque enim ut felis dictum euismod. Morbi elementum nibh ex, quis iaculis arcu lobortis ut. Duis sapien neque, bibendum ac leo ut, dictum pharetra diam. Duis sed finibus neque, quis semper metus. Donec vel enim sit amet ex pretium finibus ac at velit. Proin aliquam ex sit amet risus consequat viverra. Mauris sodales enim nec urna egestas, a congue odio egestas.

## Step 4

Morbi aliquet, erat eget sollicitudin mollis, nisl turpis porta urna, eget viverra lectus quam id justo. Duis nisi metus, fermentum nec venenatis a, congue a eros. Vivamus euismod sem ac egestas malesuada. Proin interdum nunc at vulputate tempus. Nunc egestas volutpat ante vitae auctor. Nullam in velit tincidunt, dapibus ipsum finibus, consequat sapien. Ut eget elit egestas, vehicula urna vitae, rutrum turpis. Phasellus finibus sit amet velit quis euismod. Quisque sagittis finibus finibus. In convallis mauris non rutrum placerat. Ut venenatis maximus aliquet. Donec sodales, lorem id pharetra luctus, erat ipsum vulputate urna, vel lacinia erat purus vitae mi. Ut vel justo eget elit lobortis fringilla. Vestibulum tincidunt et ex eu condimentum. Nunc volutpat lorem sollicitudin ipsum consequat, quis fringilla elit congue.

## Step 5

Cras quam orci, consectetur nec mi sed, consequat egestas elit. Aliquam id turpis massa. In efficitur elit felis, id tristique tellus finibus vel. Morbi mollis ullamcorper condimentum. Proin porta nibh non mi hendrerit sodales. Praesent neque nulla, tempus quis interdum ac, dictum vitae ligula. Nulla at facilisis arcu. Integer vitae tempus sem. Aliquam ut viverra nisl. Mauris malesuada ipsum eget ligula lacinia, quis convallis lacus commodo. In id cursus elit, non rhoncus justo.

```

{{% callout info %}}
Hugo supports content written in Markdown, Asciidoc, and reStructuredText.

Some features, such as the Table of Contents, do not currently work with non-Markdown formats.

For the most support and features, it's recommended you use Markdown to write your content.
{{% /callout %}}

## Preview the site

In the console, start hugo:

```bash
hugo server
```

By default, a server will be started on port 1313.
Open your browser to `http://localhost:1313`.

Hugo features live reloading, so any changes you make will be made live just by saving in your editor!

## Build and deploy

When it comes time to build and deploy your new docs site, run the [hugo command](https://gohugo.io/commands/hugo/) to generate the static content.
The content will be put in the `/public` directory:

```bash
hugo
```

The Hugo documentation contains several tutorials for deploying and hosting with [GitHub](https://gohugo.io/tutorials/github-pages-blog/), [GitLab](https://gohugo.io/tutorials/hosting-on-gitlab/), [BitBucket](https://gohugo.io/tutorials/hosting-on-bitbucket/) [rsync](https://gohugo.io/tutorials/deployment-with-rsync/), etc.
Check them out under the "Tutorials" section in the docs.
