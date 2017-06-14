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
    get() {
      // return Ember.get(this, key);
    },

    set(key, value) {
      let idx = this.getItemIndex();

      if (this.getSelectedIndex() !== idx && idx !== -1) {
        Ember.set(this, 'selected', idx);
      }

      return value;
    }
  }),

  getItemIndex() {
    if (!!this.get('items') && !!this.get('selectedItem')) {
      return this.get('items').indexOf(this.get('selectedItem'));
    } else {
      return -1;
    }
  },

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
      let selectedItem = el.selected;

      if (items) {
        selectedItem = items[this.getSelectedIndex()];
      }

      this.set('selectedItem', selectedItem);
    });

    // initial selection
    if (!!this.get('items') && !!this.get('selectedItem')) {
      let idx = this.get('items').indexOf(this.get('selectedItem'));
      Ember.set(this, 'selected', idx);
    }
  }
});

IronSelector.reopenClass({
  positionalParams: [ 'items' ]
});

export default IronSelector;
