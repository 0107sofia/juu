

$(document).ready( function() {
// init Masonry
var $grid = $('.masonry-container').masonry({
  itemSelector: '.product',
  percentPosition: true,
  columnWidth: '.product'
});

  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  
    // $grid.masonry();




});