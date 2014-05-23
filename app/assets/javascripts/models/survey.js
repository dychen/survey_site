SurveySite.Models.Survey = Backbone.Model.extend({
  /*
   * Params:
   * @title (String)
   * @questions (Collection)
   */
  urlRoot: '/surveys',
  defaults: {
    title: ''
  },
});
