	$(document).ready(function(){
	/*	
	$('.numberkey').click(function(){
		var inputNum=$('#result').val($(this).val());
		$('#result').add (inputNum);
	});
	*/
	$('.numberkey').click(function(){
		var input =$('#result').val()+$(this).val();
		
		$('#result').val(input);
		
	});
	
	$('#equal').click(function(){
		
		//获取输入的字符串
		//对获取的字符串判断包含哪一个运算符
		//然后根据运算符分割
		//然后进行相应运算
		//得到运算结果
		
				
		var result=$('#result').val();
		if(result.indexOf("+")>0){
			result= result.split("+");
			var sum = parseInt(result[0])+ parseInt(result[1]);
			$('#result').val(sum);
		} else if(result.indexOf("-")>0){
			result= result.split("-");
			var minus = parseInt(result[0])- parseInt(result[1]);
			$('#result').val(minus);
		} else if(result.indexOf("*")>0){
			result= result.split("*");
			var multiply = parseInt(result[0])* parseInt(result[1]);
			$('#result').val(multiply);
		} else if(result.indexOf("/")>0){
			result= result.split("/");
			var divide = parseInt(result[0])/ parseInt(result[1]);
			$('#result').val(divide);
		} else{
			alert("please clicknumber");
			}
	});
	$('#clear').click(function(){
		$('#result').val('');	
	
		});	
});