class AddIndexToListIdInSeriesTable < ActiveRecord::Migration[5.2]
  def change
    add_index :series, :list_id
  end
end
