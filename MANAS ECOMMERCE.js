<!DOCTYPE html>
<html>
<head>
	<title>eCommerce Login</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f2f2f2;
		}

		.container {
			margin: 0 auto;
			width: 80%;
			padding: 30px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 10px rgba(0,0,0,0.3);
		}

		h1 {
			text-align: center;
			margin-bottom: 30px;
		}

		input[type=text], input[type=password] {
			width: 100%;
			padding: 12px 20px;
			margin: 8px 0;
			display: inline-block;
			border: 1px solid #ccc;
			border-radius: 4px;
			box-sizing: border-box;
		}

		button {
			background-color: #4CAF50;
			color: white;
			padding: 14px 20px;
			margin: 8px 0;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			width: 100%;
		}

		button:hover {
			background-color: #45a049;
		}
	</style>
</head>
<body>
	<div class="container">
		<h1>Login to your eCommerce account</h1>
		<form>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" placeholder="Enter your username">

			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="Enter your password">

			<button type="submit" onclick="login()">Login</button>
		</form>
	</div>

	<script>
		function login() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;

			// Your login validation code goes here
			if(username == "example" && password == "password") {
				alert("Login successful");
				window.location.href = "dashboard.html"; // Redirect to dashboard page
			} else {
				alert("Invalid username or password");
			}
		}
	</script>
</body>
</html>
