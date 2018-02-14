/* eslint-env node */
'use strict';
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const path = require('path');

module.exports = function(defaults) {
  var appDir = path.join('tests', 'dummy', 'app');
  var app = new EmberAddon(defaults, {
    'ember-polymer': {
      htmlImportsFile: path.join(appDir, 'elements.html'),
      bundlerOptions: {
        stripExcludes: ['.*paper-styles.html.*']
      }
    },
    // pull in these snippet to dynamically construct the page
    'snippetPaths': [
      path.join(appDir, 'templates', 'components', 'snippets'),
      path.join(appDir, 'components', 'snippets')
    ],
    // actual snippets
    'snippetSearchPaths': [ appDir ],
    'snippetRegexes': {
      begin: /{{#element-example\sname="(\S+)"/,
      end: /{{\/element-example}}/,
    },
    // inline sourcemaps for VSCode debugging
    'babel': {
      sourceMaps: 'inline'
    }
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
