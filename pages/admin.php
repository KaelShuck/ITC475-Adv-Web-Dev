<?php

require_once("sql/SQLManager.php");
require_once("controllers/auth.php");

if(!$auth->isAdmin()){
	header("Location: login");
	die();
}

$sql->connectedOrDie();

$trips = $sql->getTrips();
$trip = null;

?>

<div>
	<h2>Trip Confirmations</h2>
	<table>
		<tr>
			<th>Name</th>
			<th>Phone</th>
			<th>Email</th>
			<th># Adults</th>
			<th># Children</th>
			<th>Destination</th>
			<th>Travel Date</th>
			<th>Activities</th>
		</tr>
		<?php
			foreach($trips as $t){
				global $trip;
				$trip = $t;
				require("modules/trip_list_module.php");
			}
		?>
	</table>
	<br>
	<div class="padding20">
		<input type="button" class="btn-lg" value="Logout" onclick="window.location.replace('logout');">
	</div>
</div>