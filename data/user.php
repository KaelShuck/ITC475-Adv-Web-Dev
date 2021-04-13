<?php

class User {

	public $id;
	public $username;
	public $email;
	public $access;

	function __construct($id, $username, $email, $access){
		$this->id = $id;
		$this->username = $username;
		$this->email = $email;
		$this->access = $access;
	}

}

?>