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

    function updateValue() {
      if (component.attrs.update && typeof component.attrs.update === 'function') {
        component.attrs.update(this.immediateValue);
      } else {
        component.set('value', this.immediateValue);
      }
    }

    this.$().on('value-changed', updateValue);
    this.$().on('change', updateValue);
  }
});
