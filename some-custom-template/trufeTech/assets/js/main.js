//-------------------------header-sticky-js-start--------------
$(window).scroll(function(){
    if ($(this).scrollTop() > 90) {
        $('.navbar').addClass('sticky-header');
    } else {
        $('.navbar').removeClass('sticky-header');
    }
});
//------------------------header-sticky-js-end------------------
//--------------------------toggle-btn-js------------------------

$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('#collapsibleNavbar').toggleClass('show');
        $('.navbar-toggler .fa-bars, .navbar-toggler .fa-times').toggle();
    });

    $('.dropdown-toggle').click(function() {
        $(this).toggleClass('active');
        $(this).next('.dropdown-menu').toggleClass('show');
    });

    // Optional: Close the navbar when a link is clicked (for better user experience on mobile)
    $('.navbar-nav .nav-link').click(function() {
        $('#collapsibleNavbar').removeClass('show');
        $('.navbar-toggler .fa-bars').show();
        $('.navbar-toggler .fa-times').hide();
    });
});
    //-----------------------toggle-btn-js------------------------
//-------------------------light-dart-theme-js-start-------------------------
$(document).ready(function(){
    // on-click-change-btn-img/icon
    $("header .light-dark").click(function(){
        $(this).toggleClass('black-show');
    });
    // on-click-change-btn-img/icon
    // on-window-load not remove body-class-js 
    var addClass = sessionStorage.getItem('addClass');
    if(addClass == 'true') {
        $('body').addClass('theme-black');
        $('header .light-dark').addClass('black-show');
    }
    $('header .light-dark').click(function(){
        $('body').toggleClass('theme-black');  
        if(sessionStorage.getItem("addClass") == 'true'){
            sessionStorage.setItem('addClass', 'false');
        }
        else{
            sessionStorage.setItem('addClass', 'true');
        }      
    });
     // on-window-load not remove body-class-js 
    });

    // review section start

$(document).ready(function() {
    // Define previous and next icons as HTML strings
    const prevIcon = '<i class="fa-solid fa-angle-left"></i>';
    const nextIcon = '<i class="fa-solid fa-angle-right"></i>';
    
    // Initialize Owl Carousel
    $('.owl-two').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true
        }
    }
    });
    });
    
    
    
    // review section end
    //---------------------------light-dart-theme-js-end------------------------
    // hero section js start
    var swiper = new Swiper(".swiper", {
        effect: "slide",
        speed: 900,
        loop: true,
        mousewheel: {
            invert: false,
            thresholdDelta: 50,
            sensitivity: 1,
        },
    });

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#f0c394",
            },
            opacity: {
                value: 0.4,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#f0c394",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        retina_detect: true,
    });

    // hero section js end
