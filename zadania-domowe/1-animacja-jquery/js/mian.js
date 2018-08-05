$(document).ready(function(){
$('button').click(function() {
  $('#kwadrat').animate({left: '100px',width: '100px', height: '100px'},3000, changeColor);
});

function changeColor() {
   $('#kwadrat').animate( {backgroundColor: 'blue'}, 5000, heading);
}

function heading() {
  $('#kwadrat').html('<h2>Animacja zakończona</h2>');
}

});
