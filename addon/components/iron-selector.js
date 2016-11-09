import Ember from 'ember';
const { computed } = Ember;

let IronSelector = Ember.Component.extend({
  attributeBindings: [
    'selected',
    'role'
  ],

  selectedItem: computed({
    get() {
      Ember.get(this, 'selectedItem');
    },

    set(key, value) {
      if (!!this.element) {
        this.setBoundValue(value);
      }

      return value;
    }
  }),

  setBoundValue(value) {
    let selected = this.getSelectedIndex();
    let itemIndex = this.getItemIndex(value);

    if (selected !== itemIndex) {
      this.element.selectIndex(itemIndex);
    }
  },

  getItemIndex(item) {
    // FIXME this might prevent functionality when not using items positional.
    return this.get('items').indexOf(item);
  },

  getSelectedIndex() {
    let el = this.element;

    if (!!el) {
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
      let selectedItem = el.selected;

      if (items) {
        selectedItem = items[this.getSelectedIndex()];
      }

      this.set('selectedItem', selectedItem);
    });

    if (!!this.get('selectedItem')) {
      this.setBoundValue(this.get('selectedItem'));
    }
  }
});

IronSelector.reopenClass({
  positionalParams: [ 'items' ]
});

export default IronSelector;
