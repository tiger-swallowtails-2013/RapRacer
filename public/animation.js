document.addEventListener('readystatechange', function(){
  if (document.readyState == "complete") {
    moveCharacter('snarf', 'click',0);
    moveCharacter('cheetara', 'dblclick',0);
  }
});

rap_length = 6;
// var left_quantity = 0;
var moveCharacter = function(id, event_activator, left_pos){
  var character = document.getElementById(id);
  character.addEventListener(event_activator, function(){ 
    left_pos = (left_pos + calcCharacterMovement(rap_length))
    percent_quantity = left_pos.toString() + "%";
    character.style.left = percent_quantity;

  });
};

var calcCharacterMovement = function(rap_length) {
  var percent = 100/rap_length;
  console.log(percent)
  return percent;
}    

