
var character = {

  words: function() {
    lyric = new Lyric
    return lyric.word_count()
  },

  left_pos: 0,

  moveCharacter: function(){
    this.avatar = document.getElementById('character_image');
    character.handleInput();
  },

  calcCharacterMovement: function() {
    var percent = 100/character.words();
    return percent;
  },

  handleInput: function() {
    this.left_pos = (this.left_pos + character.calcCharacterMovement());
    var percent_quantity = this.left_pos.toString() + "%";
    this.avatar.style.left = percent_quantity;
  }

}   

