var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


var sidemenu = document.getElementById("sideMenu");
function openManu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}



// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
  });
  
  var $imgs = $carousel.find('.carousel-cell img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.carousel-cell');
    var flickity = new Flickity(elem, {
      prevNextButtons: false
    });
  });