jQuery(function() {
  $('.reviews-grid').masonry({
    itemSelector: '.review-card',
    columnWidth: 230,
    gutter: 18,
    horizontalOrder: true,
    fitWidth: true
  });
 });