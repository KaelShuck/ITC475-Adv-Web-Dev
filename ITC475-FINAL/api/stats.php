<?php

header('Content-type: application/json');

require_once("sql/SQLManager.php");

$reply = [
	'response' => 'fail',
	'msg' => 'NONE',
];
 
if(isset($_POST['r'])){
	$sql->connectedOrDie();

	if($_POST['r'] == '1'){
		$reply['races'] = $sql->latestRaces();
		$reply['response'] = 'SUCCESS';
	}else if($_POST['r'] == '2'){
		$reply['races'] = $sql->searchRaces($_POST['racer1'], $_POST['racer2']);
		$reply['response'] = 'SUCCESS';
	}else{
		$reply['msg'] = 'Invalid post data.';
	}

}else{
	$reply['msg'] = "Missing post data.";
}

echo json_encode($reply);

?>