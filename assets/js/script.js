// Function for navigation
var hamburger = document.querySelector ('.hamburger');
var nav = document.querySelector ('.menu');
hamburger.addEventListener ('click',navShow);

function navShow() {
  nav.classList.toggle('show');  
  hamburger.classList.toggle('open');
  document.querySelector('html').classList.toggle('no-scroll');
}


// Function for social links menu
var ellipsis = document.querySelector ('.ellipsis');
var click = document.querySelector ('.social-icons');
ellipsis.addEventListener ('click',menuShow);
function menuShow() {
  click.classList.toggle('showMenu');
  ellipsis.classList.toggle('dropDown');
}




















