pointdropper.Screen = function(air_console){
    var display = document.querySelector('.screen');
    var players = new pointdropper.Players(display);
    var bombs = new pointdropper.Bombs(display);

    air_console.onMessage = function(index, data){
      if(data.label === 'position'){
        players.update(index, data.position);
      }
      if(data.label === 'bomb'){
        bombs.add(index, data.position);
      }
    };

};
