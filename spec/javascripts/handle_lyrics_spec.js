describe("Lyric", function() {
  var lyric_text;
  var lyric;

  beforeEach(function() {
    lyric_text = "world series attutide, champaigne bottle life";
    lyric = new Lyric(lyric_text);
  })

  it("contains lyrics text", function() {
    expect(lyric.text()).toEqual(lyric_text);
  });

  it(".words(0) method returns first word", function() {
    expect(lyric.words(0)).toEqual('world');
  });

  it(".words(1) method returns second word", function() {
    expect(lyric.words(1)).toEqual('series');
  });

  it(".words(9) method returns undefined", function() {
    expect(lyric.words(9)).toBeUndefined();
  });

  it("first call of .currentWord returns first word", function() {
    expect(lyric.currentWord()).toEqual('world');
  });

  it("calling .nextWord() once makes call to .currentWord() return the second word", function() {
    lyric.nextWord();
    expect(lyric.currentWord()).toEqual('series');
  });

  it(".highlightedText() returns lyric with current word highlighted", function() {
    var result = '<span id="highlighted">world</span> series attutide, champaigne bottle life'
    expect(lyric.highlightedText()).toEqual(result);
  });

  it(".highlightedText() returns lyric with second word highlighted if .nextWord() was called once", function() {
    var result = 'world <span id="highlighted">series</span> attutide, champaigne bottle life'
    lyric.nextWord();
    expect(lyric.highlightedText()).toEqual(result);
  });

  it(".highlightedText() returns lyric if currentWord() is out of bounds", function() {
    lyric.current_word_index = 6;
    expect(lyric.highlightedText()).toEqual(lyric_text);
  });

});