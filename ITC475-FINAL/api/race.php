<?php

require_once("sql/SQLManager.php");

if(isset($_POST['w']) && isset($_POST['l'])){
	$sql->connectedOrDie();

	try{
		$sql->addRace(intval($_POST['w']), intval($_POST['l']));
	}catch(Exception $e){
		echo "FAIL - SQL Failure";
		throw $e;
	}

	echo "SUCCESS";

}else{
	echo "FAIL - Missing post data.";
}

?>