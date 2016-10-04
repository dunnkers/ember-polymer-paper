import Ember from 'ember';
import layout from '../templates/components/paper-slider';

export default Ember.Component.extend({
  layout,
  tagName: 'paper-slider',
  attributeBindings: [
    'min',
    'max',
    'value',
    'editable'
  ],

  didRender() {
    let component = this;

    this.$().on('value-changed', function() {
      component.set('value', this.immediateValue);
    });
    this.$().on('change', function() {
      component.set('value', this.value);
    });
  }
});
