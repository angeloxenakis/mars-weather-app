class MarsWeatherRecordsController < ApplicationController
    def index
        mars_weather_records = MarsWeatherRecord.all
        render json:mars_weather_records
    end
end