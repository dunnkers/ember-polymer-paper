import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vaadin-combo-box', 'Integration | Component | vaadin combo box', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vaadin-combo-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vaadin-combo-box}}
      template block text
    {{/vaadin-combo-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
