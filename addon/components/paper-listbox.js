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
      let selectedItem = this.selected;

      if (items) {
        selectedItem = typeof this.selected === "number" ?
          items[this.selected] : items[this.indexOf(this.selectedItem)];
      }
      
      component.set('selectedItem', selectedItem);
    });
  }
});

PaperListbox.reopenClass({
  positionalParams: [ 'items' ]
});

export default PaperListbox;
