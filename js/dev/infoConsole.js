// Update text and value of the search console buttons by selecting options from their dropdown
$('.js-info-select li').on("click keydown", function(event) {
    const thisText = $(this).text();
    if (event.key === 'Enter' || event.type === 'click') {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisText);
        $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisText);
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