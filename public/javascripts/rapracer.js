(function() {

  function LyricText() {}

  LyricText.prototype.lyric_text = function(text) {
    if (text) {
      this.words = text.split(" ");
      this.current_word_index = 0;
    }
    return this.words.join(" ");
  };

  LyricText.prototype.current_word = function(word) {
    return this.words[this.current_word_index];
  };

  LyricText.prototype.highlight = function(word_index) {
    var temp_arr = this.words.slice(0);

    if (word_index >= 0 && word_index < this.words.length) {
      temp_arr[word_index] = '<span class="current">' + temp_arr[word_index] + '</span>';
    }

    return temp_arr.join(" ");
  };

  LyricText.prototype.next_word = function() {
    if (this.current_word_index >= this.words.length) {
      return null;
    }
    else {
      this.current_word_index++;
      return this.current_word;
    }
  }

  // Make LyricText available globally
  window.LyricText = LyricText;
})();
