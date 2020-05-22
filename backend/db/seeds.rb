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

current_sol_num = mars_data.keys.map {|key| key.to_i }.max.to_s
current_sol = mars_data[current_filter]
pp current_sol


# Create seeds ---------------------------------------------------------------------------------

User.create({ username: "TestUser", password: "123", email: "FakeEmail@email.com" })

Location.create({ user_id: 1, address: "123 Main Street" })

test_record_1 = MarsWeatherRecord.create({ 
    sol: current_sol_num, 
    temperature: current_sol["AT"]["av"], 
    air_pressure: current_sol['PRE']['av'], 
    wind_speed: current_sol['HWS']['av'], 
    wind_direction: current_sol['WD']['most_common']['compass_point']
})