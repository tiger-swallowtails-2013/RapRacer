function Lyric() {
  this.current_word_index = 0;
  this.highlightText();
}

Lyric.prototype.element = function() {
  return this.dom_element = this.dom_element || document.getElementById('lyric');
};

Lyric.prototype.text = function() {
  return this.lyric = this.lyric || this.element().innerText;
};

Lyric.prototype.word_count = function () {
  return this.lyricArray().length
}

Lyric.prototype.lyricArray = function() {
  return this.lyric_words = this.lyric_words || this.text().split(' ');
};

Lyric.prototype.currentWord = function() {
  return this.lyricArray()[this.current_word_index];
};

Lyric.prototype.nextWord = function() {
  this.current_word_index += 1;
  this.highlightText();
};

Lyric.prototype.isCurrentWordDefined = function() {
  return typeof this.currentWord() !== "undefined";
};

Lyric.prototype.highlightText = function() {
  if (!this.isCurrentWordDefined()) {
    return this.element().innerHTML = this.lyric;
  }
  

  // soft duplication of array
  var temp = this.lyricArray().slice(0);
  temp[this.current_word_index] = '<span class="highlighted">' + temp[this.current_word_index] + '</span>';
  this.element().innerHTML = temp.join(' ');
};
