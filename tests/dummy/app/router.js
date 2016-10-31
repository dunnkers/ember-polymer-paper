import Ember from 'ember';
import config from './config/environment';
import getSnippets from './utils/get-snippets';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  let snippets = getSnippets();

  snippets.forEach((snippet) => {
    this.route(snippet.name);
  });
});

export default Router;
