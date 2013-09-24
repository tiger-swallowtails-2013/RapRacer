function TimingRace() {}

TimingRace.prototype.start = function() {  

  if (this.start_time) {
    return false;
  } 
  else {
    this.start_time = Date.now();
    return true;
  }
}

TimingRace.prototype.isTimerOn = function() {  
  if (this.start_time && !this.stop_time) {
    return true;
  } 
  else {
    return false;
  }
}

TimingRace.prototype.stop = function() {  
  this.stop_time = Date.now();
}

TimingRace.prototype.totalRaceTime = function() {  
  this.total_race_time = this.stop_time - this.start_time
  return this.total_race_time/1000.0
}



describe("Timing Race", function() {
  var timer = new TimingRace();
  it("starts the timer", function() {
    expect(timer.start()).toEqual(true);
  });

  it("start() method returns false if timer is running", function() {
    expect(timer.start()).toEqual(false);
  });

  describe("returns wether timer is on", function() {
    var timer = new TimingRace();
    it("returns false after timer object is created", function() {
      expect(timer.isTimerOn()).toEqual(false);
    });

    it("returns true after .start() is called", function() {
      timer.start();
      expect(timer.isTimerOn()).toEqual(true);
    });
  });


  it(".stop() method stops timer", function() {
    timer.stop();
    expect(timer.isTimerOn()).toEqual(false);
  });

  it("tells the total time of the race in seconds", function() {
    var timer = new TimingRace();
    timer.start();

    waits(200);
    runs(function() {
      timer.stop();
      expect(timer.totalRaceTime()).toBeGreaterThan(0.199);
    });
  });




});





