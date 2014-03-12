class Survey < ActiveRecord::Base
  belongs_to :user
  has_many :questions, dependent: :destroy

  validates :user_id, presence: true
  validates :title, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
end
