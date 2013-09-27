require_relative "config"
require "rapgenius"


song_files = ["Jay-z-99-problems-lyrics",
              "2-chainz-and-wiz-khalifa-we-own-it-fast-and-furious-lyrics",
              "Eminem-till-i-collapse-lyrics",
              "Lil-wayne-a-milli-clean-lyrics",
              "Kanye-west-heartless-lyrics",
              "Soulja-boy-crank-that-lyrics",
              "Cali-swag-district-teach-me-how-to-dougie-lyrics",
              "The-notorious-big-juicy-lyrics",
              "Justin-bieber-baby-lyrics"]









song_files.each do |song_file|
  song = RapGenius::Song.find(song_file)

  this_song = Song.create({artist: song.full_artist, title: song.title, rg_string: song_file })
  id = this_song.id

  lines = song.annotations
  
  lines.each do |line| 
    explanation = line.explanation || ""
    Lyric.create({explanation: explanation, text: line.lyric, song_id: id}) 
  end
end

