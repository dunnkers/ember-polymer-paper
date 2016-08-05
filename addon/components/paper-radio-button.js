import Ember from 'ember';
import layout from '../templates/components/paper-radio-button';

export default Ember.Checkbox.extend({
  layout,
  tagName: 'paper-radio-button',
  attributeBindings: [ 'tabindex' ]
});
