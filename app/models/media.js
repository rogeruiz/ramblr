import Ember from 'ember';

var Model = Ember.Object.extend({
  likeCount: 0,
  images: {},
  videos: {},
  link: '',
  location: {}
});

export default Model;
