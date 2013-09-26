require "rapgenius"
require_relative "models/lyric.rb"
require_relative "models/song.rb"
require


song_file = "Jay-z-99-problems-lyrics"

song = RapGenius::Song.find(song_file)

p Song.valid({artist: song.full_artist, title: song.title, rg_string: song_file })
