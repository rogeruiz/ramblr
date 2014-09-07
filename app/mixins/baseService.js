import Ember from 'ember';

export default Ember.Mixin.create({
  buildUrl: function(payload) {
    var url = [];

    url.push(this.host);
    if (this.namespace) {
      url.push(this.namespace);
    }

    if (payload) {
      url.push(payload.type);
      if (payload.id) {
        url.push(payload.id);
      }
      url.push(payload.record);
    }

    url = url.join('/');

    return this.buildParams(url, payload);
  },

  buildParams: function(url, payload) {
    var data = Ember.$.extend({}, this.requestParams || {});

    if (payload && payload.data) {
      Ember.$.extend(data, payload.data);
    }

    return url += '?' + Ember.$.param(data);
  },

  injectScript: function() {
    if (this.async) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.buildUrl();
      document.body.appendChild(script);
    }
  }.on('init')
});
