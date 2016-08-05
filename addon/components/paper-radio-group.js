import Ember from 'ember';
import layout from '../templates/components/paper-radio-group';

const paperRadioGroupComponent = Ember.Component.extend({
  layout,
  tagName: 'paper-radio-group',

  didRender() {
    let component = this;

    // initially select predefined item
    this.$().on('iron-items-changed', function() {

    });

    // update selected variable upon a selection
    this.$().on('iron-select', function() {
      component.set('selected', this.selected);
    });
  }
});

export default paperRadioGroupComponent;
