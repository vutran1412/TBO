class CreateSeries < ActiveRecord::Migration[5.2]
  def change
    create_table :series do |t|
      t.string :title
      t.text :description
      t.string :rating
      t.float :audio
      t.string :format

      t.timestamps
    end
  end
end
