import Ember from 'ember';
const { computed } = Ember;

let IronSelector = Ember.Component.extend({
  attributeBindings: [
    'selected',
    'role',
    'attrForSelected',
    'multi'
  ],

  selectedItem: computed({
    get() {},

    set(key, value) {
      let items = this.get('items');
      let idx = -1;

      if (items) {
        idx = this.get('items').indexOf(value);
      }

      if (this.getSelectedIndex() !== idx && idx !== -1) {
        this.set('selected', idx);
      }

      return value;
    }
  }),

  getSelectedIndex() {
    let el = this.element;

    if (el) {
      return typeof el.selected === 'number' ?
                    el.selected :
                    el.indexOf(el.selectedItem);
    } else {
      return -1;
    }
  },

  didInsertElement() {
    this._super(...arguments);

    this.$().on('iron-select', () => {
      let el = this.element;
      let items = this.get('items');

      if (items) {
        this.set('selectedItem', items[this.getSelectedIndex()]);
      } else {
        this.set('selectedItem', el.selected);
      }
    });

    // initial selection
    let selectedItem = this.get('selectedItem');
    if (selectedItem) {
      let items = this.get('items');

      if (items) {
        this.element.select(selectedItem === 'number' ?
                            selectedItem :
                            items.indexOf(selectedItem));
      } else {
        this.element.select(selectedItem === 'number' ?
                            selectedItem :
                            this.element.items.indexOf(selectedItem));
      }
    }
  }
});

IronSelector.reopenClass({
  positionalParams: [ 'items' ]
});

export default IronSelector;
