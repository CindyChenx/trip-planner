class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :country
      t.integer :length
      t.integer :price
      t.text :description
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
