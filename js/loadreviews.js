$(document).ready(function() {
//auto loading 
var loadCount = 0;
  $(window).scroll(function() {
    //if user close to the buttom
    var reviewscount = $(".review .container .col-12").length;
    var windowPosition = $(document).height() - $(window).height()-300;
    if($(window).scrollTop() > windowPosition & loadCount<1) {
           //console.log("load more")
           //play loading aniamtion
           console.log(reviewscount);
           $('.loading').css('visibility', 'visible');
           $('.loading').addClass('loading-animation');
           //after 1 sec, remove the aniamtion and load reviews
           loadCount++;

           setTimeout(function() {
              $('.loading').removeClass('loading-animation');
              $('.loading').css('visibility', 'hidden');
              $('.clone').clone(true,true).insertBefore($('.marker')).removeClass('clone').addClass('new');
            }, 1000);
           //break;
    }
  });
});