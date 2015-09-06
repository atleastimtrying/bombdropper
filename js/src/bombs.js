pointdropper.Bombs = function(display){

  this.add = function(index, position){
    var bomb = document.createElement('div');
    bomb.classList.add('bomb');
    bomb.classList.add('bomb'+ index);
    bomb.style.transform = "translateX(" + position.x + "px) translateY(" + position.y + "px)";
    display.appendChild(bomb);
  };

};
