import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition/*, queryParams*/) {
    var tagId = params.tagId;
    transition.send('updateSearchValue', '#' + tagId);
    return this.instagram.recentTags(tagId);
  }
});
