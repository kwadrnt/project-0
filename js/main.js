// sanity check
console.log('working');

// sanity check
console.log('this is working')

const RIGHT = 39;
const LEFT = 37;
var gameOver=false;
const SPEACE=32;
const D=68;

//function to make charizard fly through the racecourse
$(document).ready(function() {


function charizard () {
  $('#charizard').animate({left:'750px'},9500, function (){
    if(gameOver!==true) {
      alert('You lost!')
      gameOver = true
    }
  });
}

//9500 for 9.5 seconds
//when start is pressed, start charizard

$('#start').click(function(){
  $('#start').toggle();
  charizard();
});

$(document).keydown(function(event){
  //if right key is pressed
  if(event.which == RIGHT) {
    $('#pikachu').animate({'left':'+=10'},20)
  }
  //if ANOTHERKEY is pressed to control
  if(event.which == D) {
    $('#charmander').animate({'left':'+=10'},20)
  }
  
  //if Pikachu win:reaches the end of track
  if($('#pikachu').css('left')=='750px') {
    if(gameOver!==true) {
      alert('Pikachu wins! Press reset to play again')
      gameOver=true;
    }
  }
  if($('#charmander').css('left')=='750px') {
    if(gameOver!==true) {
      alert('Charmander wins! Press reset to play again')
      gameOver=true;
    }
  }
});


//when reset button is clicked
$('#reset').click(function(){
  $('#pikachu').animate({left:'0px'},0);
  $('#charizard').animate({left:'0px'},0);  
  gameOver=false;
  charizard();
});

});