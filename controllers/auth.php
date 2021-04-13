<?php

require_once("sql/SQLManager.php");

class Auth {

	public $user = null;

	function check(){
		if(isset($_SESSION['token'])){
			global $sql;
			$this->user = $sql->getUserByToken($_SESSION['token']);
		}
	}

	function login($username, $password){
		$password = md5($password);
		global $sql;
		$this->user = $sql->getUser($username, $password);

		if($this->user !== null){
			$token = $this->randomString(128);
			$sql->setTokenUser($this->user, $token);
			$_SESSION['token'] = $token;
		}
	}

	function logout(){
		if($this->user !== null){
			global $sql;
			$sql->setTokenUser($this->user, "");
			if(isset($_SESSION['token'])){
				unset($_SESSION['token']); 
    		}
		}
	}

	function isAdmin(){
		if($this->user !== null && $this->user->access >= 9){
			return true;
		}
		return false;
	}

	function isLoggedIn(){
		return $this->user !== null;
	}

	function randomString($length = 255) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}

}

$sql->connectedOrDie();

$auth = new Auth();
$auth->check();

?>