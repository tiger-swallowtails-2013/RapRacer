
class Lyric < ActiveRecord::Base
  belongs_to :song
  validates :text, length: {minimum: 25}
end


