import Ember from 'ember';

var Model = Ember.Object.extend({
  likeCount: 0,
  images: {},
  videos: {},
  link: '',
  location: {}
});

Model.reopenClass({
  /*
    Serialize the Instagram Media response
  */
  serialize: function(media) {
    var data;
    var content = [];
    var _i = 0;
    var _len = media.data.length;

    for (_i; _i < _len; _i++) {
      data = media.data[_i];
      content.push(Model.create({
        images: data.images,
        videos: data.videos || {},
        likeCount: data.likes.count,
        link: data.link,
        location: data.location
      }));
    }

    return content;
  }
});

export default Model;
