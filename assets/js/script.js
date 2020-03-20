window.onload = function() {
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


  // Function for image modal------------------------------------------------------------
  var imageModal = document.querySelector('.gallery-lightbox');
  var figure = document.querySelectorAll('.gallery-section-one .gallery-slider figure');
  var next = document.querySelector('.rightArrow');
  var previous = document.querySelector('.leftArrow');
  var figureArray = Array.from(figure);
  var index;
  figureArray.forEach(function(element){
    element.addEventListener('click',openImageModal);
  });
  imageModal.addEventListener('click',closeImageModal);
  document.querySelector('body').addEventListener('keyup',closeOnEsc);

  // Function for open modal
  function openImageModal(e){
    e.preventDefault();
    index = figureArray.indexOf(this);
    console.log(index);
    var currentImage = this.children[0].src;
    imageModal.children[0].src = currentImage ;
    imageModal.classList.add("active");
    document.querySelector('html').classList.add('no-scroll');
  };

  // Function to close modal
  function closeImageModal(e){
    e.preventDefault();
    var cancel = document.querySelector('.gallery-lightbox .cancel');
    if(e.target === cancel){
      imageModal.classList.remove("active");
      document.querySelector('html').classList.remove('no-scroll');
    }
  };

  // Function to close modal on esc button
  function closeOnEsc(e){
    e.preventDefault();
    if(e.which === 27){
      imageModal.classList.remove("active");
      document.querySelector('html').classList.remove('no-scroll');
    }
  };

  // Function for next slide
  next.addEventListener('click',function(){
    if(index === figureArray.length-1){
      index = 0;
    }
    else {
      index ++;
    }
    var imageSource = figureArray[index].children[0].src;
    imageModal.children[0].src = imageSource;
  });

  // Function for previous slide
  previous.addEventListener('click',function(){
    if(index === 0){
      index = figureArray.length-1;
    }
    else {
      index --;
    }
    var imageSource = figureArray[index].children[0].src;
    imageModal.children[0].src = imageSource;
  });

  // Function for about tabs
  var clicknode = document.getElementsByClassName("tab");
  var tabsName = document.querySelectorAll(".tab a");
  var images = document.querySelectorAll(".tab-data");

  var tabArray = Array.from(tabsName);
  tabArray.forEach(function(element){
    element.addEventListener('click',function(e){
      var text = e.target.text;
      var currentTab = this;
      tabsName.forEach(function(item) {
        if (item == currentTab) {
          item.classList.add("active-tab");
        } 
        else {
          item.classList.remove("active-tab");
        }
      });
      images.forEach(function(item) {
        var attr = item.getAttribute("data-attribute");      
        if (text === attr) {
          item.classList.add("showTab");
        }
        else {
          item.classList.remove("showTab");
        }
      });
    });
  });
}

window.onscroll =function() {
  scroll();
}

// Function for scroll to top button
var btn = document.getElementById('top');
function scroll(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.classList.add('showBtn');
  } else {
    btn.classList.remove('showBtn');
  }
}

btn.addEventListener('click',scrollTop);
function scrollTop(){
	document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Function for banner slider
$(document).ready (function() {
  $('.banner-slider').slick ({
  slidesToShow: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  vertical: true,
  verticalSwiping: true,
  });
});



// slider function
$(document).ready (function() {
	$('.blogs-list-slider').slick ({
		dots:true,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
		// Responsive carousel
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: false,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});  
});







