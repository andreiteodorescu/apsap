$('.search-toggler').on("click", function() {
    $(this).closest('.main-submenu-group').hide();
    $(this).closest('.main-submenu-group').siblings('.search-wrapper').show();
});

$('.search-back-btn').on("click", function() {
    $(this).parent('.search-wrapper').siblings('.main-submenu-group').show();
    $(this).parent('.search-wrapper').hide();
});

$('.js-search-select li').on("click", function() {
    const thisText = $(this).text();
    $(this).addClass('selected').siblings().removeClass('selected');
    $(this).parent().parent().siblings('.search-console-slice-btn').val(thisText);
    $(this).parent().parent().siblings('.search-console-slice-btn').children('.search-console-selection').text(thisText);
    $(this).parent().parent().siblings('.search-console-slice-btn').children('.search-console-selection').addClass('scs-active');
});


$('.search-console-slice-btn').on("click", function() {
    if ($(this).siblings('.search-console-slice-dropdown').hasClass('show')) {
        const searchDropdownHeight = $(this).siblings('.search-console-slice-dropdown.show').children('ul')[0].scrollHeight;

        if (searchDropdownHeight > 255) {
            $(this).siblings('.search-console-slice-dropdown').addClass('scsDropOverflow');
        }
    } 
});