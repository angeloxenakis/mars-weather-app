class CreateMarsWeatherRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :mars_weather_records do |t|
      t.integer :temperature
    end
  end
end
