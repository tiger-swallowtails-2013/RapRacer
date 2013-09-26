class CreateSongs < ActiveRecord::Migration
  def up
    create_table :songs do |t|
      t.string :artist
      t.string :title
      t.string :rg_string 
      t.timestamps
    end

  end

  def down
    drop_table :songs
  end
end
