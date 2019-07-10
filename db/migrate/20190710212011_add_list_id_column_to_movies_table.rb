class AddListIdColumnToMoviesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :list_id, :integer
  end
end
