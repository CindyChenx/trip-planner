class CreateOrganizes < ActiveRecord::Migration[5.2]
  def change
    create_table :organizes do |t|
      t.belongs_to :trip, foreign_key: true
      t.belongs_to :company, foreign_key: true
      t.string :type

      t.timestamps
    end
  end
end
