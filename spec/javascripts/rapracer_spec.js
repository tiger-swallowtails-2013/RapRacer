describe("wordChecker", function() {
  it("should check words, return true if words match", function() {
    expect(inputChecker.wordChecker("word","word")).toEqual(true);
  });

  it("should check words, return false if they don't match", function() {
    expect(inputChecker.wordChecker("word","otherword")).toEqual(false);
  });
});

describe("inputWordChecker", function() {
  beforeEach(function() {
    createDomElement('textarea','user_bad_input')
    document.getElementById('user_bad_input').value = "raorao";

    createDomElement('textarea','user_good_input')
    document.getElementById('user_good_input').value = "Let";

    createDomElement('span','current_word')
    document.getElementById('current_word').innerText = "Let";
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('user_bad_input'))
    document.body.removeChild(document.getElementById('user_good_input'))
    document.body.removeChild(document.getElementById('current_word'))
  });

  it ("should get values of two ids, return false if no match", function() {
    expect(inputChecker.inputWordChecker('user_bad_input','current_word')).toEqual(false);
  });


  it ("should get values of two ids, return true if match", function() {
    expect(inputChecker.inputWordChecker('user_good_input','current_word')).toEqual(true);
  });
});

describe("userFeedback", function() {
    beforeEach(function() {
    createDomElement('textarea','user_bad_input')
    document.getElementById('user_bad_input').value = "raorao";

    createDomElement('textarea','user_good_input')
    document.getElementById('user_good_input').value = "Let";

    createDomElement('span','current_word')
    document.getElementById('current_word').innerText = "Let";
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('user_bad_input'))
    document.body.removeChild(document.getElementById('user_good_input'))
    document.body.removeChild(document.getElementById('current_word'))
  });

  it("should let the user know if the WordChecker returned true", function() {
    expect(inputChecker.userFeedback('user_good_input', 'current_word')).toEqual(true);
  });

  it("should let the user know if the WordChecker returned false", function() {
    expect(inputChecker.userFeedback('user_bad_input', 'current_word')).toEqual(false);
  });
});

describe("RapRacer", function() {
  var dom_lyric, lyric_text;

  beforeEach(function() {

    var fakeLyric = {
      nextWord: function() {}
    }
    RapRacer.init(fakeLyric);
  });


  it(".hasStarted() returns false if the game didn't start", function() {
    expect(RapRacer.hasStarted()).toBeFalsy();
  });

  it(".start() starts game", function() {
    RapRacer.start();
    expect(RapRacer.hasStarted()).toBeTruthy();
  });

  it(".hasFinished() returns false if game didn't start or is happening", function() {
    expect(RapRacer.hasFinished()).toBeFalsy();
  });

  it(".finish() finished game", function() {
    RapRacer.start();
    RapRacer.finish();
    expect(RapRacer.hasFinished()).toBeTruthy();
  });

  it("playerTime returns players time after game completion", function() {
    RapRacer.start();
    waits(50);
    runs(function() {
      RapRacer.finish();
      expect(RapRacer.playerTime()).toBeGreaterThan(0.049);
    });
  })


});





