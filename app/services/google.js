/*globals google:true*/
import Ember from 'ember';
import ajax from '../util/ajax';
import baseService from '../mixins/baseService';

/*
  Google Maps API
  Documentation can be found here:
  https://developers.google.com/maps/documentation/javascript/
*/

export default Ember.Object.extend(baseService, {
  async: true,
  requestParams: {
    key: 'AIzaSyB65KHcrqL7tBLrTrcaoNhHS85YT_I_1yU',
    libraries: 'places',
    callback: 'mapsHelper'
  },
  host: 'https://maps.googleapis.com/maps/api/js',

  _serializeLocation: function() {

  },

  getPlaceByQuery: function(query) {
    var service = new google.maps.places.AutocompleteService();
    return new Ember.RSVP.Promise(function(resolve, reject) {
      service.getQueryPredictions({
        input: query
      }, function(response, status) {
          if ('OK' === status) {
            Ember.run(null, resolve, response);
          } else {
            Ember.run(null, reject, response);
          }
      });
    });
  },

  getPlace: function (place) {
    var service = new google.maps.places.AutocompleteService();
    return new Ember.RSVP.Promise(function(resolve, reject) {
      service.getPlacePredictions({
        input: place
      }, function(response, status) {
        if ('OK' === status) {
          Ember.run(null, resolve, response);
        } else {
          Ember.run(null, reject, response);
        }
      });
    });
  }
});
