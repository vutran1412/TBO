class ChangeSeriesIdFromStringToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :episodes, :series_id, :integer, using: 'series_id::integer'
  end
end
