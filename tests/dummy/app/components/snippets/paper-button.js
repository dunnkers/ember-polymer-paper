import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  // BEGIN-SNIPPET sign-in
  actions: {
    signIn() {
      Ember.set(this, 'signedIn', true);
    }
  }
  // END-SNIPPET
});
