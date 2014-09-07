import Ember from 'ember';
import ajax from '../util/ajax';
import baseService from '../mixins/baseService';

/*
  Foursquare API Endpoints
  Documentation can be found here:
  https://developer.foursquare.com/docs/
*/

export default Ember.Object.extend(baseService, {
  requestParams: {
    client_id: 'AIKTAD1H1425S1VAOAGWNHIZ4HX0QN1NTCMNMGABSKMUGHBH'
  },
  host: 'https://api.foursquare.com',
  namespace: 'v2',

  searchVenues: function() {

  }
});
