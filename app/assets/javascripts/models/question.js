SurveySite.Models.Question = Backbone.Model.extend({
  urlRoot: '/things',
  defaults: {
    text: 'Enter text',
    required: false
  }
});

