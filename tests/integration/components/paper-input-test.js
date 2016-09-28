import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-input', 'Integration | Component | paper input', {
  integration: true
});

test('bound value updates upon change', function(assert) {
  this.render(hbs`{{paper-input value=name}}`);

  assert.expect(2);

  assert.equal(this.$().text().trim(), '');
  assert.notOk(this.get('value'));
});
