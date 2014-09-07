import Ember from 'ember';
import ajax from '../util/ajax';
import url from '../mixins/url';

export default Ember.Object.extend(url, {
  client_id: 'f3c631929eb0415f906f6f0e59b10b1b',
  host: 'https://api.instagram.com',
  namespace: 'v1',

  // /tags/tag-name/media/recent
  recent: function(type, id) {
    var endpoint = this.buildUrl({
      type: type,
      id: id,
      record: 'media/recent'
    });

    return ajax.getJSON({
      url: endpoint
    });

  },

  search: function(search_type, payload) {
    var endpoint = this.buildUrl({
      type: search_type,
      id: 'search',
      data: payload
    });

    return ajax(endpoint);
  }

});
