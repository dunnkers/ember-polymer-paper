import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import getSnippets from './utils/get-snippets';

const Router = EmberRouter.extend({
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
