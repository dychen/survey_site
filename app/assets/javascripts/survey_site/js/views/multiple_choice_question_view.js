var MultipleChoiceQuestionView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template($('#mcquestiontemplate').html()),
  events: {
    'click    #questiontext': 'editText',
    'blur     #edittext'    : 'showText',
    'keypress #edittext'    : 'saveText',
    'click    #delete'      : 'deleteQuestion',
    'click    #addchoice'   : 'addAnswerChoice'
  },

  initialize : function() {
    this.collection = new AnswerChoices();
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.deleteView);
    this.choiceViews = [];
    this.render();
    this.showText();
  },

  render : function() {
    $(this.el).html(this.template(this.model.toJSON()));
    this.renderAnswerChoices();
    return this;
  },

  renderAnswerChoices : function() {
    var that = this;
    this.collection.each(function(choice) {
      that.addAnswerChoiceView(choice);
    });
  },

  showText : function() {
    this.$('#questiontext').show();
    this.$('#edittext').hide();
  },

  editText : function() {
    this.$('#questiontext').hide();
    this.$('#edittext').show().focus();
  },

  saveText : function(e) {
    if (e.which === ENTER_KEY) {
      var text = this.getInputText();
      if (text) {
        this.model.set('text', text);
      }
      this.showText();
    }
  },

  getInputText : function() {
    return this.$('#edittext').val().trim();
  },

  deleteQuestion : function() {
    this.model.destroy();
  },

  deleteView : function() {
    $(this.el).remove();
  },

  addAnswerChoice : function() {
    var newAnswerChoice = new AnswerChoice();
    this.addAnswerChoiceView(newAnswerChoice);
    this.collection.add(newAnswerChoice);
  },

  addAnswerChoiceView : function(model) {
    var newAnswerChoiceView = new AnswerChoiceView({ model: model });
    this.$('#choices').append(newAnswerChoiceView.el);
  }

});

ENTER_KEY = 13;
