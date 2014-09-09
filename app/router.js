import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RamblrEmberENV.locationType
});

Router.map(function() {
  this.resource('tag', { path: '/tag/:tagId' });
  this.resource('place', { path: '/place/:placeId' });

  this.route('404', { path: "/*path" });
});

export default Router;
