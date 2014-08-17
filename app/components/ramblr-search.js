import Ember from 'ember';

export default Ember.Component.extend({
  value: null,
  isTag: null,

  getValue: function() {
    var value = this.get('value');

    if ('#' === value[0]) {
      this.set('isTag', true);
      return value.replace(/#/g, '');
    } else {
      this.set('isTag', false);
      return value;
    }
  }.observes('value'),

  actions: {
    submit: function() {
      var route = this.get('isTag') ? 'tag' : 'place';
      var value = this.getValue().toLowerCase();
      this.sendAction('search', route, value);
    }
  }
});
