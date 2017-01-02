import Ember from 'ember';

export default Ember.Component.extend({
  // BEGIN-SNIPPET block-usage
  items: [ 'Dog', 'Cat', 'Elephant', 'Giraffe' ],
  blockSelected: 'Cat',
  // END-SNIPPET block-usage

  selectedAnimal: 2
});
