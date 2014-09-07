import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.instagram.recentTags(params.tag_id);
  },
  afterModel: function(model, transition, queryParams) {
    transition.send('updateSearchValue', '#' + transition.params.tag.tag_id);
  }
});
