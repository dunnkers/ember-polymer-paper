import Ember from 'ember';
import layout from '../templates/components/paper-input';

export default Ember.TextField.extend({
  layout,
  tagName: 'paper-input',
  attributeBindings: [
    'aria-labelledby',
    'aria-describedby',
    // 'disabled',
    'title',
    // 'bind-value', // `=` instead of `$=`, and a binding: `{{}}`
    'invalid', // `=` instead of `$=`, and a binding: `{{}}`
    'prevent-invalid-input', // `=` instead of `$=`
    'allowed-pattern', // `=` instead of `$=`
    'validator', // `=` instead of `$=`
    // 'type',
    'pattern',
    // 'required',
    // 'autocomplete',
    // 'autofocus',
    'inputmode',
    'minlength',
    // 'maxlength',
    // 'min',
    // 'max',
    // 'step',
    // 'name',
    // 'placeholder',
    // 'readonly',
    'list',
    // 'size',
    'autocapitalize',
    'autocorrect',
    // 'on-change', // `=` instead of `$=`
    // 'tabindex',
    // 'autosave',
    'results',
    // 'accept',
    // 'multiple'

    'label',
    'char-counter',
    'auto-validate',
    'error-message'
  ],

  input(event) {
    if (this.attrs.update && typeof this.attrs.update === 'function') {
      this.attrs.update(this.get('value'));
    } else {
      this.set('value', event.target.value);
    }
  }
});
