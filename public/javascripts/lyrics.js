function Lyric(lyric_text) {
  this.lyric = lyric_text;
  this.lyric_words = lyric_text.split(' ');
  this.current_word_index = 0;
}

Lyric.prototype.text = function() {
  return this.lyric;
}

Lyric.prototype.words = function(index) {
  return this.lyric_words[index];
}

Lyric.prototype.currentWord = function() {
  return this.lyric_words[this.current_word_index];
}
