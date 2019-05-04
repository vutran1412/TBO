class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.float :audio, null: false
      t.string :video, null: false
      t.integer :year, null: false
      t.string :length, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :movies, :title
    add_index :movies, :genre
    add_index :movies, :year
  end
end
