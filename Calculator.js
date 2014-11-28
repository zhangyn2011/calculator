$(document).ready(function(){
	$('.numberkey').click(function(){
		var inputNum=$('#result').val($(this).val());
		$('#result').add (inputNum);
	});
});

var result=$('#result').add (inputNum);




