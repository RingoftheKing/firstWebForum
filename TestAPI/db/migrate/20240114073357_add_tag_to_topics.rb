class AddTagToTopics < ActiveRecord::Migration[7.1]
  def change
    add_column :topics, :tag, :string
  end
end
