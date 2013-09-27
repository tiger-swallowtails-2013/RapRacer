
var character = {

  rapLength: function() {
    lyric = new Lyric
    return lyric.lengthOf()
  },

  left_quantity: 0,

  moveCharacter: function(id, event_activator, left_pos){
    var textbox = document.getElementById(id);
    this.avatar = document.getElementById('character_image');
    this.left_pos = left_pos;
    textbox.addEventListener(event_activator, function(){ 
      character.handleInput();
    });
  },

  calcCharacterMovement: function() {
    var percent = 100/character.rapLength();
    return percent;
  },

  handleInput: function() {
    this.left_pos = (this.left_pos + character.calcCharacterMovement());
    var percent_quantity = this.left_pos.toString() + "%";
    this.avatar.style.left = percent_quantity;
  }

}   

