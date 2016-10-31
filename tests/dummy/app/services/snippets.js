import Ember from 'ember';
import getSnippets from '../utils/get-snippets';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('snippets', getSnippets());
  }
});
