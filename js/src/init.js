var isScreen = function(){
  return (document.querySelector('.screen'));
};

window.addEventListener('load', function(){
  if(isScreen()){
    window.app = new pointdropper.Screen(new AirConsole());
  }else{
    window.app = new pointdropper.Controller(new AirConsole());
  }
});
