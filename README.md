# ember-polymer-paper [![Build Status](https://travis-ci.org/dunnkers/ember-polymer-paper.svg?branch=master)](https://travis-ci.org/dunnkers/ember-polymer-paper)

Wraps [https://elements.polymer-project.org/browse?package=paper-elements](paper-elements) in Ember Components so you can use them in Ember easily! This addon uses [https://github.com/dunnkers/ember-polymer](ember-polymer) under the hood to pull in Polymer.

## Installation

```shell
ember install ember-polymer-paper
```

## Usage

First, install a paper element:

```shell
bower install PolymerElements/paper-input --save
```

Now we can use this like an ember component! Example:

```
{{paper-input update=(action (mut name)) label="Your name"}}
```

That's it! This should render something like this:

![Example](https://s30.postimg.org/b5jlpe041/Screen_Shot_2017_01_02_at_17_35_16.png)

See the demo for more examples.

## Demo

[https://dunnkers.github.io/ember-polymer-paper/](https://dunnkers.github.io/ember-polymer-paper/)

## Requirements

This addon forces Polymer to use Shadow DOM. Browsers that do not natively support Shadow DOM will be supplied with the [polyfill](https://github.com/webcomponents/webcomponentsjs). Note that this polyfill might result in slightly slower rendering.

## About

This addon was sponsored by [Fabriquartz](http://www.fabriquartz.com/), a startup
based in The Netherlands.
