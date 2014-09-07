import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateSearchValue: function(value) {
      var application = this.controllerFor('application');
      application.set('searchValue', value);
    }
  }
});
