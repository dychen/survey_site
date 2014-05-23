window.SurveySite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    ENTER_KEY = 13;
    var questions = new SurveySite.Collections.Questions();
    var survey = new SurveySite.Models.Survey({ questions: questions });
    var surveyView = new SurveySite.Views.Survey({ model: survey });
    var questionsView = new SurveySite.Views.Questions(questions);
    Backbone.history.start();
  }
};


