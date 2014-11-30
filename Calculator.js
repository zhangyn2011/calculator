$(document).ready(function(){
/*	
	$('.numberkey').click(function(){
		var inputNum=$('#result').val($(this).val());
		$('#result').add (inputNum);
	});
*/
	$('.numberkey').click(function(){
		var result =$('#result').val()+$(this).val();
		console.log($(this).val());
		console.log($('#result').val());
		console.log(result);
		$('#result').val(result);
	});
	
	
	
	
});

var result=$('#result').add (inputNum);
var clickbutton=function (){
	


	
}



