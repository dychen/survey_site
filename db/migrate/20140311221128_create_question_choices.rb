class CreateQuestionChoices < ActiveRecord::Migration
  def change
    create_table :question_choices do |t|
      t.integer :question_id
      t.integer :choice_text
    end
  end
end
