import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RamblrEmberENV.locationType
});

Router.map(function() {
  this.resource('tag', { path: '/tag/:tag_id' });
  this.resource('place', { path: '/place/:place_id' });
});

export default Router;
