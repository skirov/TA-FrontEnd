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
	
	<a href="index.php">&larr; Back</a>

	</body>
</html>