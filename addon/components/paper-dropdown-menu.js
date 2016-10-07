import Ember from 'ember';
import layout from '../templates/components/paper-dropdown-menu';

export default Ember.Component.extend({
  layout,
  tagName: 'paper-dropdown-menu',
  attributeBindings: [
    'label',
    'value',
    'selected'
  ],

  didRender() {
    let component = this;

    this.$().on('iron-select', function() {
      component.set('selectedItem', this.value);
    });
  }
});
