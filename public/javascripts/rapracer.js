
var RapRacer = (function() {
  var lyric_el, lyric, started, timer;


  return {
    init: function() {
      lyric_el = document.getElementById('lyric');
      lyric = new Lyric(lyric_el.innerText);
      started = false;
      timer = new TimingRace();
    },

    lyric: function() {
      return lyric.text();
    },

    printHighlightedLyric: function() {
      lyric_el.innerHTML = lyric.highlightedText();
    },

    goToNextWord: function() {
      lyric.nextWord();
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
    }
  };
})();





var inputChecker = {

  wordChecker: function(word1,word2) {
    return word1 === word2
  },

  inputWordChecker: function(input_id,check_id) {
    var inputWord = document.getElementById(input_id).value
    var checkWord = document.getElementById(check_id).innerText
    console.log(this.wordChecker(inputWord,checkWord))
    return this.wordChecker(inputWord,checkWord)
  },

  userFeedback: function(input_id, check_id) {
    return this.inputWordChecker(input_id, check_id)
  }

};
