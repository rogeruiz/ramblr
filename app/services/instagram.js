import Ember from 'ember';
import ajax from '../util/ajax';
import baseService from '../mixins/baseService';
import Media from '../models/media';

/*
  Instagram API Endpoints
  Documentation can be found here:
  http://instagram.com/developer/endpoints/
*/

export default Ember.Object.extend(baseService, {
  requestParams: {
    client_id: 'f3c631929eb0415f906f6f0e59b10b1b',
  },
  host: 'https://api.instagram.com',
  namespace: 'v1',

  _serializeMedia: function(response) {
    var data, i;
    var content = [];

    for (i = 0; i < response.data.length; i++) {
      data = response.data[i];
      content.push(Media.create({
        images: data.images,
        videos: data.videos || {},
        likeCount: data.likes.count,
        link: data.link,
        location: data.location
      }));
    }

    return content;
  },

  recentTags: function(tag_id) {
    var service = this;

    return ajax.getJSON({
      url: this.buildUrl({
        type: 'tags',
        id: tag_id,
        record: 'media/recent'
      })
    }).then(function(response) {
      return service._serializeMedia(response);
    });

  },

  searchTags: function(payload) {
    return ajax.getJSON({
      url: this.buildUrl({
        type: 'tags',
        record: 'search',
        data: payload
      })
    });
  }

});
