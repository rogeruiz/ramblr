import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ramblr-search', 'js-search'],

  value: null,
  isTag: null,
  showResults: false,

  suggestedPlaces: function() {
    return [];
  }.property(),

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

  autocomplete: function() {
    var component = this;
    if (this.get('value').length >= 3 && !this.get('isTag')) {
      var value = this.getValue().toLowerCase();

      if (/.*near\.*/ig.test(value)) {
        component.google.getPlaceByQuery(value).then(function(response) {
          component.set('suggestedPlaces', response);
        });
      } else {
        component.google.getPlace(value).then(function(response) {
          component.set('suggestedPlaces', response);
        });
      }

    } else {
      component.set('suggestedPlaces', []);
    }
  }.observes('value', 'isTag'),

  actions: {
    showResults: function() {
      this.set('showResults', true);
    },
    hideResults: function() {
      this.set('showResults', false);
    },
    submit: function() {
      var route = this.get('isTag') ? 'tag' : 'place';
      var value = this.getValue().toLowerCase();
      this.sendAction('search', route, value);
      this.$('input').blur();
    }
  }
});
