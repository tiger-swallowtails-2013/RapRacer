var LyricText = (function() {
  var words,
      current_word,
      current_word_index = 0;

  return {
    lyric_text: function(text) {
      if (text) {
        words = text.split(" ");
      }
      return words.join(" ");
    },

    current_word: function(word) {
      return words[current_word_index];
    },

    highlight: function(word_index) {
      var temp_arr = words.slice(0);

      if (word_index >= 0 && word_index < words.length) {
        temp_arr[word_index] = '<span class="current">' + temp_arr[word_index] + '</span>';
      }

      return temp_arr.join(" ");
    },

    next_word: function() {
      if (current_word_index >= words.length) {
        return null;
      }
      else {
        current_word_index++;
        return current_word;
      }
    }
  }
})();
