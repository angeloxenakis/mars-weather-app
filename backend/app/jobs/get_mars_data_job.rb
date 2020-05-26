require 'net/http'
require "open-uri"
require 'pp'

class GetMarsDataJob < ApplicationJob
    after_perform do |job|
        # invoke another job at your time of choice 
        self.class.set(:wait => 1440.minutes).perform_later
    end
  
    def perform
        MarsWeatherRecord.destroy_all
        mars_response = URI.parse("https://api.nasa.gov/insight_weather/?api_key=i9gqXdEKqhWTTCLhNwoJdWmzLyYXQUF96t3bVmfA&feedtype=json&ver=1.0").read
        mars_data = JSON.parse(mars_response)
        current_sol = mars_data[mars_data.keys.map {|key| key.to_i }.max.to_s]
        current_season = current_sol['Season']
        mars_sols = mars_data.filter {|key| key.to_i != 0}

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
    end
  end