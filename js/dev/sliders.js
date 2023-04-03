// Initialization for the first slider with full image cards
const cardFullImageSlider = tns({
    "container": "#card-full-image-slider-1",
    "center": false,
    "edgePadding": 30,
    "nav": false,
    "swipeAngle": false,
    "speed": 400,
    "mouseDrag": false, // For Pul: Should be "false" for this type of slider where each slide is an anchor. The plugin works just fine but in this case each slide being an anchor the browser confuses the gesture of draging by the slider with draging by the anchor and is acting weird.
    "gutter": 5,
    "arrowKeys": true,
    "rewind": true,
    "autoplayHoverPause": true,
    "autoplayTimeout": 3000,
    "autoplayButtonOutput": false,
    "preventScrollOnTouch": 'force',
    "responsive": {
      "350": {
        "edgePadding": 15,
        "controls": false,
        "center": true,
        "autoplay": false,
        "fixedWidth": 340 // This is important, it should be the exact width of the card/item/slide from the css
      },
      "400": {
        "center": false,
      },
      "1280": {
        "center": false,
        "autoplay": true
      }
    }
});

// Add text align center class in order to center the items when the slider is inactive (the slider is inactive when there are no items enough to active it, to exceed the viewport)
cardFullImageSlider.getInfo().container.parentElement.classList.add("text-center");

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

// Initialization for the card banner slider
const cardBannerSlider = tns({
    "container": "#card-banner-slider",
    "nav": false,
    "controls": false,
    "swipeAngle": false,
    "speed": 400,
    "rewind": true,
    "preventScrollOnTouch": 'force',
    "responsive": {
        "350": {
          "edgePadding": 15,
          "controls": false,
          "center": true,
          "gutter": 10,
          "fixedWidth": 248,
          "startIndex": 1
        },
        "400": {
            "center": false,
            "startIndex": 0
        },
        "768": {
            "fixedWidth": 310,
        },
        "1295": {
            "fixedWidth": 388,
            "gutter": 16,
        }
      }
});

// +++++++++++++ Courses timeline slider START ++++++++++++++ //
// Initialization for the courses slider.
const coursesSlider = tns({
    "container": "#courses-slider",
    "nav": false,
    "swipeAngle": false,
    "speed": 600,
    "preventScrollOnTouch": 'force',
    "rewind": true,
    "responsive": {
      "350": {
        "fixedWidth": 100,
        "controls": true
      },
      "768": {
          "fixedWidth": 200,
      }
    }
});

// Pe clickul asta o sa faci tu ajax-ul
$('#courses-slider .tns-item').on("click", function() {
  $(this).addClass('current-active').siblings().removeClass('current-active');
});
// +++++++++++++ Courses timeline slider END ++++++++++++++ //

// +++++++++++++ Courses grid cards slider START. Only on mobile. ++++++++++++++ //
// Remove this whole code if there is no need to have a slider on mobile. You can also remove the id "timeline-slider-mobile" from html if that is the case.
const timelineSliderMobile = tns({
  "container": "#timeline-slider-mobile",
  "nav": false,
  "swipeAngle": false,
  "speed": 600,
  "preventScrollOnTouch": 'force',
  "disable": false,
  "fixedWidth": 235,
  "rewind": true,
  "startIndex": 1,
  "center": true,
  "controls": false,
  "responsive": {
    728: {
      // disable slider on big viewport
      disable: true
    }
  }
});
// Add a class on the wrapper to help with the styling
$('#timeline-slider-mobile').closest('.tns-outer').addClass('timeline-slider-mobile-inner');

// +++++++++++++ Courses grid cards slider END ++++++++++++++ //

// Initialization overflowing slider in the big blue area
const carsOverflowSlider = tns({
  "container": "#card-overflow-slider",
  "edgePadding": 30,
  "nav": false,
  "controls": false,
  "swipeAngle": false,
  "speed": 400,
  "mouseDrag": true,
  "arrowKeys": true,
  "rewind": true,
  "fixedWidth": 250,
  "preventScrollOnTouch": 'force'
});





