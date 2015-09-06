pointdropper.Controller = function(air_console){
  var position, modifier, speed;

  var init = function(){
    position = {
      x: 200,
      y: 200
    };

    modifier = {
      x: 0,
      y: 0
    };

    speed = 5;

    var left = new_button('left', 'x', -speed);
    var right = new_button('right', 'x', speed);
    var up = new_button('up', 'y', -speed);
    var down = new_button('down', 'y', speed);
    var bomb = bomb_button();

    loop();
  };

  var bomb_button = function(){
    var button = document.querySelector('.bomb');
    button.addEventListener('touchstart', function(){
      update({ label: 'bomb', position: position});
    });
  };

  var new_button = function(label, attribute, value){
    var button = document.querySelector('.' + label);

    button.addEventListener('touchstart', function(){
      modifier[attribute] = value;
    }, false);

    button.addEventListener('touchend', function(){
      modifier[attribute] = 0;
    }, false);

    return button;
  };


  var manuver = function(position){
    return({
      x: position.x + modifier.x,
      y: position.y + modifier.y
    });
  };

  var update = function(data){
    air_console.message(AirConsole.SCREEN, data);
  };

  var loop = function(){
    var new_position = manuver(position);
    if(new_position !== position){
      position = new_position;
      update({ label: 'position', position: position});
    }
    setTimeout(loop, 60);
  };

  init();

};
