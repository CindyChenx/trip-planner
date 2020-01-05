class Trip < ApplicationRecord
  belongs_to :user
  has_many :organizes, dependent: :destroy
  has_many :companies, through: :organizes
end
