import Ember from 'ember';
import Media from '../models/media';

export default Ember.Route.extend({
  model: function(params) {
    var application = this.controllerFor('application');
    application.set('searchValue', '#' + params.tag_id);
    return this.instagram.recent('tags', params.tag_id);
  },
  setupController: function(controller, model) {
    var data, i;
    var content = [];
    for (i = 0; i < model.data.length; i++) {
      data = model.data[i];
      content.push(Media.create({
        images: data.images,
        videos: data.videos || {},
        likeCount: data.likes.count,
        link: data.link
      }));
    }
    controller.set('content', content);
  }
});
