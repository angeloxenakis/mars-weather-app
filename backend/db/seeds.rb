require 'net/http'
require "open-uri"
require 'pp'

# Clear all records before reseeding ----------------------------------------------------------

User.destroy_all
Location.destroy_all
MarsWeatherRecord.destroy_all


# Get Mars weather data -----------------------------------------------------------------------

mars_response = URI.parse("https://api.nasa.gov/insight_weather/?api_key=i9gqXdEKqhWTTCLhNwoJdWmzLyYXQUF96t3bVmfA&feedtype=json&ver=1.0").read
# pp JSON.parse(mars_response)
mars_data = JSON.parse(mars_response)


# Filter Mars Data > Current SOL > Current Season > Only SOLs ---------------------------------

current_sol_num = mars_data.keys.map {|key| key.to_i }.max.to_s
current_sol = mars_data[current_sol_num]
current_season = current_sol['Season']
mars_sols = mars_data.filter {|key| key.to_i != 0}



# Create seeds ---------------------------------------------------------------------------------

User.create({ username: "TestUser", password: "123", email: "FakeEmail@email.com", zipcode: "10005", city: "New York City" })

Location.create({ user_id: 1, address: "123 Main Street", zipcode: "77001", city: "Houston"})

mars_sols.map {|sol| 
    MarsWeatherRecord.create({
        sol: sol[0],
        temperature: sol[1]['AT']['av'],
        air_pressure: sol[1]['PRE']['av'],
        wind_speed: sol[1]['HWS']['av'],
        wind_direction: sol[1]['WD']['most_common']['compass_point'],
        season: current_season
    })
}