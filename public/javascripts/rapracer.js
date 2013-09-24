var LyricText = (function() {
  var words,
      current_word,
      current_word_index = 0;

  return {
    lyric_text: function(text) {
      if (text) {
        words = text.split(" ");
        current_word_index = 0;
      }
      return words.join(" ");
    },

    highlighted_lyric: function() {
      return this.highlight(current_word_index);
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


(function() {
  var SPACE_KEY_CODE = 32;

  var user_input      = document.getElementById('user-input'),
      lyric_paragraph = document.getElementById('lyric').getElementsByTagName('p')[0];


  startGame();

  function startGame() {
    initLyricText();
    bindEvents();
    updateCurrentWord();
  }

  function initLyricText() {
    LyricText.lyric_text(lyric_paragraph.innerText);
  }

  function bindEvents() {
    user_input.addEventListener('keypress', function(e) {
      var curVal = "" + this.value + String.fromCharCode(e.keyCode);
      if (e.keyCode === SPACE_KEY_CODE) {
        if (LyricText.current_word() === this.value) {
          goToNextWord();

          // Prevent space character from being added
          e.preventDefault();
        }
        else {
          setError();
        }
      }
      else {
        // var current_val = this.value + String.fromCharCode(e.keyCode);
        if (isCurrentWordMatch(curVal)) {
          setNoError();
        }
        else {
          setError();
        }
      }
    });
  }

  function goToNextWord() {
    LyricText.next_word();
    updateCurrentWord();
    user_input.value = '';
  }

  function isCurrentWordMatch(value) {
    // console.log("=>> '" + value + "': length: " + value.length);
    if (!value.trim().length) {
      console.log(1);
      return true;
    }

    var regex;
    try {
      regex = new RegExp("^" + value);
    } catch (e) {
      return false;
    }

    return !!LyricText.current_word().match(regex);
  }

  function updateCurrentWord() {
    lyric_paragraph.innerHTML = LyricText.highlighted_lyric();
  }

  // -----------------------------------
  function setError() {
    user_input.className = 'error';
  }

  function setNoError() {
    user_input.className = '';
  }
})();
