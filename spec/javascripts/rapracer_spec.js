

describe("Highlighting Words", function() {
  var lyric_text = new LyricText();
  lyric_text.lyric_text("the full block of text");

  it("highlights the first word", function() {
    expect(lyric_text.highlight(0)).toEqual('<span class="current">the</span> full block of text');
  });
  it("highlights the second instance of that word", function() {
    expect(lyric_text.highlight(1)).toEqual('the <span class="current">full</span> block of text');
  });
});


describe("Tracking which word the player is on", function() {
  var lyric_text = new LyricText();
  lyric_text.lyric_text("the full block of text");

  it("starts on the first word", function() {
    expect(lyric_text.current_word()).toEqual("the")
  });
  it("changes to next word when needed", function() {
    lyric_text.next_word();
    expect(lyric_text.current_word()).toEqual("full")
  });
  it("returns null when lyric is finished", function() {
    lyric_text.next_word();
    lyric_text.next_word();
    lyric_text.next_word();
    lyric_text.next_word();
    expect(lyric_text.current_word()).toEqual(null);
  });
});


