$(document).ready(function(){
  $('body').css('margin-top', $('nav').height());
} );

$(".project").hover(function () {
  $(this).toggleClass("selectedProject");
 });