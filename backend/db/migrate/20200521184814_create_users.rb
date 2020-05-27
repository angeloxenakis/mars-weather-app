class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email

      #temp fix for locations since they only do have 1 location
      t.string :city
      t.string :zipcode

      
    end
  end
end
