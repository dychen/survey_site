SurveySite.Views.Questions = Backbone.View.extend({
  template: JST['questions/questions_template'],
  el: '#questions',
  events: {
    'click #newquestion': 'createQuestion'
  },

  initialize : function(questions) {
    this.questions = questions;
    this.render();
  },

  render : function() {
    $(this.el).html(this.template);
    return this;
  },

  createQuestion : function(e) {
    switch(this.$('#questiontype').val()) {
    case 'multiplechoice':
      var newQuestion = new SurveySite.Models.MultipleChoiceQuestion();
      var newQuestionView = new SurveySite.Views.MultipleChoiceQuestion({ model: newQuestion });
      break;
    case 'checkbox':
      var newQuestion = new SurveySite.Models.CheckboxQuestion();
      var newQuestionView = new SurveySite.Views.CheckboxQuestion({ model: newQuestion });
      break;
    default:
      var newQuestion = new SurveySite.Models.Question();
      var newQuestionView = new SurveySite.Views.Question({ model: newQuestion });
    }
    this.questions.add(newQuestion);
    this.$('#questionslist').append(newQuestionView.el);
  },
});
