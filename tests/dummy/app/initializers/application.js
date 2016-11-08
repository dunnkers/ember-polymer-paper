import Ember from 'ember';
const { Controller, Service } = Ember;
import getSnippets from '../utils/get-snippets';
import elementPage from '../templates/element-page';

export default {
  name: 'register-elements',

  initialize(app) {
    let hasTemplate = (snippet) => app.hasRegistration(
      `template:components/snippets/${snippet.component}`
    );

    let snippets = getSnippets().filter(hasTemplate);
    snippets.forEach((snippet) => {
      app.register(`template:${snippet.name}`, elementPage);
      app.register(`controller:${snippet.name}`, Controller.extend({
        snippet
      }));
    });

    app.register('service:snippets', Service.extend({
      snippets
    }));
  }
};
