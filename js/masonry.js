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
  columnWidth: '.product'
});


    $grid.masonry();
  

var imagecounter=20;
$(window).scroll(function() {
  //if user scroll to the bot
  var productscount = $(".masonry-container .product").length;
  
  var $sample = $('.sample .product').clone();

  
  if($(window).scrollTop() == $(document).height() - $(window).height()&imagecounter<38) {

      $sample.find('img').attr('src','img/productlist/all/product'+imagecounter+'.jpg');
      $grid.append( $sample ).masonry('appended',$sample);
      $grid.masonry();
      imagecounter++;

  }
  $grid.masonry();
});


});