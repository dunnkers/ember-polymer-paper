import Ember from 'ember';
import layout from '../templates/components/paper-listbox';

let PaperListbox = Ember.Component.extend({
  layout,
  tagName: 'paper-listbox',
  attributeBindings: [
    'selected',
    'role'
  ],

  didRender() {
    let component = this;

    this.$().on('iron-select', function() {
      let items = component.get('items');
      let selectedItem = items ? items[this.selected] : this.selected;
      component.set('selectedItem', selectedItem);
    });
  }
});

PaperListbox.reopenClass({
  positionalParams: [ 'items' ]
});

export default PaperListbox;
