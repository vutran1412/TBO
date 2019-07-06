class AddIndexToSeries < ActiveRecord::Migration[5.2]
  def change
    add_index :series, :title
  end
end
