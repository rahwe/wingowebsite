!(function ($) {
  "use strict";

  /* =========================================
               Magnifier
============================================ */
$(function () {

  $(".license-container").magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
          enabled: true
      }
  });

});

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');

    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    (index === 0) ?
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") :
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('.carousel-content ').addClass('animate__animated animate__fadeInDown');
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.tooltiptext').addClass('d-none');
      $('.tooltipphone').addClass('d-none');
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function () {
    aos_init();
  });

  $("#click-to-show").click(function () {
    $(this).addClass('d-none');
    $(".col-md-6").removeClass('d-none');
  });

  $('.app').click(function(){
    $('.tooltiptext').toggleClass('d-none');
  });
  $('.phone').click(function(){
    $('.tooltipphone').toggleClass('d-none');
  });
  $('.flag-k').click(function(){
    $(this).addClass('flag-active');
    $('.flag-e').removeClass('flag-active');
  });
  $('.flag-e').click(function(){
    $(this).addClass('flag-active');
    $('.flag-k').removeClass('flag-active');
  });

  $('.read-more').click(function(e){
    e.preventDefault();
    $('.description').find('span').removeClass('d-none');
  });





// ==================================
// hide and show social
//==================================

$(".fn-btn").click(function(){
  $(".icon-bar").toggle(500);
});
})(jQuery);


/* =========================================
              Clients
============================================ */

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 700,
    autoplayHoverPause: true,
    responsiveClass:true,
    nav:false,
    dots: false,
    navText: [" ", " "],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
  });
  
});


// Cultures section make
function readMore(culture) {
  const iconBox = document.querySelector('.icon-box');
  const dots = document.querySelector(`.icon-box[data-culture="${culture}"] .dots`);
  const moreText = document.querySelector(`.icon-box[data-culture="${culture}"] .more`); 
  const btnText = document.querySelector(`.icon-box[data-culture="${culture}"] .btn`);

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Read more";
      moreText.style.display = "none";
      iconBox.style.height = "auto";
  } else {
      dots.style.display = "none";
      btnText.textContent = "Read less"; 
      moreText.style.display = "inline";
  }
}

//-------------------------------------------- 
// display search in result
//--------------------------------------------
const searchOne = document.getElementById('exampleOne');
const searchTwo = document.getElementById('exampleTwo');
const searchThree = document.getElementById('exampleThree');
const searchFour = document.getElementById('exampleFour');
const searchFive = document.getElementById('exampleFive');

searchOne.valueAsDate = new Date();
searchTwo.valueAsDate = new Date();
searchThree.valueAsDate = new Date();
searchFour.valueAsDate = new Date();
searchFive.valueAsDate = new Date();



//======================================
// mobile browser detect
//=====================================

device = document.getElementById('touch');
var ua = new UAParser();
var result = ua.getResult();

var deviceType = result.device;

if(deviceType.type === "mobile"){
  device.style.display = "block";
}else {
  device.style.display = "none";
}
