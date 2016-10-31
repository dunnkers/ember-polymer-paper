import Ember from 'ember';
const { Controller } = Ember;
import getSnippets from '../utils/get-snippets';
import elementPage from '../templates/components/element-page';

export default {
  name: 'register-elements',

  initialize(app) {
    let snippets = getSnippets();
    snippets.forEach((snippet) => {
      app.register(`template:${snippet.name}`, elementPage);
      app.register(`controller:${snippet.name}`, Controller.extend({
        snippet
      }));
    });
  }
};
