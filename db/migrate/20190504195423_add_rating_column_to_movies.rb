class AddRatingColumnToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :rating, :string, null: false
  end
end
