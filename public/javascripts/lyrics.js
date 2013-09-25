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

Lyric.prototype.nextWord = function() {
  this.current_word_index += 1
}

Lyric.prototype.highlightedText = function() {
  // soft duplicate array
  var temp = this.lyric_words.slice(0);
  temp[this.current_word_index] = '<span id="highlighted">' + temp[this.current_word_index] + '</span>'
  return temp.join(' ');
}
