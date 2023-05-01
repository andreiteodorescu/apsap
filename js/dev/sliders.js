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
        pauseOnMouseEnter: true
      }
    }
  },
});

// Initialization for the hero slider
const heroSlider = new Swiper("#hero-slider", {
  effect: 'fade',
  autoplay: {
    enabled: true,
    delay: 4000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  }
});

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
        pauseOnMouseEnter: true
      }
    },
  },
});

// Initialization for the lectori slider (no fisheye)
const simpleLectoriSlider = new Swiper(".js-swiper-medallion", {
  loop: true,
  a11y: {
    containerMessage: 'Lectorii APSAP',
    containerRoleDescriptionMessage: 'Lectorii experimentați de la APSAP sunt specialiști în domeniile pe care le predau',
  },
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
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: 'Carusel cu lectorii APSAP',
        containerRoleDescriptionMessage: 'Lectorii experimentați de la APSAP sunt specialiști în domeniile pe care le predau',
      },
    },
    1374: {
      enabled: true,
      slidesPerView: 6,
      spaceBetween: 30,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: 'Carusel cu lectorii APSAP',
        containerRoleDescriptionMessage: 'Lectorii experimentați de la APSAP sunt specialiști în domeniile pe care le predau',
      },
    },
  },
});

// Initialization for the team slider with fisheye
const medallionFisheyeSlider = new Swiper(".js-medallion-fisheye", {
  slideActiveClass: 'medallion-zoom',
  a11y: {
    containerMessage: 'Echipa APSAP',
    containerRoleDescriptionMessage: 'Echipa centrului de formare APSAP',
  },
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      slidesPerView: 3,
      spaceBetween: 15,
      initialSlide: 2,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      autoplay: {
        enabled: true,
        delay: 4000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: 'Carusel cu echipa APSAP',
        containerRoleDescriptionMessage: 'Echipa centrului de formare APSAP',
      },
    },
    1374: {
      enabled: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      autoplay: {
        enabled: true,
        delay: 4000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: 'Carusel cu echipa APSAP',
        containerRoleDescriptionMessage: 'Echipa centrului de formare APSAP',
      },
    },
  },
});

// Add min height on the fisheye wrapper so that it doesn't move the page when it zooms
setTimeout(function() {
  const jsMedallionFisheye = $('.js-medallion-fisheye').outerHeight();
  $('.js-medallion-fisheye').css('min-height', jsMedallionFisheye);
}, 1000);

// Initialization for the documents/certifications slider
const certificationsSlider = new Swiper(".js-swiper-certification", {
  rewind: true,
  centerInsufficientSlides: true,
  a11y: {
    containerMessage: 'Autorizatii si certificate APSAP',
    containerRoleDescriptionMessage: 'Centrul de Formare APSAP este furnizor acreditat de formare profesională înregistrat în Registrul Național al Furnizorilor de Formare Profesionala a Adulților a Municipiului București iar certificatele de absolvire sunt emise de Comisia de Autorizare a Furnizorilor de Formare Profesională a Adulţilor sub egida Ministerului Muncii și Protecției Sociale și a Ministerului Educației și Cercetării',
  },
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
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: 'Carusel cu autorizatii si certificate APSAP',
        containerRoleDescriptionMessage: 'Centrul de Formare APSAP este furnizor acreditat de formare profesională înregistrat în Registrul Național al Furnizorilor de Formare Profesionala a Adulților a Municipiului București iar certificatele de absolvire sunt emise de Comisia de Autorizare a Furnizorilor de Formare Profesională a Adulţilor sub egida Ministerului Muncii și Protecției Sociale și a Ministerului Educației și Cercetării',
      },
    },
    1374: {
      enabled: true,
      slidesPerView: 6,
      spaceBetween: 15,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: 'Carusel cu autorizatii si certificate APSAP',
        containerRoleDescriptionMessage: 'Centrul de Formare APSAP este furnizor acreditat de formare profesională înregistrat în Registrul Național al Furnizorilor de Formare Profesionala a Adulților a Municipiului București iar certificatele de absolvire sunt emise de Comisia de Autorizare a Furnizorilor de Formare Profesională a Adulţilor sub egida Ministerului Muncii și Protecției Sociale și a Ministerului Educației și Cercetării',
      },
    },
  },
});

// Hotels thumbnail sliders
const thumbsBigSlider = document.querySelectorAll('.js-thumbs-big');
const thumbsSmallSlider = document.querySelectorAll('.js-thumbs-small');

for (let i = 0; i < thumbsBigSlider.length; i++) {
  thumbsBigSlider[i].classList.add('js-thumbs-big-' + i);
  thumbsSmallSlider[i].classList.add('js-thumbs-small-' + i);

  const hotelThumbs = new Swiper('.js-thumbs-small-' + i , {
    //direction: "vertical",
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    keyboard: {
      enabled: true
    },
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        direction: "horizontal",
      },
      600: {
        direction: "vertical",
      },
    }
  });

  const hotelThumbsBig = new Swiper('.js-thumbs-big-' + i, {
    spaceBetween: 10,
    keyboard: {
      enabled: true
    },
    thumbs: {
      swiper: hotelThumbs,
    },
  });
}






