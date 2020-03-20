// Function for navigation
var hamburger = document.querySelector ('.hamburger');
var nav = document.querySelector ('.menu');
hamburger.addEventListener ('click',navShow);

function navShow() {
  nav.classList.toggle('show');  
  hamburger.classList.toggle('open');
  document.querySelector('html').classList.toggle('no-scroll');
}























