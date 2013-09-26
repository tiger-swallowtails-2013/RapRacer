require_relative "config"
require "rapgenius"


song_file = "Jay-z-99-problems-lyrics"

song = RapGenius::Song.find(song_file)

this_song = Song.create({artist: song.full_artist, title: song.title, rg_string: song_file })
id = this_song.id

lines = song.annotations
lines.each {|line| Lyric.create({explanation: line.explanation, text: line.lyric, song_id: id}) }


