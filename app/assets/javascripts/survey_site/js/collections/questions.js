var Questions = Backbone.Collection.extend({
  model: Question,
  localStorage: new Backbone.LocalStorage('questions')
});
