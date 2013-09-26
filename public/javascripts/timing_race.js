function TimingRace() {}

TimingRace.prototype.start = function() {

  if (this.start_time) {
    return false;
  }
  else {
    this.start_time = Date.now();
    return true;
  }
};

TimingRace.prototype.isTimerOn = function() {
  if (this.start_time && !this.stop_time) {
    return true;
  }
  else {
    return false;
  }
};

TimingRace.prototype.stop = function() {
  this.stop_time = Date.now();
};

TimingRace.prototype.totalRaceTime = function() {
  this.total_race_time = this.stop_time - this.start_time;
  return this.total_race_time/1000.0;
};
