class ChangeYearColumnInEpisodeTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :episodes, :air_date
    add_column :episodes, :year, :integer
  end
end
