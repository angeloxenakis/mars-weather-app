class CreateMarsWeatherRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :mars_weather_records do |t|
      t.integer :sol
      t.integer :temperature
      t.integer :air_pressure
      t.integer :wind_speed
      t.string :wind_direction
      t.string :season
    end
  end
end
