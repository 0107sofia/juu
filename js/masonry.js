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

  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  
    // $grid.masonry();
  

var imagecounter=20;
$(window).scroll(function() {
  //if the current window is close to the buttom
  var productscount = $(".masonry-container .product").length;
  var $sample = $('.sample .product').clone();
  
  var windowPosition = $(document).height() - $(window).height()-300;
 
  if($(window).scrollTop() > windowPosition & imagecounter<38) {

      $sample.find('img').attr('src','img/productlist/all/product'+imagecounter+'.jpg');
      $('.la-dark').addClass('la-ball-clip-rotate');
      // $('.la-ball-clip-rotate').removeClass('la-ball-clip-rotate');
      //force the window scroll up 1 px 
      var y = $(window).scrollTop();  
      $(window).scrollTop(y-1);


      $grid.append( $sample ).masonry('appended',$sample);
      
      $grid.imagesLoaded().progress( function() {
        
        
        $grid.masonry();

      }); 

      $grid.imagesLoaded().done( function() {
        $('.la-dark').removeClass('la-ball-clip-rotate');
      });
      imagecounter++;


  }

});


});