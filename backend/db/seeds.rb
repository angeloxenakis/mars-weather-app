# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create({id: 1, username: "TestUser", password: "123", email: "FakeEmail@email.com"})

Location.create({user_id: 1, address: "123 Main Street"})

MarsWeatherRecord.create({temperature: 4})
