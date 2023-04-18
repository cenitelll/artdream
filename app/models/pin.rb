class Pin < ApplicationRecord
  validates_presence_of :description
  belongs_to :user

  has_one_attached :pin_image
end
