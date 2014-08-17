import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  searchValue: Ember.computed.alias('controllers.application.searchValue')
});
