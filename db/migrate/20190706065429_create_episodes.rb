class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.string :series_id, null: false
      t.text :description, null: false
      t.string :length, null: false
      t.integer :episode_number, null: false
      t.integer :season_number, null: false
      t.integer :year, null: false

      t.timestamps
    end
    add_index :episodes, :title
    add_index :episodes, :series_id
    add_index :episodes, :season_number
    add_index :episodes, :episode_number
  end
end
