// $(document).ready( function() {

//   $('.masonry-container').masonry({
//     itemSelector: '.product'
//    // "gutter": 5

    
//   });
  
// });


// external js: masonry.pkgd.js, imagesloaded.pkgd.js

$(document).ready( function() {
  // init Masonry
  var $grid = $('.masonry-container').masonry({
    itemSelector: '.product',
    percentPosition: true,
    columnWidth: '.product-sizer'
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  

});