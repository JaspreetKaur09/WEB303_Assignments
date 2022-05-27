/*
	WEB 303 Assignment 1 - jQuery
	Jaspreet Kaur
*/


	$("#price").change(function(){
		var price = $("#price").val();
		var taxAmount = price + 0.13;
		$("#tax").text("$" + taxAmount.tofixed(2));
	});

	$("#add-price").click(function(){
		console.log("jass");
		$("#price-list").text("$" + taxAmount);
	});
	

          







