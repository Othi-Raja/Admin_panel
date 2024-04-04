$(document).ready(function(){
  $('.carousel').carousel({
    interval: 3000, // Change slide every 3 seconds
    pause: 'hover' // Pause on hover
  });
});


function openLink(url) {
  window.open(url, '_blank');
}