// Update text and value of the info console buttons by selecting options from their dropdown
$('.js-info-select li').on("click keydown", function(event) {
    const thisText = $(this).text().trim();
    if (event.key === 'Enter' || event.type === 'click') {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisText);
        $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisText);
    }
});

$('.js-info-select-hotel li').on("click keydown", function(event) {
    const thisText = $(this).text().trim();
    const thisNameText = $(this).find('.lna-name').text().trim();
    const thisLocationText = $(this).find('.lna-location span').text().trim();
    if (event.key === 'Enter' || event.type === 'click') {
        $(this).addClass('selected').siblings().removeClass('selected');

        if (!$(this).hasClass('no-accomodation')) {
            $(this).parent().parent().siblings('.info-drop-slice-btn').val(`${thisNameText}${thisLocationText !== '' ? ' - ' : ''}${thisLocationText}`);
            $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisNameText);
            $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-location').text(thisLocationText);
        } else {
            $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisText);
            $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisText);
            $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-location').text('');
        }
    }
});

$('.js-info-select-hotel-form li').on("click keydown", function(event) {
    const thisText = $(this).text().trim();
    const thisNameText = $(this).find('.lna-name').text().trim();
    const thisLocationText = $(this).find('.lna-location span').text().trim();
    if (event.key === 'Enter' || event.type === 'click') {
        $(this).addClass('selected').siblings().removeClass('selected');

        if (!$(this).hasClass('no-accomodation')) {
            $(this).parent().parent().siblings('.info-drop-slice-btn').val(`${thisNameText}${thisLocationText !== '' ? ' - ' : ''}${thisLocationText}`);
            $(this).parent().parent().siblings('.info-drop-slice-btn').find('.info-drop-slice-btn-selection').html(`<span class='ids-sel-1'>${thisNameText}</span>${thisLocationText !== '' ? ' - ' : ''}<span class='ids-sel-2'>${thisLocationText}</span>`);
        } else {
            $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisText);
            $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisText);
        }
    }
});

$('.js-info-select-sessions li').on("click keydown", function(event) {
    const thisNameText = $(this).find('.info-sessions-period').text().trim();
    if (event.key === 'Enter' || event.type === 'click') {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisNameText);
        $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisNameText);
    }
});

document.querySelectorAll('.info-drop-slice-btn').forEach((item) => {
    item.addEventListener('show.bs.dropdown', event => {
        $('.info-dropped-overlay').addClass('dropped');
    });

    item.addEventListener('hide.bs.dropdown', event => {
        $('.info-dropped-overlay').removeClass('dropped');
    });
});