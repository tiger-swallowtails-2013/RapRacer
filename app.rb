require 'sinatra'
require 'rapgenius'
require_relative 'models/song.rb'
require "sinatra/activerecord"
set :database, "sqlite3:///foo.sqlite3"

# song = Song.new("Jay-z-99-problems-lyrics")

get '/' do  
  # @lyric = song.lyric_text
  # @title = song.title
  # @artist = song.artist
  # @explanation = song.explanation
  erb :home
end

