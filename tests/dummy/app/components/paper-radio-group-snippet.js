import Ember from 'ember';

export default Ember.Component.extend({
  items: ['One', 'Two', 'Three'],
  people: [
    { name: 'John', age: 21 },
    { name: 'Daniel', age: 22 },
    { name: 'Jeroen', age: 20 }
  ]
});
