SurveySite.Views.Survey = Backbone.View.extend({
  template: JST['surveys/survey_template'],
  el: '#survey',
  events: {
    'click #save': 'saveSurvey'
  },

  initialize : function() {
    this.render();
  },

  render : function() {
    $(this.el).html(this.template);
  },

  getTitle : function() {
    return this.$('#title').val().trim();
  },

  saveSurvey : function(e) {
    var title = this.getTitle();
    if (title) {
      this.model.set('title', title);
      this.model.save();
    }
  }
});
