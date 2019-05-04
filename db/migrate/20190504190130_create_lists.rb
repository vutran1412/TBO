class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.integer :content_id, null: false

      t.timestamps
    end
    add_index :lists, :user_id
    add_index :lists, :content_id
  end
end
