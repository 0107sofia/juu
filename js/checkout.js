$(document).ready(function() {

	$('.mobile-summary-detail').css('display','none');
	var summarybox_height=$('.mobile-summary-detail').height()+10;
	console.log(summarybox_height);
	$('.mobile-summary-detail').css('margin-top','-'+summarybox_height+'px');
	setTimeout(function() {
    	$('.mobile-summary-detail').css('display','block');
	}, 500);

	//slide down check out summary
	$('.mobile-summary').click(function() {
		$('.mobile-summary-detail').css('display','block');
		if ($('.mobile-summary-detail').hasClass('show')){
			$('.mobile-summary-detail').css('margin-top','-'+summarybox_height+'px');
			$('.mobile-summary-detail').removeClass('show');
			$('.mobile-summary img').attr('src','img/down.png');
		}else{
			

			$('.mobile-summary img').attr('src','img/up.png');
			$('.mobile-summary-detail').css('margin-top','0px');
			$('.mobile-summary-detail').addClass('show');
		}
	});

	$('.same-address input').click(function(){
		
		if ($('.same-address input').is(':checked')){
			console.log('checked');
			$('.billingForm').hide();
		}else{
			console.log('unchecked');
			$('.billingForm').show();
		}
	});
//let the label display inside the input
	$("div[class^='field-'] input").keyup(function() {
		console.log($(this).val().length);

		if( $(this).val().length === 0 ) {
			$(this).css('padding-bottom','0.8rem');
			$(this).css('padding-top','0.8rem');
			$(this).parent().find('label').css('opacity','0');
		}else{
			$(this).css('padding-bottom','0.3rem');
			$(this).css('padding-top','1.3rem');
			$(this).parent().find('label').css('opacity','1');
		}
		
	});


	
});