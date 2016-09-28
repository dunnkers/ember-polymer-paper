import Ember from 'ember';

export default Ember.Component.extend({
  snippet: Ember.computed('name', function() {
    return `${this.get('name')}.hbs`;
  }),
  templateName: Ember.computed('name', function() {
    return `snippets/${this.get('name')}`;
  })
});
