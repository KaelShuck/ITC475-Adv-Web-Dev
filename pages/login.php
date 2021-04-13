<?php

require_once("sql/SQLManager.php");
require_once("controllers/auth.php");

$attempt = false;
if(isset($_POST['username']) && isset($_POST['password'])){
	$attempt = true;

	$auth->login($_POST['username'], $_POST['password']);
}

if($auth->isLoggedIn()){
	if($auth->isAdmin()){
		header("Location: admin");
		die();
	}else{
		header("Location: home");
		die();
	}
}

?>

<div>
	<h2>Login</h2>
	<form id="form1" action="login" method="post">
		<?php 
		if(!$auth->isLoggedIn() && $attempt){
			echo "<h3 style=\"color:red;\">Incorrect login details</h3>";
		} 
		?>
		<div class="padding20">
			<label for="username">Username:</label>
			<input type="text" id="username" name="username" class="input-lg">
		</div>
		<div class="padding20">
			<label for="username">Password:</label>
			<input type="password" id="password" name="password" class="input-lg">
		</div>
		<div class="padding20">
			<input type="submit" value="Login" class="btn-lg"> 
		</div>
	</form>
</div>