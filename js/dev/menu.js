$('.menu-btn').on("click", function() {
    $('.menu-btn').removeClass('menu-btn-active');
    $(this).addClass('menu-btn-active');

    if(!$(this).hasClass('show')) {
        $('body').removeClass('nav-active');
    } else {
        $('body').addClass('nav-active');
    }
});

// Sticky menu when scrolling
const mainHeader = $(".header");
const headerScrollThreshold = 80;
$(window).on("scroll", function() {
    const scroll = $(window).scrollTop();

    if (scroll >= headerScrollThreshold) {
        mainHeader.addClass('header-sticky');
    } else {
        mainHeader.removeClass("header-sticky");
    }
});