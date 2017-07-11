import Ember from 'ember';
const { computed, inject } = Ember;

export default Ember.Component.extend({
  snippets: inject.service(),
  tagName: 'paper-material',
  classNames: [ 'element-example' ],
  hasJS: computed(function() {
    // debugger;
    // return this.get('snippets').includes(`${this.get('name')}.js`);
    return true;
  })
});
