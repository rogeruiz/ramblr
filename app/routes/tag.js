import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.instagram.recent('tags', params.tag_id);
  }
});
