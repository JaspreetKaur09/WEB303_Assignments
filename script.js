/*
	WEB 303 Assignment 1 - jQuery
	Jaspreet Kaur
*/
console.log('jass');
var $price = $('#price');

$price.change(function(){
    var $taxAmount = $price * (13/100);
	$('span#tax').replacewith($taxAmount);
	$taxAmount.toFixed(2);

})

