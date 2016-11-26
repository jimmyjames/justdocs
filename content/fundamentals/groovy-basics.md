---
date: 2016-11-25T10:43:41-06:00
title: Groovy Basics
menu:
  main:
    parent: fundamentals
weight: 15
---

{{< tagline >}}
SmartThings uses the Groovy programming language.
If you’ve programmed before, you can learn Groovy.
{{< /tagline >}}

## Overview

Groovy is an object-oriented programming language for the Java platform.
It is a dynamic language with features similar to those of Python, Ruby, Perl, and Smalltalk.

If you are familiar with languages like Java, C/C++, Python, Ruby, or JavaScript, you will see many similarities in Groovy.

The Groovy programming language is documented at http://www.groovy-lang.org/documentation.html.
This document will familiarize you with Groovy and its use in SmartThings, but is not a complete reference for the language.

Groovy code is compiled to byte code that is executed by the Java Virtual Machine (JVM).
We choose Groovy as the SmartThings programming language for its simplicity and flexibility, as well as the performance and stability of the JVM.

Because Groovy is compiled to byte code that runs on the JVM Java Virtual Machine (JVM), 99% of Java code is valid Groovy.
The standard Java libraries are available to Groovy programs.
Groovy extends Java in many useful ways, which we’ll learn about here.

## Installing Groovy (optional!)

{{% notice note %}}
Installing Groovy is not required for developing with SmartThings.
It can be useful for learning Groovy, however.
{{% /notice %}}

{{% notice tip %}}
The best way to get familiar with Groovy is by installing it and experimenting.
SmartThings development does not require you to have a copy of Groovy installed, since SmartThings code is executed within SmartThings infrastructure, but having a local copy of Groovy is useful for learning.
{{% /notice %}}

{{% notice warning %}}
This is a warning.

Be very careful!
{{% /notice %}}

Head over to the Groovy Documentation site and follow the Getting Started guides for downloading and installing Groovy (the rest of the Getting Started material is pretty awesome too, and definitely worth a read).

We make heavy use of the Groovy Console to test things out, and recommend you do to.

## Optional semicolons

Semicolons are optional in Groovy, and generally not used:

```groovy
def someString = "this statement has a semicolon";
def someOtherString = "this one does not"
```

## Comments

Groovy supports single-line comments:

```groovy
// this is a single line comment
// each line requires slashes
def myNum = 2  // comments can also come at the end of a statement
```

Multi-line comments are also supported:

```groovy
/* this is a comment that
   spans multiple lines.*/
def myNum = 2
```

## Objects

In Groovy, everything is an object.
Objects have methods and properties.

Methods are the things the object can do, and similar to other languages, are optionally (more on that later) invoked with parentheses `()` that may contain arguments.

```groovy
// calling method doSomething on someObject
someObject.doSomething()

// calling method doSomethingElse with one argument
someObject.doSomethingElse("a string argument")

// get the property named someProperty on someObject
someObject.someProperty
```
