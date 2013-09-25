
describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("start position is zero", function() {
    expect(player.position()).toEqual(0);
  });

  it("knows position on board", function() {
    player.move(5);
    expect(player.position()).toEqual(5);
  });

  it("keeps track of its position after moving more than once", function() {
    player.move(10);
    player.move(5);
    expect(player.position()).toEqual(15);
  });

  it("renders itself", function() {
    expect(player.render()).toEqual('');
  });
});

