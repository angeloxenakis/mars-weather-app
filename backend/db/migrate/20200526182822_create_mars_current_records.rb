class CreateMarsCurrentRecords < ActiveRecord::Migration[6.0]
	def change
		create_table :mars_current_records do |t|
			t.integer :sol
			t.integer :temperature
			t.integer :air_pressure
			t.integer :wind_speed
			t.string :wind_direction
		end
	end
end