class CreateSeries < ActiveRecord::Migration[5.2]
  def change
    create_table :series do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :rating, null: false
      t.float :audio, null: false
      t.string :video, null: false

      t.timestamps
    end
    add_index :series, :title
  end
end
