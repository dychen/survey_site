class QuestionChoice < ActiveRecord::Base
  belongs_to :question

  validates :question_id, presence: true
  validates :choice_text, presence: true
end
