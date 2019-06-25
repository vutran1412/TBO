class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :genre
      t.float :audio
      t.string :format
      t.integer :year
      t.string :length
      t.text :description
      t.string :rating

      t.timestamps
    end
  end
end
