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

  it (".words(9) method returns undefined", function() {
    expect(lyric.words(9)).toBeUndefined();
  });

  it ("first call of .currentWord returns first word", function() {
    expect(lyric.currentWord()).toEqual('world');
  });
});
