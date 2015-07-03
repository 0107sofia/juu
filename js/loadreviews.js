$(document).ready(function() {
//this function allows user loads the review twice
  var loadCount = 0;
  $('.loading').click(function() {
    if(loadCount<2){
      $('.clone').clone().insertBefore($('.marker')).removeClass('clone').addClass('new');
      $('.new').addClass('fadein-animation');
      loadCount++;
      console.log(loadCount);
      setTimeout(function() {
        $('.new').removeClass('fadein-animation');
        $('.new').removeClass('new').addClass('old');
        }, 500);
      if (loadCount==2){
        $('.loading').remove();
      }
    }
  });
  
  
});