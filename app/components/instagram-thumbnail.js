import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'target'],
  className: ['instagram-thumbnail'],
  classNameBindings: ['isActive:show-like-count'],

  href: function() {
    return this.get('content.link');
  }.property(),
  target: '_blank',
  isActive: false,

  mouseEnter: function() {
    this.set('isActive', true);
  },
  mouseLeave: function() {
    this.set('isActive', false);
  }

});
