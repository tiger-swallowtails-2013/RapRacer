
var RapRacer = (function() {
  var started, timer, input;

  return {
    init: function(lyric) {
      this.lyric = lyric || new Lyric();
      input = document.getElementById('user_input');
      started = false;
      timer = new TimingRace();
      this.bindListeners();
    },
    goToNextWord: function() {
      this.lyric.nextWord();
    },

    hasStarted: function() {
      return started;
    },

    start: function() {
      started = true;
      timer.start();
    },

    hasFinished: function() {
      return started && !timer.isTimerOn();
    },

    finish: function() {
      timer.stop();
    },

    playerTime: function() {
      return timer.totalRaceTime();
    },

    bindListeners: function() {
      var self = this;
      input.addEventListener('input', function(e) {
        if (!self.matchWord(input.value)) {
          input.className = 'error';
        }
      });
    },

    matchWord: function(value) {
      var regex;
      try {
        regex = new RegExp('^' + value);
      } catch(e) {
        return false;
      }

      return !!this.lyric.currentWord().match(regex);
    }
  };
})();

var inputChecker = {

  wordChecker: function(word1,word2) {
    return word1 === word2;
  },

  inputWordChecker: function(input_id,check_id) {
    var inputWord = document.getElementById(input_id).value;
    var checkWord = document.getElementById(check_id).innerText;
    return this.wordChecker(inputWord,checkWord);
  },

  userFeedback: function(input_id, check_id) {
    return this.inputWordChecker(input_id, check_id);
  }

};
