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

  recentTags: function(tag_id) {
    return ajax.getJSON({
      url: this.buildUrl({
        type: 'tags',
        id: tag_id,
        record: 'media/recent'
      })
    }).then(function(response) {
      return Media.serialize(response);
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
