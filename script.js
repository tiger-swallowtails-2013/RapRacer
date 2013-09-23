function hello(){
  return "Hello World!"
}

function getTitle() {
  var title_element = document.getElementById('title')
  console.log(title_element.innerHTML)
}

function textChanger(id,value) {
  var element = document.getElementById(id)
  element.innerHTML = value
}

function emailValidator(name) {
  var x = document.forms[name]["email"].value;
  console.log(x)

}

function sentenceReader(){
    
    var sentence_array = document.getElementById('sentence').innerHTML.split(" ")
    return sentence_array
}
var num = -1
function nextWord() {
  var word_array = sentenceReader()
  num++

  if (word_array.length <= num ) {return "no more words"}
  
  return word_array[num]
}

function wordChecker(name,check_id,field_name) {
  var input_text = document.forms[name][field_name]
  var check_text = document.getElementById(check_id).innerHTML

  if (input_text.value === check_text){
    console.log('you are awesome') 
    textChanger("check_text",nextWord())
    input_text.innerHTML = " "
  }
  else {
    console.log('you are bad and you should feel bad')
  }

}


