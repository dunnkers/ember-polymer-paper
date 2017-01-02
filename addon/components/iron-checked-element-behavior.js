import Ember from 'ember';

export default Ember.Checkbox.extend({
  attributeBindings: [
    'ariaActiveAttribute',
    'toggles',
    'validator',
    'validatorType'
  ],

  change(event) {
    if (this.attrs.update && typeof this.attrs.update === 'function') {
      this.attrs.update(event.target.checked);
    } else {
      this.set('checked', event.target.checked);
    }
  }
});
