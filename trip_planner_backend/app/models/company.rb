class Company < ApplicationRecord
    has_many :organizes, dependent: :destroy 
    has_many :trips, through: :organizes
end
