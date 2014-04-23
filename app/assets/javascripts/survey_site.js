window.SurveySite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    ENTER_KEY = 13;
    var questionsView = new SurveySite.Views.Questions();
    var questionsRouter = new SurveySite.Routers.Questions();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SurveySite.initialize();
});
