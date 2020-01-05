class CreateOrganizes < ActiveRecord::Migration[5.2]
  def change
    create_table :organizes do |t|
      t.belongs_to :trip, null: false, foreign_key: true
      t.belongs_to :company, null: false, foreign_key: true
      t.string :level

      t.timestamps
    end
  end
end
