import Component from '@ember/component';
import layout from '../templates/components/vaadin-combo-box';

const VaadinComboBox = Component.extend({
  layout,
  tagName: 'vaadin-combo-box',
  attributeBindings: [ 'label' ],
  
  didInsertElement() {
    this._super(...arguments);

    this.$().on('change', () => {
      let el = this.element;
      this.set('selectedItem', el.selectedItem);
    });

    this.element.items = this.get('items');
  }
});

VaadinComboBox.reopenClass({
  positionalParams: ['items']
});

export default VaadinComboBox;