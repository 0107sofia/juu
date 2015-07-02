$(document).ready(function() {
//auto loading 
  $(window).scroll(function() {
    //if user scroll to the bot
    var productscount = $(".masonry-container .product").length;
    var simple = 0;
    simple = $('.simple .product').clone();
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
           console.log(productscount);
           console.log(simple);

    }
  });
});