
//header-sticky-js-start
$(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
        $('header').addClass('sticky-header');
    } else {
        $('header').removeClass('sticky-header');
    }
});
//header-sticky-js-en
// toggle css start
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarNav = document.querySelector('.navbar-nav');

    toggleButton.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
    });
});
// toggle css end
//Owl Carousel start
$(".all-banner-slide").owlCarousel({
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    lazyLoad: true,
    dots: false,
    autoplayTimeout: 3000
});
//Owl Carousel end
// D23 owl carousel js start
$(".image-slider1").owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    nav:true,
    navText:["←","→"],
    responsive:{
          0:{
              items:1
          },
          600:{
              items:3.5,
              merge:true,
                                  
          },
          1000:{
              items:5
          }
    }
  });
// D23 owl carousel js end
