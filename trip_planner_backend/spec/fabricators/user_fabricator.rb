Fabricator(:user) do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { Faker::Games::Pokemon.name }
    address { Faker::Address.street_address }
    trips(count: 2)
end