document.addEventListener('readystatechange', function(){
  if (document.readyState == "complete") {
    moveCharacter('snarf', 'click');
    moveCharacter('cheetara', 'dblclick');
  }
});


var moveCharacter = function(id, event_activator){
  var left_quantity = 0;
  var character = document.getElementById(id);
  character.addEventListener(event_activator, function(){ 
    left_quantity = left_quantity + 50;
    character.style.left = left_quantity;

  });
};
    

