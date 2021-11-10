class Post < ApplicationRecord
  belongs_to :member
  
  validates :title, :body, presence: true, length: { minimum: 5 }
end
