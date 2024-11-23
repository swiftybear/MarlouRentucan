/**
* Template Name: Bocor - v2.0.0
* Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/  // Back to top button
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const percentageText = document.querySelector(".percentage");
  const buttonas = document.getElementById("clients1");
  const buttonas1 = document.getElementById("xa");
  let progress = 0;


  buttonas.disabled = true;
  buttonas1.disabled = true;
  buttonas.style.display = "none";

  // Simulate loading progress
  const loadingInterval = setInterval(() => {
      progress += Math.random() * 5; // Simulate random loading speed
      if (progress >= 100) {
          progress = 100; // Cap at 100%
          clearInterval(loadingInterval); // Stop the interval
          preloader.style.opacity = "0"; // Fade out effect
          setTimeout(() => {
              preloader.style.display = "none"; // Remove preloader
              buttonas.disabled = false; // Re-enable the button
              buttonas.style.display = "inline-block"; // Show the button

              buttonas1.disabled = false; // Re-enable the button
              buttonas1.style.display = "inline-block"; // Show the button

          }, 500); // Adjust timing to match fade-out
      }
      percentageText.textContent = `${Math.floor(progress)}%`; // Update percentage
  }, 100); // Update every 100ms
});





window.addEventListener('scroll', function() {
  const scrollMessage = document.getElementById('scrollMessage');
  if (window.scrollY > 50) { // Adjust scroll threshold as needed
    scrollMessage.classList.add('hidden');
  } else {
    scrollMessage.classList.remove('hidden');
  }
});




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
	// define images
	var images = [
		
		"ST1/Z18001-min.webp",
    "ST1/Z18002-min.webp",
    "ST1/Z18003-min.webp",
    "ST1/Z18004-min.webp",
    "ST1/Z18005-min.webp",
    "ST1/Z18006-min.webp",
    "ST1/Z18007-min.webp",
    "ST1/Z18008-min.webp",
    "ST1/Z18009-min.webp",
    "ST1/Z18010-min.webp",
    "ST1/Z18011-min.webp",
    "ST1/Z18012-min.webp",
    "ST1/Z18013-min.webp",
    "ST1/Z18014-min.webp",
    "ST1/Z18015-min.webp",
    "ST1/Z18016-min.webp",
    "ST1/Z18017-min.webp",
    "ST1/Z18018-min.webp",
    "ST1/Z18019-min.webp",
    "ST1/Z18020-min.webp",
    "ST1/Z18021-min.webp",
    "ST1/Z18022-min.webp",
    "ST1/Z18023-min.webp",
    "ST1/Z18024-min.webp",
    "ST1/Z18025-min.webp",
    "ST1/Z18026-min.webp",
    "ST1/Z18027-min.webp",
    "ST1/Z18028-min.webp",
    "ST1/Z18029-min.webp",
    "ST1/Z18030-min.webp",
    "ST1/Z18031-min.webp",
    "ST1/Z18032-min.webp",
    "ST1/Z18033-min.webp",
    "ST1/Z18034-min.webp",
    "ST1/Z18035-min.webp",
    "ST1/Z18036-min.webp",
    "ST1/Z18037-min.webp",
    "ST1/Z18038-min.webp",
    "ST1/Z18039-min.webp",
    "ST1/Z18040-min.webp",
    "ST1/Z18041-min.webp",
    "ST1/Z18042-min.webp",
    "ST1/Z18043-min.webp",
    "ST1/Z18044-min.webp",
    "ST1/Z18045-min.webp",
    "ST1/Z18046-min.webp",
    "ST1/Z18047-min.webp",
    "ST1/Z18048-min.webp",
    "ST1/Z18049-min.webp",
    "ST1/Z18050-min.webp",
    "ST1/Z18051-min.webp",
    "ST1/Z18052-min.webp",
    "ST1/Z18053-min.webp",
    "ST1/Z18054-min.webp",
    "ST1/Z18055-min.webp",
    "ST1/Z18056-min.webp",
    "ST1/Z18057-min.webp",
    "ST1/Z18058-min.webp",
    "ST1/Z18059-min.webp",
    "ST1/Z18060-min.webp",
    "ST1/Z18062-min.webp",
    "ST1/Z18063-min.webp",
    "ST1/Z18064-min.webp",
    "ST1/Z18065-min.webp",
    "ST1/Z18066-min.webp",
    "ST1/Z18067-min.webp",
    "ST1/Z18068-min.webp",
    "ST1/Z18069-min.webp",
    "ST1/Z18070-min.webp",
    "ST1/Z18071-min.webp",
    "ST1/Z18072-min.webp",
    "ST1/Z18073-min.webp",
    "ST1/Z18074-min.webp",
    "ST1/Z18075-min.webp",
    "ST1/Z18076-min.webp",
    "ST1/Z18077-min.webp",
    "ST1/Z18078-min.webp",
    "ST1/Z18079-min.webp",
    "ST1/Z18080-min.webp",
    "ST1/Z18081-min.webp",
    "ST1/Z18082-min.webp",
    "ST1/Z18083-min.webp",
    "ST1/Z18084-min.webp",
    "ST1/Z18085-min.webp",
    "ST1/Z18086-min.webp",
    "ST1/Z18087-min.webp",
    "ST1/Z18088-min.webp",
    "ST1/Z18089-min.webp",
    "ST1/Z18090-min.webp",
    "ST1/Z18091-min.webp",
    "ST1/Z18092-min.webp",
    "ST1/Z18093-min.webp",
    "ST1/Z18094-min.webp",
    "ST1/Z18095-min.webp",
    "ST1/Z18096-min.webp",
    "ST1/Z18097-min.webp",
    "ST1/Z18098-min.webp",
    "ST1/Z18099-min.webp",
    "ST1/Z18100-min.webp",
           "ST1/Z18100-min.webp",
		"ST1/Z18101-min.webp",
    "ST1/Z18102-min.webp",
    "ST1/Z18103-min.webp",
    "ST1/Z18104-min.webp",
    "ST1/Z18105-min.webp",
    "ST1/Z18106-min.webp",
    "ST1/Z18107-min.webp",
    "ST1/Z18108-min.webp",
    "ST1/Z18109-min.webp",
    "ST1/Z18110-min.webp",
    "ST1/Z18111-min.webp",
    "ST1/Z18112-min.webp",
    "ST1/Z18113-min.webp",
    "ST1/Z18114-min.webp",
    "ST1/Z18115-min.webp",
    "ST1/Z18116-min.webp",
    "ST1/Z18117-min.webp",
    "ST1/Z18118-min.webp",
    "ST1/Z18119-min.webp",
    "ST1/Z18120-min.webp",
    "ST1/Z18121-min.webp",
    "ST1/Z18122-min.webp",
    "ST1/Z18123-min.webp",
    "ST1/Z18124-min.webp",
    "ST1/Z18125-min.webp",
    "ST1/Z18126-min.webp",
    "ST1/Z18127-min.webp",
    "ST1/Z18128-min.webp",
    "ST1/Z18129-min.webp",
    "ST1/Z18130-min.webp",
    "ST1/Z18131-min.webp",
    "ST1/Z18132-min.webp",
    "ST1/Z18133-min.webp",
    "ST1/Z18134-min.webp",
    "ST1/Z18135-min.webp",
    "ST1/Z18136-min.webp",
    "ST1/Z18137-min.webp",
    "ST1/Z18138-min.webp",
    "ST1/Z18139-min.webp",
    "ST1/Z18140-min.webp",
    "ST1/Z18141-min.webp",
    "ST1/Z18142-min.webp",
    "ST1/Z18143-min.webp",
    "ST1/Z18144-min.webp",
    "ST1/Z18145-min.webp",
    "ST1/Z18146-min.webp",
    "ST1/Z18147-min.webp",
    "ST1/Z18148-min.webp",
    "ST1/Z18149-min.webp",
    "ST1/Z18150-min.webp",
    "ST1/Z18151-min.webp",
    "ST1/Z18152-min.webp",
    "ST1/Z18153-min.webp",
    "ST1/Z18154-min.webp",
    "ST1/Z18155-min.webp",
    "ST1/Z18156-min.webp",
    "ST1/Z18157-min.webp",
    "ST1/Z18158-min.webp",
    "ST1/Z18159-min.webp",
    "ST1/Z18160-min.webp",
    "ST1/Z18161-min.webp",
    "ST1/Z18162-min.webp",
    "ST1/Z18163-min.webp",
    "ST1/Z18164-min.webp",
    "ST1/Z18165-min.webp",
    "ST1/Z18166-min.webp",
    "ST1/Z18167-min.webp",
    "ST1/Z18168-min.webp",
    "ST1/Z18169-min.webp",
    "ST1/Z18170-min.webp",
    "ST1/Z18171-min.webp",
    "ST1/Z18172-min.webp",
    "ST1/Z18173-min.webp",
    "ST1/Z18174-min.webp",
    "ST1/Z18175-min.webp",
    "ST1/Z18176-min.webp",
    "ST1/Z18177-min.webp",
    "ST1/Z18178-min.webp",
    "ST1/Z18179-min.webp",
    "ST1/Z18180-min.webp",
    "ST1/Z18181-min.webp",
    "ST1/Z18182-min.webp",
    "ST1/Z18183-min.webp",
    "ST1/Z18184-min.webp",
    "ST1/Z18185-min.webp",
    "ST1/Z18186-min.webp",
    "ST1/Z18187-min.webp",
    "ST1/Z18188-min.webp",
    "ST1/Z18189-min.webp",
    "ST1/Z18190-min.webp",
    "ST1/Z18191-min.webp",
    "ST1/Z18192-min.webp",
    "ST1/Z18193-min.webp",
    "ST1/Z18194-min.webp",


	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller


	// build scene
	var scene = new ScrollMagic.Scene({
    triggerElement: intro, 
    duration: 8000,
    triggerHook: 0
  
})
					.setTween(tween)
          .setPin(intro)
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene.duration($(this).val());
	});
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
