import Ember from 'ember';
import ajax from '../util/ajax';


export default Ember.Object.extend({
  client_id: 'f3c631929eb0415f906f6f0e59b10b1b',
  host: 'https://api.instagram.com',
  namespace: 'v1',

  buildUrl: function(payload) {
    var url = [
      this.host,
      this.namespace
    ];

    url.push(payload.type);
    url.push(payload.id);
    if (payload.record) {
      url.push(payload.record);
    }

    url = url.join('/');

    return this.buildParams(url, payload);
  },

  buildParams: function(url, payload) {

    var data = {
      client_id: this.client_id
    };

    if (payload.data) {
      Ember.$.extend(data, payload.data);
    }

    return url += '?' + Ember.$.param(data);

  },

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
