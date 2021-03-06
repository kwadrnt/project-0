// sanity check
console.log('working');

const RIGHT = 39;
const LEFT = 37;
var gameOver=false;
const SPACE=32;
const D=68;

//function to make charizard fly through the racecourse
$(document).ready(function() {


function charizard () {
  $('#charizard').animate({left:'1000px'},12000, function (){
    if(gameOver!==true) {
      Materialize.toast('You lost!', 10000)
      gameOver = true
    }
  });
}

//12000 for 12 seconds
//when start is pressed, start charizard

$('#start').click(function(){
  // $('#start').toggle();
  charizard();
});

$(document).keydown(function(event){
  // to race Pikachu: if right key is pressed
  if(event.which == RIGHT) {
    $('#pikachu').animate({'left':'+=10'},20)
  }
  // to race Charmander: if 'd' key is pressed
  if(event.which == D) {
    $('#charmander').animate({'left':'+=10'},20)
  }
  
  //if Pikachu wins:reaches the end of track
  if($('#pikachu').css('left')=='1000px') {
    if(gameOver!==true) {
      Materialize.toast('Pikachu wins! Press reset to play again', 10000);
      gameOver=true;
    }
  }
  //if Charmander wins:reaches the end of track
  if($('#charmander').css('left')=='1000px') {
    if(gameOver!==true) {
      Materialize.toast('Charmander wins! Press reset to play again', 10000);
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