class Post < ApplicationRecord
  belongs_to :member
  
  validates :title, :body, presence: true, length: { minimum: 5 }
  validates :title, length: { maximum: 30 }
end
