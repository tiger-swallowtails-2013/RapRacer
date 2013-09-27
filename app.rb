require 'sinatra'
require 'rapgenius'
require_relative 'models/song.rb'
require "sinatra/activerecord"
set :database, "sqlite3:///foo.sqlite3"



lyric = Lyric.find(rand(Lyric.count(:all)))

get '/' do  
  @text = @lyric.text
  erb :home
end

