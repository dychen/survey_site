class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :survey_id
      t.text    :text
      t.string  :type
      t.boolean :required, default: false
    end
  end
end
