pointdropper.Player = function(index){
  var element = document.createElement('div');
  element.classList.add('player');
  element.classList.add('player' + index);

  element.update = function(position){
    this.style.transform = 'translateX(' + position.x + 'px) translateY(' + position.y + 'px)';
  };

  return element;
};

