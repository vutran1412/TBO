class AddListIdToSeriesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :series, :list_id, :integer
  end
end
