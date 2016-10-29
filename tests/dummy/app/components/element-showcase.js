import Ember from 'ember';
import snippets from 'dummy/snippets';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

     this.set('snippets', Object.keys(snippets).map((filename) => {
      let snippetName = filename.replace('.hbs', '');
      let name = snippetName.replace('-snippet', '');

      return {
        snippetName,
        filename,
        name
      };
    }));
  }
});
