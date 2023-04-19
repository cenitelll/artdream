class Pin < ApplicationRecord
  validates_presence_of :description
  belongs_to :user

  has_one_attached :pin_image
  validate :correct_pin_image

  private

  def correct_pin_image
    if pin_image.attached? && !pin_image.content_type.in?(%w(image/jpeg image/png image/gif image/webp))
        errors.add(:pin_image, 'needs to be a JPEG, PNG, GIF or WEBP')
    elsif pin_image.attached? == false
        errors.add(:pin_image, 'must have an image attached.')
    end
  end
end
