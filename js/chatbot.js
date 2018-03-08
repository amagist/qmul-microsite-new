$(document).ready(function(){
  $(".chatbot").hide();
  $("#chatbot-button").click(function(){
    $(".chatbot").toggle();
  });
});

var offset = 200;
var duration = 500;
$(window).scroll(function() {
  if ($(this).scrollTop() > offset) {
    $('#chatbot-button').fadeIn(400);
  } else {
    $('#chatbot-button').fadeOut(400);
  }
});
