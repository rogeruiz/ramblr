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
    key: 'AIzaSyB65KHcrqL7tBLrTrcaoNhHS85YT_I_1yU'
  },
  host: 'https://maps.googleapis.com/maps/api/js',

});
