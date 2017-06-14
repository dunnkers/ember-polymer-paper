import Ember from 'ember';

export default Ember.Component.extend({
  // BEGIN-SNIPPET items
  items: ['One', 'Two', 'Three'],
  // END-SNIPPET
  // BEGIN-SNIPPET people
  people: [
    { name: 'John', age: 21 },
    { name: 'Daniel', age: 22 },
    { name: 'Jeroen', age: 20 }
  ]
  // END-SNIPPET
});
