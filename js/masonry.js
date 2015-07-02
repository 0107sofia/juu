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

  $(window).scroll(function() {
    //if user scroll to the bot
    var productscount = $(".masonry-container .product").length;
    var simple = 0;
    simple = $('.simple .product').clone();
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
           console.log(productscount);
           console.log(simple);
           
           $grid.append( simple ).masonry( 'appended', simple );
    }
  });


});