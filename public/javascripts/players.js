function Player() {
  this.current_position = 0;
}

Player.prototype.position = function() {
  return this.current_position;
};

Player.prototype.move = function(move_by) {
  this.current_position += move_by;
};
