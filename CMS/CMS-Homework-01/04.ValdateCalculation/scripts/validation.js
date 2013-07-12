function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function validate(){
	var firstNumber = document.forms["myForm"]["firstNumber"].value;
	var secondNumber = document.forms["myForm"]["secondNumber"].value;
	var sign = document.forms["myForm"]["sign"].value;
	
	//check if fields are empty
	if (!firstNumber) {
		alert("Fill first number");
		return false;
	}
	else if (!sign) {
		alert("Fill sign");
		return false;
	}
	else if (!secondNumber) {
		alert("Fill second number");
		return false;
	}
	
	//check if entered values are correct
	if (!isNumber(firstNumber)) {
		alert("First input must be a number number");
		return false;
	}
        
	if (sign != '+' && sign != '-' && 
			 sign != '/' && sign != '*') {
		alert("Second input must be +,-, / or *");
		return false;
	}
        
	if (!isNumber(secondNumber)) {
		alert("Second input must be a number number");
		return false;
	}
}