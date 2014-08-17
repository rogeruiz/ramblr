import Ember from 'ember';

export default Ember.Controller.extend({
  searchValue: null,

  actions: {
    searchRamblr: function(route, value) {
      this.transitionToRoute(route, value);
    }
  }
});
