// Initialization for the first slider with full image cards from the main submenu under the search console
const cardFullImageSlider = new Swiper("#card-full-image-slider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  centerInsufficientSlides: true,
  breakpoints: {
    320: {
      centeredSlides: true
    },
    400: {
      centeredSlides: false
    },
    1280: {
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }
    }
  },
});

// Initialization for the hero slider. Uncomment this code only if you use the slider.
/* const heroSlider = tns({
    "container": "#hero-slider",
    "mode": "gallery",
    "nav": false,
    "controls": false,
    "swipeAngle": false,
    "speed": 600,
    "autoplay": true,
    "autoplayHoverPause": true,
    "autoplayTimeout": 3000,
    "autoplayButtonOutput": false,
    "preventScrollOnTouch": 'force',
    "animateIn": "tns-fadeIn",
    "animateOut": "tns-fadeOut",
}); */

// +++++++++++++ Courses timeline slider START ++++++++++++++ //
// Initialization for the courses slider, the one with months's names
const coursesSlider = new Swiper("#courses-slider", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


// Pe clickul asta o sa faci tu ajax-ul
$('#courses-slider .swiper-slide').on("click", function() {
  $(this).addClass('current-active').siblings().removeClass('current-active');
});
// +++++++++++++ Courses timeline slider END ++++++++++++++ //

// Initialization for the overflowing cards slider in the big blue area
const carsOverflowSlider2 = new Swiper("#card-overflow-slider", {
  slidesPerView: "auto",
  centerInsufficientSlides: true,
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      spaceBetween: 30,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }
    },
  },
});

// Initialization for the lectori slider (no fisheye)
const simpleLectoriSlider = new Swiper(".js-swiper-medallion", {
  loop: true,
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      slidesPerView: 5,
      spaceBetween: 15,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }
    },
    1374: {
      enabled: true,
      slidesPerView: 6,
      spaceBetween: 30,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }
    },
  },
});

// Initialization for the lectori slider (no fisheye)
const medallionFisheyeSlider = new Swiper(".js-medallion-fisheye", {
  centeredSlides: true,
  initialSlide: 2,
  loop: true,
  loopedSlides: 3,
  slideActiveClass: 'medallion-zoom',
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      slidesPerView: 3,
      spaceBetween: 15,
      autoplay: {
        enabled: true,
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }
    },
    1374: {
      enabled: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        enabled: true,
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }
    },
  },
});





