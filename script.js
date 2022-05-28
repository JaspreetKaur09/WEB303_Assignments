/*
	WEB 303 Assignment 1 - jQuery
	Jaspreet Kaur
*/

    
$(function(){
	
	$('#price').change(function(){
		var price = $('#price').val();
		var taxAmount = price * 0.13;
		$('#tax').text("$" + taxAmount.toFixed(2));
	});

	$('#add-price').on('click',function(){
		$('ul#price-list').text("$" + taxAmount);
	});
	

});


          







