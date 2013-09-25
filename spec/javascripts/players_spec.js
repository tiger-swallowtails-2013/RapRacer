
describe("Player", function(){

  it("start position is zero", function(){
    var player = new Player();
    expect(player.position()).toEqual(0);
  });

  it("knows position on board", function(){
    var player = new Player();
    player.move(5);
    expect(player.position).toEqual(5);
  });
});

