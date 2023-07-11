/**
* Template Name: Bocor - v2.0.0
* Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/  // Back to top button


const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  const animateCSS1 = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $(document).ready(function() { 
    $('html, body').animate({
      scrollTop: 0
    }, 0, 'easeInOutExpo');
    return false;
  });

  $('.back-to-top').click(function() {
animateCSS('.zx', 'fadeOutUp');
    animateCSS('.wrapper1', 'bounceOutDown');
     animateCSS('.wrapper2', 'bounceOutDown');
      animateCSS('.wrapper3', 'bounceOutDown');
       animateCSS('.wrapper4', 'bounceOutDown');
        animateCSS('.wrapper5', 'bounceOutDown');
        document.getElementById("clients1").style.display = "block";
         animateCSS('.wrapper0', 'flipInY');

        var b =  document.getElementById("openme");
          var c =  document.getElementById("zxy");
        setTimeout(() => {
         b.style.display = 'none';
         c.style.display = 'none';

       }, 700);

    $('html, body').animate({
      scrollTop: 0
    }, 300, 'easeInOutExpo');
    return false;

    delete animateCSS.element;
    delete animateCSS.animation;
    delete animateCSS.prefix;
    delete animateCSS1.element;
    delete animateCSS1.animation;
    delete animateCSS1.prefix;

  });

  document.getElementById("xa").addEventListener("click", function (e) {
      var target = e.target;
target.classList.toggle("icofont-audio");
target.classList.toggle("icofont-ui-mute");
togglePlay()
  }, false);

  var myAudio = document.getElementById("beep");

  function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  };

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

var beepOne = $("#beep")[0];
var beepOne1 = $("#beep1")[0];
var beepOne2 = $("#beep2")[0];
var beepOne3 = $("#beep3")[0];
var beepOne4 = $("#beep4")[0];
var beepOne5 = $("#beep5")[0];

$(".wrapper0").click(function(){
beepOne.play();

  animateCSS('.wrapper0', 'flipOutY');
  animateCSS('.zx', 'fadeInDown');
   animateCSS1('.wrapper1', 'bounceInUp');
    animateCSS1('.wrapper2', 'bounceInUp');
     animateCSS1('.wrapper3', 'bounceInUp');
      animateCSS1('.wrapper4', 'bounceInUp');
       animateCSS1('.wrapper5', 'bounceInUp');

       document.getElementById("openme").style.display = "block";
       document.getElementById("zxy").style.display = "block";

var a =  document.getElementById("clients1");

setTimeout(() => {
 a.style.display = 'none';
}, 750);

$('html, body').animate({
  scrollTop: 6300
}, 500, 'easeOutExpo');


});
$(".wrapper1").mouseenter(function(){beepOne1.play();});
$(".wrapper2").mouseenter(function(){beepOne2.play();});
$(".wrapper3").mouseenter(function(){beepOne3.play();});
$(".wrapper4").mouseenter(function(){beepOne4.play();});
$(".wrapper5").mouseenter(function(){beepOne5.play();});

var audio = document.getElementById("beep");
 audio.volume = 0.4;
 var audio1 = document.getElementById("beep1");
  audio1.volume = 0.4;
  var audio2 = document.getElementById("beep2");
   audio2.volume = 0.4;
   var audio3 = document.getElementById("beep3");
    audio3.volume = 0.4;
    var audio4 = document.getElementById("beep4");
     audio4.volume = 0.4;
     var audio5 = document.getElementById("beep5");
      audio5.volume = 0.4;



//Scenes
let scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0
})
// .addIndicators() //remove to remove indicators
  .setPin(intro)
  .addTo(controller);


//Text Animation
//const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

//let scene2 = new ScrollMagic.Scene({
//  duration: 3000,
//  triggerElement: intro,
//  triggerHook: 0
//})
//  .setTween(textAnim)
//  .addTo(controller);

//Video Animation
let accelamount = .1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 41.6);

scrollMagic();
$(window).resize(scrollMagic);
/////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////

!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

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

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
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

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);
