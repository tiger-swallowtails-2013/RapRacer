
var RapRacer = (function() {
  var lyric_el = document.getElementById('lyric'),
      lyric = new Lyric(lyric_el.innerText);


  return {
    lyric: function() {
      return lyric.text();
    }
  }
})();





// var inputChecker = {

//   wordChecker: function(word1,word2) {
//     return word1 === word2
//   },

//   inputWordChecker: function(input_id,check_id) {
//     var inputWord = document.getElementById(input_id).value
//     var checkWord = document.getElementById(check_id).innerText
//     console.log(this.wordChecker(inputWord,checkWord))
//     return this.wordChecker(inputWord,checkWord)
//   },

//   userFeedback: function(input_id, check_id) {
//     var result = this.inputWordChecker(input_id, check_id)
//     if (result === true ) {
//       // alert('You did it!')
//     }
//     else {
//       // alert('You suck')
//     }
//     return result
//   }

// };
