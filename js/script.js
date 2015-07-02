$(document).ready(function() {

  var hidden = false;
  
  String.prototype.insert = function (index, string) {
    if (index > 0)
      return this.substring(0, index) + string + this.substring(index, this.length);
    else
      return string + this;
  };
  
  //initial some elements
  readmore();
  var reviewbox_height=$('.review .container #reviewbox .col-12').height()+15;
  $('.review .container #reviewbox .col-12').css('margin-top','-'+reviewbox_height+'px');
  
  //when screen size has changed, apply readmore effect
  $(window).resize(function() {
    readmore();
    var reviewbox_height=$('.review .container #reviewbox .col-12').height()+15;
    $('.review .container #reviewbox .col-12').css('margin-top','-'+reviewbox_height+'px');
  });
  
  
//this method first detect the screen size in a relative value, and hide some text (after 12 word), a read more 
//button is used to show the hidden text
  function readmore(){
    var windowSize = $(window).width() / parseFloat($("body").css("font-size"));
    console.log("windowSize: "+windowSize);
    //if current window size is mobile, add read more button
    if (windowSize<=30){
      if (hidden==false){
        hidden=true
        var reviewNum = $('body').find('.review-content').length;
        //console.log(reviewNum);
        for (var i = 0; i<reviewNum; i++){
          var content = $('body').find('.review-content').eq(i).text();
          var wordCount = 0;
          for (var j = 0; j<content.length; j++){
            
            // console.log(content[j]);
            if (content[j]==" "){
              wordCount=wordCount+1;
             // console.log("find space");
             // console.log(wordCount);
              if (wordCount==12){
                // console.log(wordCount);
                //insert the <span> and <button> tag
                content = content.insert(j,"<span class='hide'>");
                content = content.insert(content.length,"</span>");
                content = content.insert(content.length,"<p class='more-button'> ...more</p>");
                $('body').find('.review-content').eq(i).html(content).contents();
                //break;
              }
            }
          }
        }
        //read more button listener give the hidden text fade in, fade out effect.
        $('.more-button').click(function() {
          console.log("show");
          var hidden_text = $(this).prev('.hide');
          if (hidden_text.is(":hidden")){
            hidden_text.show();
            hidden_text.addClass('fadein-animation');
            $(this).text(' collapse');
            setTimeout(function() {
              hidden_text.removeClass("fadein-animation");
              console.log('removeclass')
            }, 500);
          }else{
            hidden_text.addClass('fadeout-animation');
            setTimeout(function() {
              hidden_text.removeClass('fadeout-animation');
              hidden_text.hide();
              $(this).text(' ...more');
            }, 500);
          }
        });
      }
    //if not on mobile size, remove all
    }else{
      hidden=false;
      $('.review .container').find('.hide').contents().unwrap();
      $('.review .container').find('.more-button').remove();

    }
  };
//cancel and post button hide the review box
  $('#cancel-button').click(function() {
   var get_reviewbox = $('.review .container #reviewbox .col-12');
    if (get_reviewbox.hasClass('show')){
      var reviewbox_height=$('.review .container #reviewbox .col-12').height()+15;
      get_reviewbox.css('margin-top','-'+reviewbox_height+'px');
      get_reviewbox.removeClass('show');
      $('#reviewbutton').css('opacity', '1');
    }else{
      var reviewbox_height=$('.review .container #reviewbox .col-12').height()+15;
      get_reviewbox.css('margin-top','-'+reviewbox_height+'px');
      get_reviewbox.addClass('show');
      $('#reviewbutton').css('opacity', '0');
    }
  });

  $('#post-button').click(function() {
    var get_reviewbox = $('.review .container #reviewbox .col-12');
    var reviewbox_height=$('.review .container #reviewbox .col-12').height()+15;
    if (get_reviewbox.hasClass('show')){
      get_reviewbox.css('margin-top', '-50rem');
      get_reviewbox.removeClass('show');
      $('#reviewbutton').css('opacity', '1');
    }else{
      get_reviewbox.css('margin-top', '0px');
      get_reviewbox.addClass('show');
      $('#reviewbutton').css('opacity', '0');
      // $('#reviewbutton').hide();
    }
  });

//rating
 $("#reviewbox .col-12 .star").mouseover(function() {
    $(this).attr('src','img/blue-star.png');
    $(this).prevAll().attr('src','img/blue-star.png');
    $(this).nextAll().attr('src','img/star-outline.png');
  });

//in case the mouseover doesn't work on phone, apply click method for it
 $("#reviewbox .col-12 .star").click(function() {
    $(this).attr('src','img/blue-star.png');
    $(this).prevAll().attr('src','img/blue-star.png');
    $(this).nextAll().attr('src','img/star-outline.png');
  });


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



  $('.add-to-car').click(function() {
    //if no item is in cart show red circle
    if ($('.circle').is(":hidden")) {
      $('.circle').show();
      
      //add the animation and remove after 0.5s
      $('.circle').addClass('animation-target');
      setTimeout(function() {
        $('.circle').removeClass('animation-target');
      }, 500);
      //plus 1 if user click the button
    }else{
        var countitems=parseInt($('.circle').text());
        countitems++;
        $('.circle').text(countitems);
        console.log(countitems);

        //add the animation and remove after 0.5s
        $('.circle').addClass('animation-target');
        setTimeout(function() {
        $('.circle').removeClass('animation-target');
        }, 500);
    }

  });

  $('#submit-button').click(function() {
    $('#reviewbox').hide();
  });

  $('#reviewbutton').click(function() {
    var get_reviewbox = $('.review .container #reviewbox .col-12');
    if (get_reviewbox.hasClass('show')){

      get_reviewbox.css('margin-top','-'+reviewbox_height+'px');
      get_reviewbox.removeClass('show');
      $('#reviewbutton').css('opacity', '1');
    }else{
      get_reviewbox.css('margin-top', '0rem');
      get_reviewbox.addClass('show');
      $('#reviewbutton').css('opacity', '0');
    }
  });
  $('.account').click(function() {
    //Conditional states allow the dropdown box appear and disappear 
    if ($('#signin-dropdown').is(":visible")) {
      $('#account img').attr('src', 'img/account-gray.png');

      $('#signin-dropdown').hide();
      // $('#session').removeClass('active'); // When the dropdown is not visible removes the class "active"
    } else if ($('#cart-dropdown').is(":visible")) {
      $('#cart-dropdown').hide();
      $('#signin-dropdown').show();
      $('#account img').attr('src', 'img/account-blue.png');
      $('#car img').attr('src', 'img/cart-gray.png');
    } else {
      $('#signin-dropdown').show();
      $('#account img').attr('src', 'img/account-blue.png');
      // $('#session').addClass('active'); // When the dropdown is visible add class "active"
    }
    return false;
  });
  $('.close').click(function() {
    $('#cart-dropdown').hide();
    $('#signin-dropdown').hide();
  });
  $('.car').click(function() {
    //Conditional states allow the dropdown box appear and disappear 
    if ($('#cart-dropdown').is(":visible")) {
      $('#car img').attr('src', 'img/cart-gray.png');

      $('#cart-dropdown').hide();
    } else if ($('#signin-dropdown').is(":visible")) {
      $('#signin-dropdown').hide();
      $('#cart-dropdown').show();
      $('#car img').attr('src', 'img/cart-blue.png');
      $('#account img').attr('src', 'img/account-gray.png');
    } else {
      $('#cart-dropdown').show();
      $('#car img').attr('src', 'img/cart-blue.png');
      // $('#session').addClass('active'); // When the dropdown is visible add class "active"
    }
    return false;
  });

  $(".account").mouseover(function() {
    $('#account img').attr('src', 'img/account-blue.png');
  });
  $(".account").mouseout(function() {
    if ($('#signin-dropdown').is(":visible")) {} else {
      $('#account img').attr('src', 'img/account-gray.png');
    }
  });

  $(".car").mouseover(function() {
    $('#car img').attr('src', 'img/cart-blue.png');
  });
  $(".car").mouseout(function() {
    if ($('#cart-dropdown').is(":visible")) {} else {
      $('#car img').attr('src', 'img/cart-gray.png');
    }
  });

  // Allow to hide the dropdown box if you click anywhere on the document.
  $('#signin-dropdown').click(function(e) {
    e.stopPropagation();
  });
  $(document).click(function() {
    $('#signin-dropdown').hide();
    $('#account img').attr('src', 'img/account-gray.png');
    $('#session').removeClass('active');
  });

  $('#cart-dropdown').click(function(e) {
    e.stopPropagation();
  });
  $(document).click(function() {
    $('#cart-dropdown').hide();
    $('#car img').attr('src', 'img/cart-gray.png');
    // $('#session').removeClass('active');
  });

  // active-selector
  ////////////////////////////////////////////////////////////
  $('.selector1').click(function() {
    $('.map').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.556911462007!2d-123.11565470000001!3d49.284792599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867178a02327df%3A0xae269f5b2079009e!2s701+W+Georgia+St%2C+Vancouver%2C+BC+V7Y+1G5!5e0!3m2!1szh-CN!2sca!4v1434675680726');
    $('#mapbutton1').addClass('active-selector');
    $('#mapbutton2').removeClass('active-selector');
    $('#mapbutton3').removeClass('active-selector');

  });
  $('.selector2').click(function() {
    $('.map').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.653562058235!2d-123.00242700000001!3d49.226096899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676591c4c6959%3A0xc7c7bbcfb62a3fea!2s4700+Kingsway%2C+Metropolis+at+Metrotown%2C+Burnaby%2C+BC+V5H+4M1!5e0!3m2!1szh-CN!2sca!4v1434683773650');
    $('#mapbutton2').addClass('active-selector');
    $('#mapbutton1').removeClass('active-selector');
    $('#mapbutton3').removeClass('active-selector');
  });
  $('.selector3').click(function() {
    $('.map').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.896023727295!2d-123.133584!3d49.183559599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486752610cae919%3A0x6f154322368322b6!2zNDE1MSBIYXplbGJyaWRnZSBXYXksIOaZguS7o-WdiiBSaWNobW9uZCwgQkMgVjZYIDBBNA!5e0!3m2!1szh-CN!2sca!4v1434683814089');
    $('#mapbutton3').addClass('active-selector');
    $('#mapbutton1').removeClass('active-selector');
    $('#mapbutton2').removeClass('active-selector');
  });

});