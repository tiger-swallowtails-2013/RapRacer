class Song < ActiveRecord::Base
  has_many :lyrics

  def get_random_lyric
    
  end
  
end
