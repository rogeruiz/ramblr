import Ember from 'ember';

export default Ember.Object.create({
  init: function() {},

  getJSON: function(payload) {

    var data = {};

    if ('object' === typeof payload.data) {
      data = payload.data;
    }

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: payload.url,
        data: data,
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        success: function(response) {
          Ember.run(null, resolve, response);
        },
        error: function(response) {
          Ember.run(null, reject, response);
        }
      });
    });
  }

});
