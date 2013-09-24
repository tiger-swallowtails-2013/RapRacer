function highlight(text,index_value) {
  
}

// describe("Highlighting Words", function() {
//   it("highlights the first word", function() {
//     expect(highlight("the full block of text", 0)).toEqual('<span class="current">the</span> full block of text');
//   });
//   it("highlights the second instance of that word", function() {
//     expect(highlight("hi hi", 1)).toEqual('hi <span class="current">hi</span>');
//   });
// });


// describe("Tracking which word the player is on", function() {

// });

// describe("Telling the highlighter which word the player is on", function() {

// });



describe("wordChecker", function() {
  it("should check words, return true if words match", function() {
    expect(wordChecker("word","word")).toEqual(true);
  });

  it("should check words, return false if they don't match", function() {
    expect(wordChecker("word","otherword")).toEqual(false);
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

  it ("should get values of two ids, return false if no match", function() {
    expect(inputWordChecker('user_bad_input','current_word')).toEqual(false);
  });
 

  it ("should get values of two ids, return true if match", function() {
    expect(inputWordChecker('user_good_input','current_word')).toEqual(true);
  });
});

