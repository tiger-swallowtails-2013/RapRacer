function LyricText() {
}

LyricText.prototype.lyric_text = function(text) {
    if (text) {
          this.words = text.split(" ");
            }
              return this.words.join(" ");
};

LyricText.prototype.current_word = function(word) {
    if (word) {
          this.current_word = word;
            }
              return this.current_word;
};

LyricText.prototype.highlight = function(word_index) {
    var temp_arr = this.words.slice(0);

      if (word_index < 0 || word_index >= this.words.length) {
            temp_arr[word_index] = '<span class="current">' + text_ary[word_index] + '</span>';
              }

                return this.words.join(" ");
};

