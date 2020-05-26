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
pp mars_data.keys.map {|key| key.to_i }.min.to_s


# Filter Mars Data to Current SOL --------------------------------------------------------------

current_sol_num = mars_data.keys.map {|key| key.to_i }.max.to_s
current_sol = mars_data[current_sol_num]
pp current_sol


# Create seeds ---------------------------------------------------------------------------------

User.create({ username: "TestUser", password: "123", email: "FakeEmail@email.com" })

Location.create({ user_id: 1, address: "123 Main Street", zipcode: "77001", city: "Houston"})

weather_record_1 = MarsWeatherRecord.create({ 
    sol: 524, 
    temperature: mars_data['524']["AT"]["av"], 
    air_pressure: mars_data['524']['PRE']['av'], 
    wind_speed: mars_data['524']['HWS']['av'], 
    wind_direction: mars_data['524']['WD']['most_common']['compass_point']
})
weather_record_2 = MarsWeatherRecord.create({ 
    sol: 525, 
    temperature: mars_data['525']["AT"]["av"], 
    air_pressure: mars_data['525']['PRE']['av'], 
    wind_speed: mars_data['525']['HWS']['av'], 
    wind_direction: mars_data['525']['WD']['most_common']['compass_point']
})
weather_record_3 = MarsWeatherRecord.create({ 
    sol: 526, 
    temperature: mars_data['526']["AT"]["av"], 
    air_pressure: mars_data['526']['PRE']['av'], 
    wind_speed: mars_data['526']['HWS']['av'], 
    wind_direction: mars_data['526']['WD']['most_common']['compass_point']
})
weather_record_4 = MarsWeatherRecord.create({ 
    sol: 527, 
    temperature: mars_data['527']["AT"]["av"], 
    air_pressure: mars_data['527']['PRE']['av'], 
    wind_speed: mars_data['527']['HWS']['av'], 
    wind_direction: mars_data['527']['WD']['most_common']['compass_point']
})
weather_record_5 = MarsWeatherRecord.create({ 
    sol: 528, 
    temperature: mars_data['528']["AT"]["av"], 
    air_pressure: mars_data['528']['PRE']['av'], 
    wind_speed: mars_data['528']['HWS']['av'], 
    wind_direction: mars_data['528']['WD']['most_common']['compass_point']
})
weather_record_6 = MarsWeatherRecord.create({ 
    sol: 529, 
    temperature: mars_data['529']["AT"]["av"], 
    air_pressure: mars_data['529']['PRE']['av'], 
    wind_speed: mars_data['529']['HWS']['av'], 
    wind_direction: mars_data['529']['WD']['most_common']['compass_point']
})
weather_record_7 = MarsWeatherRecord.create({ 
    sol: current_sol_num, 
    temperature: current_sol["AT"]["av"], 
    air_pressure: current_sol['PRE']['av'], 
    wind_speed: current_sol['HWS']['av'], 
    wind_direction: current_sol['WD']['most_common']['compass_point']
})