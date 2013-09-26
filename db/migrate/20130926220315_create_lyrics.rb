class CreateLyrics < ActiveRecord::Migration
  def up
    create_table :lyrics do |l|
      l.string :explanation
      l.string :text
      l.belongs_to :song
    end
  end

  def down
    drop_table :lyrics
  end
end
