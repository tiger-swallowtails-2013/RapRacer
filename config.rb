require 'sinatra'
require 'sinatra/activerecord'
require_relative 'models/song'
require_relative 'models/lyric'


 set :database, 'sqlite:///foo.sqlite3'
