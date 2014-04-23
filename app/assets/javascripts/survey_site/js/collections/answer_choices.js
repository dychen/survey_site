var AnswerChoices = Backbone.Collection.extend({
  model: AnswerChoice,
  localStorage: new Backbone.LocalStorage('questionchoices')
});
