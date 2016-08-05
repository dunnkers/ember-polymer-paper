import Ember from 'ember';
import layout from '../templates/components/paper-input';

export default Ember.TextField.extend({
  layout,
  tagName: 'paper-input',
  attributeBindings: ['label', 'type', 'error-message', 'invalid',
    'auto-validate', 'required', 'tabindex']
});
