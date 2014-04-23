var QuestionView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template($('#questiontemplate').html()),
  events: {
    'click    #questiontext': 'editText',
    'blur     #edittext'    : 'showText',
    'keypress #edittext'    : 'saveText',
    'click    #delete'      : 'deleteQuestion'
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
  }

});

ENTER_KEY = 13;
