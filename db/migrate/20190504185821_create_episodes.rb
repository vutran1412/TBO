class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.integer :season_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.date :air_date, null: false
      t.string :length, null: false

      t.timestamps
    end
    add_index :episodes, :season_id
    add_index :episodes, :title
  end
end
