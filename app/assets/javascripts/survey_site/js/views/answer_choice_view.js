var AnswerChoiceView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#answerchoicetemplate').html()),
  events: {
    'click    #answerchoicetext': 'editText',
    'blur     #edittext'        : 'showText',
    'keypress #edittext'        : 'saveText'
  },

  initialize : function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.deleteView);
    this.render();
    this.showText();
  },

  render : function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },

  showText : function() {
    this.$('#answerchoicetext').show();
    this.$('#edittext').hide();
  },

  editText : function() {
    this.$('#answerchoicetext').hide();
    this.$('#edittext').show().focus();
  },

  saveText : function(e) {
    if (e.which === ENTER_KEY) {
      var text = this.getInputText();
      if (text) {
        this.model.set('text', text);
      }
      else {
        this.deleteAnswerChoice();
      }
      this.showText();
    }
  },

  getInputText : function() {
    return this.$('#edittext').val().trim();
  },

  deleteAnswerChoice : function() {
    this.model.destroy();
  },

  deleteView : function() {
    $(this.el).remove();
  }
});

ENTER_KEY = 13;
