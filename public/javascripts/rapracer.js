
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
      character.moveCharacter();
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
      this.showScore();
    },

    playerTime: function() {
      return timer.totalRaceTime();
    },

    bindListeners: function() {
      var self = this;
      input.addEventListener('input', function(e) {
        var isValidMatch = false;

        if (self.__isLastCharASpace()) {
          if (self.__isExactMatch()) {
            isValidMatch = true;
            self.goToNextWord();
            input.value = '';
          }
        }
        else {
          if (self.__matchWord(input.value)) {
            isValidMatch = true;
          }
        }
            
        if (isValidMatch) {
          input.className = '';
        }
        else {
          input.className = 'error';
        }
      });

      self.__bindStartEventThatRunsOnlyOnce();
      self.__bindEndEventThatRunsOnlyOnce();

    },

    __bindEndEventThatRunsOnlyOnce: function () {
      var self = this;

      var inputEndListener = function() {
        if (!self.lyric.isCurrentWordDefined()) {
          self.finish();
        }
      };
      input.addEventListener('keydown', inputEndListener);
    },
    __bindStartEventThatRunsOnlyOnce: function() {
      var self = this;

      var inputStartListener = function() {
        self.start();
        input.removeEventListener('keydown', inputStartListener);
      };

      input.addEventListener('keydown', inputStartListener);
    },

    __isLastCharASpace: function() {
      var isSpace = false;
      if (input.value.length) {
        isSpace = input.value[input.value.length - 1] === ' ';
      }
      return isSpace;
    },

    __isExactMatch: function() {
      return (this.__valueWithoutSpace() === this.lyric.currentWord());
    },

    __valueWithoutSpace: function() {
      return input.value.substr(0, input.value.length - 1);
    },

    __matchWord: function(value) {
      var regex;
      try {
        regex = new RegExp('^' + value);
      } catch(e) {
        return false;
      }

      return !!this.lyric.currentWord().match(regex);
    },

    __wordsPerMinute: function() {
      var total_words = this.lyric.lyricArray().length,
          total_time  = timer.totalRaceTime() / 60;

      console.log(timer.totalRaceTime());

      return total_words / total_time;
    },

    showScore: function() {
      var score_element = document.querySelector('#score');
      score_element.innerHTML = 'WPM: ' + Math.floor(this.__wordsPerMinute());
    }
  };

})();
