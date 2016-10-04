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

    'label'
  ],

  input() {
    let newValue = document.querySelector('#' + this.elementId).value;
    this.set('value', newValue);
  }
});
