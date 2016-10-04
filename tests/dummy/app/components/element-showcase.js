import Ember from 'ember';

export default Ember.Component.extend({
  snippetFile: Ember.computed('name', function() {
    return `${this.get('name')}-snippet.hbs`;
  }),
  componentName: Ember.computed('name', function() {
    return `${this.get('name')}-snippet`;
  })
});
