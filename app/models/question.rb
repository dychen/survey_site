class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :question_choices, dependent: :destroy

  TYPE_OPTIONS = %w(multichoice, checkbox, text)

  validates :survey_id, presence: true
  validates :text, presence: true
  validates :type, presence: true, inclusion: { in: TYPE_OPTIONS }
end