// Show search console (from the menu)
$('.search-toggler').on("click", function() {
    $(this).closest('.main-submenu-group').hide();
    $(this).closest('.main-submenu').find('.search-wrapper').show();
});

// Search back button
$('.search-back-btn').on("click", function() {
    $(this).closest('.search-wrapper').hide();
    $(this).closest('.main-submenu').find('.main-submenu-group').show();
    $('body').removeClass('search-general-active');
});

// Update text and value of the search console buttons by selecting options from their dropdown
$('.js-search-select li').on("click keydown", function(event) {
    const thisText = $(this).text().trim();
    if (event.key === 'Enter' || event.type === 'click') {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).parent().parent().siblings('.search-console-slice-btn').val(thisText);
        $(this).parent().parent().siblings('.search-console-slice-btn').children('.search-console-selection').text(thisText);
        $(this).parent().parent().siblings('.search-console-slice-btn').children('.search-console-selection').addClass('scs-active');
    }
});

// Modify the padding of the search's dropdown to accomodate the scrollbar when there are many options
$('.search-console-slice-btn').on("click", function() {
    if ($(this).siblings('.search-console-slice-dropdown').hasClass('show')) {
        const searchDropdownHeight = $(this).siblings('.search-console-slice-dropdown.show').children('ul')[0].scrollHeight;

        if (searchDropdownHeight > 255) {
            $(this).siblings('.search-console-slice-dropdown').addClass('scsDropOverflow');
        }
    } 
});

// Show search console outside of the menu in the hero area
$('.search-trigger-mobile').on("click", function() {
    $(this).siblings('.search-wrapper-general').fadeIn();
    $('body').addClass('search-general-active');
});