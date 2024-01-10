class AddTopicToComments < ActiveRecord::Migration[7.1]
  def change
    add_reference :comments, :topic, foreign_key: true
  end
end
