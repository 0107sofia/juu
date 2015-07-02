$(document).ready(function() {
//auto loading 
  $(window).scroll(function() {
    //if user scroll to the bot
    var reviewscount = $(".review .col-12").length;
    
    if($(window).scrollTop() == $(document).height() - $(window).height()&reviewscount<=11) {
           console.log("load more")
           //play loading aniamtion
           $('.loading').css('visibility', 'visible');
           $('.loading').addClass('loading-animation');
           //after 1 sec, remove the aniamtion
           setTimeout(function() {
              $('.loading').removeClass('loading-animation');
              $('.loading').css('visibility', 'hidden');
              $('.clone').clone(true,true).insertBefore($('.marker')).removeClass('clone').addClass('new');

            }, 1000);
           //insert some reviews

    }
  });
});