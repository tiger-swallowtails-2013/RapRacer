require 'sinatra'
require 'rapgenius'

class Song
  attr_reader :lyric_text, :explanation, :artist, :title

  def initialize(song_name)
    @song = RapGenius::Song.find(song_name)
    get_artist
    get_title
    get_random_lyric
    get_explanation
  end

  def get_artist
    @artist = @song.full_artist 
  end

  def get_title
    @title = @song.title
  end

  def get_random_lyric
    
    until @line && @line.lyric.length > 30
      @line = @song.annotations[rand(200)] 
    end

    @lyric_text = @line.lyric
  end
  
  def get_explanation
    @explanation = @line.explanation
  end

end

song = Song.new("Jay-z-99-problems-lyrics")

get '/' do  
  @lyrics = song.lyric_text
  @title = song.title
  @artist = song.artist
  @explanation = song.explanation
  erb :home
end

