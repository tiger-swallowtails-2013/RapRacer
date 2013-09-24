var wordChecker = function(word1,word2) {
  return word1 === word2
}

var inputWordChecker = function(input_id,check_id) {
  var inputWord = document.getElementById(input_id).value
  var checkWord = document.getElementById(check_id).innerText
  console.log(wordChecker(inputWord,checkWord))
  return wordChecker(inputWord,checkWord)
}

var userFeedback = function(input_id, check_id) {
  var result = inputWordChecker(input_id, check_id)
  if (result === true ) {
    alert('You did it!')
  }
  else {
    alert('You suck')
  }
  return result
}
