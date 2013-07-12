<?php
	function IsDivisible($number){
		if ($number % 3 == 0 && $number % 7 == 0) {
			return " is ";
		} else {
			return " is not ";
		}
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>03.Divisible by 3 and 7</title>
	</head>
	<body>
		<form action="index.php" method="post" accept-charset="utf-8">
			<fieldset>
			    <legend>Is the number divisible by 5 and 7</legend>
				
					<label for="number">
						Enter a number
					</label>
					<input type="text" name="number" value="" id="number"/>
					
					<input type="submit" name="submit" value="Submit" id="submit" />
			</fieldset>
		</form>
		
	<p>
		
		<?php 
			$number = trim(htmlspecialchars($_POST["number"]));
			
			if (isset($_POST["submit"])) {
				
				echo "The number" . IsDivisible($number) . "by 3 and 7 at the same time"; 
				
			}
		?>
		
	</p>
	</body>
</html>