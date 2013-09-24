var wordChecker = function(word1,word2) {
  return word1 === word2
}

var inputWordChecker = function(input_id,check_id) {
  var inputWord = document.getElementById(input_id).value
  var checkWord = document.getElementById(check_id).innerText
  return wordChecker(inputWord,checkWord)
}
