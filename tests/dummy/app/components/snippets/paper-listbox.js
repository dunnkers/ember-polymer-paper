import Ember from 'ember';

export default Ember.Component.extend({
  // BEGIN-SNIPPET block-usage
  items: [ 'Dog', 'Cat', 'Elephant', 'Giraffe' ],
  blockSelected: 'Cat',
  // END-SNIPPET
  // BEGIN-SNIPPET just-index
  selectedAnimal: 2
  // END-SNIPPET
});
