describe("Highlighting Words", function() {
  LyricText.lyric_text("the full block of text");

  it("highlights the first word", function() {
    expect(LyricText.highlight(0)).toEqual('<span class="current">the</span> full block of text');
  });
  it("highlights the second instance of that word", function() {
    expect(LyricText.highlight(1)).toEqual('the <span class="current">full</span> block of text');
  });
});


describe("Tracking which word the player is on", function() {
  LyricText.lyric_text("the full block of text");

  it("starts on the first word", function() {
    expect(LyricText.current_word()).toEqual("the")
  });
  it("changes to next word when needed", function() {
    LyricText.next_word();
    expect(LyricText.current_word()).toEqual("full")
  });
  it("returns null when lyric is finished", function() {
    LyricText.next_word();
    LyricText.next_word();
    LyricText.next_word();
    LyricText.next_word();
    expect(LyricText.current_word()).toEqual(null);
  });
});


