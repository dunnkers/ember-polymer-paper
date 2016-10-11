import Ember from 'ember';

let IronSelector = Ember.Component.extend({
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

IronSelector.reopenClass({
  positionalParams: [ 'items' ]
});

export default IronSelector;
