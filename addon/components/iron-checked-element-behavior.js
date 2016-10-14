import Ember from 'ember';

export default Ember.Checkbox.extend({
  attributeBindings: [
    'ariaActiveAttribute',
    'toggles',
    'validator',
    'validatorType'
  ]
});
