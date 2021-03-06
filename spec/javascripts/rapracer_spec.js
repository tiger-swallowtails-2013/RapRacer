describe("RapRacer", function() {
  var textbox, score;
  var dom_lyric, lyric_text;

  function goToEndOfLyric() {
    var total_words = lyric_text.split(" ").length;
    while (total_words--) {
      RapRacer.goToNextWord();
    }
  }

  beforeEach(function() {
    lyric_text = "Let the suicide doors up I threw suicides";
    dom_lyric = document.createElement('div');
    dom_lyric.id = 'lyric';
    dom_lyric.innerHTML = lyric_text;
    document.body.appendChild(dom_lyric);
    
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.id = 'user_input';
    document.body.appendChild(textbox);

    score = document.createElement('div');
    score.id = 'score';
    document.body.appendChild(score);

    spyOn(character, 'moveCharacter');
    RapRacer.init();
  });

  afterEach(function() {
    document.body.removeChild(dom_lyric);
    document.body.removeChild(textbox);
    document.body.removeChild(score);
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
    goToEndOfLyric();
    expect(dom_lyric.innerHTML).toEqual(lyric_text);
  });


  describe("handles game start and finish", function() {
    it("timer start when first key is pressed", function() {
      textbox.dispatchEvent(new Event('keydown'));
      expect(RapRacer.hasStarted()).toBeTruthy();
    });

    it("timer starts only once", function() {
      spyOn(RapRacer, 'start');
      textbox.dispatchEvent(new Event('keydown'));
      textbox.dispatchEvent(new Event('keydown'));
      
      expect(RapRacer.start.callCount).toEqual(1);
    });

    it("timer ends when last word is typed correctly", function() {
      RapRacer.start();
      var total_words = lyric_text.split(" ").length;
      while (--total_words) {
        RapRacer.goToNextWord();
      }
      textbox.value = 'suicides ';
      textbox.dispatchEvent(new Event('input'));
      expect(RapRacer.hasFinished()).toBeTruthy();
    });

    it("should print the users score after completion", function() {
      var total_words = lyric_text.split(" ").length;
      while (--total_words) {
        RapRacer.goToNextWord();
      }
      textbox.value = 'suicides ';
      textbox.dispatchEvent(new Event('input'));
      expect(score.innerHTML).toContain('WPM: ');
    });
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
    
    textbox = document.createElement('textarea');
    textbox.id = 'user_input';
    document.body.appendChild(textbox);
  });

  afterEach(function() {
    document.body.removeChild(dom_lyric);
    document.body.removeChild(character_image);
    document.body.removeChild(textbox);
  });

  it("should know the number of words in the rap lyric", function() {
    expect(character.words()).toEqual(8);
  });

  it('should calcuate character movement based on rapLength', function() {
    expect(character.calcCharacterMovement()).toBeGreaterThan(12.4);
  });

  it('should move the character based on RapRacer going to next word', function() {
    RapRacer.goToNextWord();
    expect(parseFloat(character_image.style.left)).toBeGreaterThan(12.4);
  });
});
