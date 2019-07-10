class AddIndexToListIdInMoviesTable < ActiveRecord::Migration[5.2]
  def change
    add_index :movies, :list_id
  end
end
