$('.menu-btn').on("click", function() {
    $('.menu-btn').removeClass('menu-btn-active');
    $(this).addClass('menu-btn-active');

    if(!$(this).hasClass('show')) {
        $('body').removeClass('nav-active');
    } else {
        $('body').addClass('nav-active');
    }
});
//# sourceMappingURL=main.js.map