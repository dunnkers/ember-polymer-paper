/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var path = require('path');

module.exports = function(defaults) {
  var appDir = path.join('tests', 'dummy', 'app');
  var app = new EmberAddon(defaults, {
    'ember-polymer': {
      htmlImportsFile: path.join(appDir, 'elements.html'),
      vulcanizeOptions: {
        stripExcludes: ['.*paper-styles\.html.*']
      }
    },
    'snippetPaths': [
      path.join(appDir, 'templates', 'components', 'snippets'),
      path.join(appDir, 'components', 'snippets')
    ],
    'snippetSearchPaths': [ appDir ]
  });

  app.import('bower_components/highlightjs/styles/github.css');

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
