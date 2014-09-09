import Google from '../services/google';
import Foursquare from '../services/foursquare';
import Instagram from '../services/instagram';

export default {
  name: 'api',
  initialize: function(container, application) {
    application.register('services:google', Google);
    application.register('services:foursquare', Foursquare);
    application.register('services:instagram', Instagram);

    application.inject('route', 'google', 'services:google');
    application.inject('route', 'foursquare', 'services:foursquare');
    application.inject('route', 'instagram', 'services:instagram');

    application.inject('component:ramblrSearch', 'google', 'services:google');
  }
};
