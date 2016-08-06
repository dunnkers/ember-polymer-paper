# ember-polymer-paper [![Build Status](https://travis-ci.org/dunnkers/ember-polymer-paper.svg?branch=master)](https://travis-ci.org/dunnkers/ember-polymer-paper)

Wraps paper-elements in Ember components so you can use them in Ember easily!

## Requirements

This addon relies on Shadow DOM. If a browser does not have Shadow DOM natively,
it will be polyfilled.

## Installation

`ember install ember-polymer-paper`

## Usage

This addon inject components with names of the paper-elements into your
application. This means you can just use any of the paper elements using
doubles curlies, where attributes can bind to an ember object.

```html
{{paper-input value=name}}
```

That's it! Good luck using epic paper elements!

## Demo

[https://dunnkers.github.io/ember-polymer-paper/](https://dunnkers.github.io/ember-polymer-paper/)

## Configuration

The addon can be configured in the `config/environment.js` file as such:

```js
ENV['ember-polymer-paper'] = {
  option: 'value'
}
```

**ElementsToImport**

Determines which paper-elements should be imported and have ember components be
injected into your application. Defaults to import no elements.

You can import an elements as such:

```js
  ElementsToImport: {
    'paper-button': true
  }
```

## About

This addon was sponsored by [Fabriquartz](http://www.fabriquartz.com/), a startup
based in The Netherlands.
