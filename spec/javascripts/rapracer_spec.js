function highlight(text,index_value) {
  
}
describe("Highlighting Words", function() {
  it("highlights the first word", function() {
    expect(highlight("the full block of text", 0)).toEqual('<span class="current">the</span> full block of text');
  });
  it("highlights the second instance of that word", function() {
    expect(highlight("hi hi", 1)).toEqual('hi <span class="current">hi</span>');
  });
});


describe("Tracking which word the player is on", function() {

});

describe("Telling the highlighter which word the player is on", function() {

});

