/*
	WEB 303 Assignment 1 - jQuery
	Jaspreet Kaur
*/

    
$(function(){
	
	$('#price').change(function(){
		var price = $('#price').val();
		var taxAmount = price * 0.13;
		$('span#tax').text("$" + taxAmount.toFixed(2));

		$('#add-price').click(function(){
			$('#price-list').text("$" + taxAmount);
		});
	});
});


          







