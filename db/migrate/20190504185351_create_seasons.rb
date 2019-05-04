class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.integer :series_id, null: false

      t.timestamps
    end
    add_index :seasons, :series_id
  end
end
