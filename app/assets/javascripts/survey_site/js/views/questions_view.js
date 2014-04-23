var QuestionsView = Backbone.View.extend({
  el: '#questions',
  events: {
    'click #newquestion': 'createQuestion'
  },

  initialize : function() {
    this.questions = new Questions();
  },

  createQuestion : function(e) {
    switch(this.$('#questiontype').val()) {
    case 'multiplechoice':
      var newQuestion = new MultipleChoiceQuestion();
      var newQuestionView = new MultipleChoiceQuestionView({ model: newQuestion });
      break;
    case 'checkbox':
      var newQuestion = new CheckboxQuestion();
      var newQuestionView = new CheckboxQuestionView({ model: newQuestion });
      break;
    default:
      var newQuestion = new Question();
      var newQuestionView = new QuestionView({ model: newQuestion });
    }
    this.questions.add(newQuestion);
    this.$('#questionslist').append(newQuestionView.el);
  },
});

ENTER_KEY = 13;
var questionsView = new QuestionsView();
