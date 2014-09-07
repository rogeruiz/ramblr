import Ember from 'ember';

export default Ember.Mixin.create({
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

  }
});
