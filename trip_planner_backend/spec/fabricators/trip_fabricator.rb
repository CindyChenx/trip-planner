Fabricator(:trip) do
    country {Faker::WorldCup.team}
    length {Faker::Number.number(digits: 2)}
    price {Faker::Number.number(digits:4)}
    description {Faker::Movies::HarryPotter.quote}
end