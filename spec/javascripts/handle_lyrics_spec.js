describe("Lyric", function() {
  var lyric_text;
  var lyric;
  var dom_lyric;

  beforeEach(function() {
    lyric_text = "world series attutide, champaigne bottle life";
    dom_lyric = document.createElement('div');
    dom_lyric.id = 'lyric';
    document.body.appendChild(dom_lyric);

    dom_lyric.innerHTML = lyric_text;

    lyric = new Lyric();
  })

  afterEach(function() {
    document.body.removeChild(dom_lyric);
  });

  it("contains lyrics text", function() {
    expect(lyric.text()).toEqual(lyric_text);
  });

  it("first call of .currentWord returns first word", function() {
    expect(lyric.currentWord()).toEqual('world');
  });

  it("highlights current word on lyric element in the DOM", function() {
    expect(dom_lyric.innerHTML).toContain("<span class=\"highlighted\">world</span> series attutide");
  });

  it(".nextWord() highlights the next word", function() {
    lyric.nextWord();
    expect(dom_lyric.innerHTML).toContain("world <span class=\"highlighted\">series</span> attutide");
  });

  it("calling .nextWord() once makes call to .currentWord() return the second word", function() {
    lyric.nextWord();
    expect(lyric.currentWord()).toEqual('series');
  });

});
