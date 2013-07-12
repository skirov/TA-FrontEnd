<?php
	function calculate($firstNumber, $secondNumber, $sign){
		if ($sign == '+') {
			return $firstNumber + $secondNumber;
		} 
		elseif ($sign == '-') {
			return $firstNumber - $secondNumber;
		} 
		elseif($sign == '*') {
			return $firstNumber * $secondNumber;
		}
		else {
			return $firstNumber / $secondNumber;
		}
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>04.ValdateCalculation</title>
		
		<script src="scripts/validation.js"></script>
	</head>
	<body>
		<form action="validate.php" method="post" name="myForm" onsubmit="return validate()">
			<fieldset>
			    <legend>Calculate</legend>
				
					<label for="firstNumber">
						Enter a number
					</label>
					<input type="text" name="firstNumber" value="" id="firstNumber"/>
					
					<br />
					
					<label for="sign">
						Enter a sign(+,-,/,*)
					</label>
					<input type="text" name="sign" value="" id="sign"/>
					
					<br />
					
					<label for="secondNumber">
						Enter a number
					</label>
					<input type="text" name="secondNumber" value="" id="secondNumber"/>
					
					<br />
					
					<input type="submit" name="submit" value="Submit" id="submit" />
			</fieldset>
		</form>
		
	<p>
		
		<?php 
			$firstNumber = trim(htmlspecialchars($_POST["firstNumber"]));
			$secondNumber = trim(htmlspecialchars($_POST["secondNumber"]));
			$sign = trim(htmlspecialchars($_POST["sign"]));
			
			if (isset($_POST["submit"])) {
				
				echo "The result is " . calculate($firstNumber, $secondNumber, $sign); 
				
			}
		?>
		
	</p>

	</body>
</html>