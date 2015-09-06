pointdropper.Players = function(display){
  var players = [];

  var add_player = function(player, index){
    display.appendChild(player);
    players[index] = player;
  };

  this.update = function(index, position){
    var player = players[index];
    if(!player){
      player = new pointdropper.Player(index);
      add_player(player, index);
    }
    player.update(position);
  };
};
