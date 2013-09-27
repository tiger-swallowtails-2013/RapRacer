describe("Timing Race", function() {
  var timer;
  beforeEach(function() {
    timer = new TimingRace();
  });

  it("starts the timer", function() {
    expect(timer.start()).toEqual(true);
  });

  it("start() method returns false if timer is running", function() {
    timer.start();
    expect(timer.start()).toEqual(false);
  });

  describe("returns wether timer is on", function() {
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
    timer.start();

    waits(50);
    runs(function() {
      timer.stop();
      expect(timer.totalRaceTime()).toBeGreaterThan(0.049);
    });
  });

  it(".totalRaceTime() returns same number no matter how many times .stop() was called", function() {
    timer.start();

    waits(20);
    runs(function() {
      timer.stop();
      var totalRaceTime = timer.totalRaceTime();
      waits(20);
      runs(function() {
        timer.stop();
        expect(timer.totalRaceTime()).toEqual(totalRaceTime);
      });
    });
  });
});
