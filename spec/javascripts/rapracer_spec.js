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
    createDomElement('textarea','user_bad_input');
    document.getElementById('user_bad_input').value = "raorao";

    createDomElement('textarea','user_good_input');
    document.getElementById('user_good_input').value = "Let";

    createDomElement('span','current_word');
    document.getElementById('current_word').innerText = "Let";
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('user_bad_input'));
    document.body.removeChild(document.getElementById('user_good_input'));
    document.body.removeChild(document.getElementById('current_word'));
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
    createDomElement('textarea','user_bad_input');
    document.getElementById('user_bad_input').value = "raorao";

    createDomElement('textarea','user_good_input');
    document.getElementById('user_good_input').value = "Let";

    createDomElement('span','current_word');
    document.getElementById('current_word').innerText = "Let";
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('user_bad_input'));
    document.body.removeChild(document.getElementById('user_good_input'));
    document.body.removeChild(document.getElementById('current_word'));
  });

  it("should let the user know if the WordChecker returned true", function() {
    expect(inputChecker.userFeedback('user_good_input', 'current_word')).toEqual(true);
  });

  it("should let the user know if the WordChecker returned false", function() {
    expect(inputChecker.userFeedback('user_bad_input', 'current_word')).toEqual(false);
  });
});

describe("RapRacer", function() {
  var textbox;
  var dom_lyric, lyric_text;

  beforeEach(function() {
    lyric_text = "Let the suicide doors up I threw suicides";
    dom_lyric = document.createElement('div');
    dom_lyric.id = 'lyric';
    dom_lyric.innerHTML = lyric_text;
    document.body.appendChild(dom_lyric);
    
    textbox = document.createElement('textarea');
    textbox.id = 'user_input';
    document.body.appendChild(textbox);

    RapRacer.init();
  });

  afterEach(function() {
    document.body.removeChild(dom_lyric);
    document.body.removeChild(textbox);
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
  });

  it("user input event should add error class to the text box if current value doesn't match with current word", function() {
    textbox.value = 'myVal';
    textbox.dispatchEvent(new Event('input'));
    expect(textbox.className).toEqual('error');
  });

  it("treats empty values as valid matches", function() {
    textbox.value = '';
    textbox.dispatchEvent(new Event('input'));
    expect(textbox.className).not.toEqual('error');
  });

  it("handle exceptions in case of invalid inputs", function() {
    textbox.value = '\\?';
    textbox.dispatchEvent(new Event('input'));
    expect(textbox.className).toEqual('error');
  });

  it("user input event should not add error class to the text box if current value matches with current word", function() {
    textbox.value = 'L';
    textbox.dispatchEvent(new Event('input'));
    expect(textbox.className).not.toEqual('error');
  });

  it("valid user input should remove 'error' class to the text box", function() {
    textbox.value = 'Ler';
    textbox.dispatchEvent(new Event('input'));
    textbox.value = 'Le';
    textbox.dispatchEvent(new Event('input'));
    expect(textbox.className).not.toEqual('error');
  });

  it("go to the next word if the last character was ' ' & match is the exact current word", function() {
    textbox.value = "Let ";
    textbox.dispatchEvent(new Event('input'));
    expect(RapRacer.lyric.currentWord()).toEqual('the');
  });

  it("when user finishes typing the full lyric, no word is highlighted", function() {
    var total_words = lyric_text.split(" ").length;
    while (total_words--) {
      RapRacer.goToNextWord();
    }
    expect(dom_lyric.innerHTML).toEqual(lyric_text);
  });

  it("should print the users score after completion", function() {
    var total_words = lyric_text.split(" ").length;
    while (total_words--) {
      RapRacer.goToNextWord();
    }
  });
});

describe("animation", function() {
  
  beforeEach(function() {
    lyric_text = "Let the suicide doors up I threw suicides";
    dom_lyric = document.createElement('div');
    dom_lyric.id = 'lyric';
    dom_lyric.innerHTML = lyric_text;
    document.body.appendChild(dom_lyric);
    
    character_image = document.createElement('div');
    character_image.id = 'character_image';
    character_image.style.left = '0%';
    document.body.appendChild(character_image);
    
    character_position = character_image.style.left;
    textbox = document.createElement('textarea');
    textbox.id = 'user_input';
    document.body.appendChild(textbox);
  });

  afterEach(function() {
    // document.body.removeChild(dom_lyric)
    // document.body.removeChild(character_image)
    // document.body.removeChild(textbox)

  });

  it("should know the length of the rap lyric", function() {
    expect(character.rapLength()).toEqual(41)
  });

  it('should calcuate character movement based on rapLength', function() {
    expect(character.calcCharacterMovement()).toBeGreaterThan(2.4)
  });

  it('should move the character based on what calcCharacterMovement() returns', function() {
    textbox.dispatchEvent(new Event('input'));

    expect(parseInt(character_position)).toBeGreaterThan(2.4);


  })
})





