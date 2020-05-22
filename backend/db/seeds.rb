# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'net/http'
require "open-uri"

# User.create({id: 1, username: "TestUser", password: "123", email: "FakeEmail@email.com"})

# Location.create({user_id: 1, address: "123 Main Street"})

# MarsWeatherRecord.create({temperature: 4})

@data = URI.parse("https://api.nasa.gov/insight_weather/?api_key=i9gqXdEKqhWTTCLhNwoJdWmzLyYXQUF96t3bVmfA&feedtype=json&ver=1.0").read
msg = p JSON.parse(@data)
byebug

# p "Getting Nasa Data"
# http = Net::HTTP.new('api.nasa.gov')
# http.ssl_version = :SSLv23
# http.use_ssl = true
# response = http.get('/insight_weather/?api_key=i9gqXdEKqhWTTCLhNwoJdWmzLyYXQUF96t3bVmfA&feedtype=json&ver=1.0')
# p "Successful http req"
# p response