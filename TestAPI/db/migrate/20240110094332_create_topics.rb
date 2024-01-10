class CreateTopics < ActiveRecord::Migration[7.1]
  def change
    create_table :topics do |t|
      t.string :title
      t.string :content
      t.string :user
      t.integer :score

      t.timestamps
    end
  end
end
