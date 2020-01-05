# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Company.destroy_all

cindy = User.create(name: "Cindy", email: "cindy@chen.com", password: "password", address: "123 William Street, New York, NY")

croatia = Trip.create(country: "Croatia", length: 8, price: 5495, description: "Celebrate the many delights of Croatia, exploring Dubrovnik, Hvar and Split, enjoying spectacular scenery and delectable local delicacies, and taking in local culture and nature, including a tasting at a family-owned winery.", user: cindy)
japan = Trip.create(country: "Japan", length: 14, price: 16495, description: "Experience fascinating Japan with A&K’s passionate experts and enrichment specialists", user: cindy)

ak = Company.create(name: "Abercrombie and Kent", rate: 5.00, about: "Abercrombie & Kent pioneered the luxury adventure more than 50 years ago. Today we are the world’s undisputed luxury-travel leader, offering an award-winning combination of exclusivity, comfort and authenticity on all seven continents.")

organize1 = Organize.create(trip: croatia, company: ak, level: "luxury")
organize2 = Organize.create(trip: japan, company: ak, level: "luxury")