const prevIcon = '<i class="fa-solid fa-angle-left"></i>'
const nextIcon = '<i class="fa-solid fa-angle-right"></i>'
$('.owl-one').owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  animateOut: 'slideOutUp',
  navText: [
    prevIcon,
    nextIcon,
  ],
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true,
      },

    }
})

$('.owl-two').owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    prevIcon,
    nextIcon,
  ],
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      768:{
          items:1,
          nav:true,
      },
      1000:{
          items:1,
          nav:true,
      }
    }
})


$(document).ready(function () {
  $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
  $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
  $('.acc-head').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).siblings('.acc-content').slideUp();
      $(this).removeClass('active');
    }
    else {
      $('.acc-content').slideUp();
      $('.acc-head').removeClass('active');
      $(this).siblings('.acc-content').slideToggle();
      $(this).toggleClass('active');
    }
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('header').addClass("sticky");
  }
  else {
    $('header').removeClass("sticky");
  }
});


$(document).ready(function () {

  $('.grid').isotope({
    itemSelector: '.grid-item',
  });

  $('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });
})


$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 0) {
    $('section').each(function(i) {
      // The number at the end of the next line is how pany pixels you from the top you want it to activate.
      if ($(this).position().top <= windscroll - 0) {
        $('.menu a.active').removeClass('active');
        $('.menu a').eq(i).addClass('active');
      }
    });

  } else {

    $('.menu a.active').removeClass('active');
    $('.menu a:first').addClass('active');
  }

  }).scroll();

  wow = new WOW(
    {
    mobile: false,       // default
    live:   true        // default
  }
  )
  wow.init();

  $(".toggle").on("click", function () {
    $('nav').toggleClass("show");
    $(this).toggleClass("active");
    $('.top-header').toggleClass("op");

});

$(".light").on("click", function () {
    $('nav').toggleClass("show");
    $('.toggle').toggleClass("active");
    $('.form').removeClass("pop-up");
});

$(".menu a").on("click", function () {
  $('nav').removeClass("show");
  $('.toggle').removeClass("active");

});



