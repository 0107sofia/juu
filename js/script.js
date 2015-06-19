$(document).ready(function () {
$('.account').click(function () {
    //Conditional states allow the dropdown box appear and disappear 
    if ($('#signin-dropdown').is(":visible")) {
        $('#account img').attr('src','img/account-gray.png');


        $('#signin-dropdown').hide();
        $('#session').removeClass('active'); // When the dropdown is not visible removes the class "active"
    } else {
        $('#signin-dropdown').show();
        $('#account img').attr('src','img/account-blue.png');
        $('#session').addClass('active'); // When the dropdown is visible add class "active"
    }
    return false;
});

$( ".account" ).mouseover(function() {
  $('#account img').attr('src','img/account-blue.png');
});
$( ".account" ).mouseout(function() {
    if ($('#signin-dropdown').is(":visible")) {

    }else{
  $('#account img').attr('src','img/account-gray.png');
}
});
// Allow to hide the dropdown box if you click anywhere on the document.
$('#signin-dropdown').click(function(e) {
e.stopPropagation();
});
$(document).click(function() {
    $('#signin-dropdown').hide();
    $('#account img').attr('src','img/account-gray.png');
$('#session').removeClass('active');
});
});   

//js code from: http://www.alessioatzeni.com/blog/signin-dropdown-box-like-twitter-with-jquery/