$('.menu-btn').on("click", function() {
    if(!$(this).hasClass('show')) {
        $('body').removeClass('nav-active');
    } else {
        $('body').addClass('nav-active');
    }
});