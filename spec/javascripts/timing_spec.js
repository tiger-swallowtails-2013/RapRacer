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

    waits(50);
    runs(function() {
      timer.stop();
      expect(timer.totalRaceTime()).toBeGreaterThan(0.049);
    });
  });
});
