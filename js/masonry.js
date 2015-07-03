

$(document).ready( function() {
// init Masonry
var $grid = $('.masonry-container').masonry({
  itemSelector: '.product',
  // percentPosition: true,
  columnWidth: '.product'
});

  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  
    // $grid.masonry();

var imagecounter=20;
var titlecount=0;file:///Users/marcussu/Desktop/juu/kaustby.html
var productTitle=["ODENSVIK","GODMORGON","TYNGEN","ALDERN","MOLGER","ALGOT","MULIG","TIVED","TORNA","FOTO","CALYPSO","MALM","HURDAL","ASKVOLL","NORDLI","CENTIGRAD","HEKTAR","HYBY","HUSINGE","SKUBB"];
var productType=["storage","table","seating","seating","seating","table","storage","table","table","table","storage","seating","storage","storage","storage","storage","seating","seating","table"];
$(window).scroll(function() {
  //if the current window is close to the buttom
  var productscount = $(".masonry-container .product").length;
  var $sample = $('.sample .product').clone();
  
  var windowPosition = $(document).height() - $(window).height()-300;
 
  if($(window).scrollTop() > windowPosition & imagecounter<38) {

      $sample.find('p').eq(1).text(productType[titlecount]);
      $sample.find('.product-title').text(productTitle[titlecount]);
      $sample.find('img').attr('src','img/productlist/all/product'+imagecounter+'.jpg');
      $('.la-dark').addClass('la-ball-clip-rotate');
      // $('.la-ball-clip-rotate').removeClass('la-ball-clip-rotate');
      //force the window scroll up 1 px 
      var y = $(window).scrollTop();  
      $(window).scrollTop(y-1);


      $grid.append( $sample ).masonry('appended',$sample);
      //fix the image position while loading 
      $grid.imagesLoaded().progress( function() {
        $grid.masonry();
      }); 
      //remove the animation after loading
      $grid.imagesLoaded().done( function() {
        $('.la-dark').removeClass('la-ball-clip-rotate');
      });
      imagecounter++;
      titlecount++;

  }

});


});