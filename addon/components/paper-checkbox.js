import Ember from 'ember';
import layout from '../templates/components/paper-checkbox';

export default Ember.Checkbox.extend({
  layout,
  tagName: 'paper-checkbox',
  attributeBindings: [ 'tabindex' ]
});
