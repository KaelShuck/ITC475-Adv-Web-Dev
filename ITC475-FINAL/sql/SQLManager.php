<?php

class SQLManager{

	private $servername = 'localhost';
	private $username = 'root';
	private $password = '';
	private $database = 'racing';
	private $conn = null;

	function __construct(){
		//mysqli_report(MYSQLI_REPORT_ALL);
		$this->conn = new mysqli($this->servername, $this->username, $this->password, $this->database);
	}

	function __destruct(){
		if($this->conn !== null && $this->isConnected()){
			$this->conn->close();
		}
	}

	function isConnected(){
		if($this->conn->connect_error){
			return false;
		}
		return true;
	}

	function connectedOrDie(){
		if($this->conn->connect_error){
			die("MySQL Connection failed: " . $this->conn->connect_error);
		}
	}

	function addRace($winner, $loser){
		$statement = $this->conn->prepare(
			"INSERT INTO races (timestamp, winner, loser) VALUES (?,?,?)"
		);
		if($statement){
			$statement->bind_param("iii", $t, $w, $l);

			$t = time();
			$w = $winner;
			$l = $loser;
			$statement->execute();

			$statement->close();
		}else{
			throw new Exception("Add race sql statement error.");
		}
	}

	function latestRaces(){
		$races = [];

		$s = "SELECT * FROM `races` ORDER BY id DESC LIMIT 5;";
		$result = $this->conn->query($s);

		if($result->num_rows > 0){
			while($row = $result->fetch_assoc()){
				array_push($races,
					[
						't' => $row['timestamp'],
						'w' => $row['winner'],
						'l' => $row['loser'],
					]
				);
			}
		}

		return $races;
	}

	function searchRaces($racer1, $racer2){
		$races = [];

		$statement = $this->conn->prepare(
			"SELECT * FROM `races` WHERE (winner=? AND loser=?) OR (winner=? AND loser=?) ORDER BY id DESC LIMIT 10;"
		);

		if($statement){
			$statement->bind_param("iiii", $r1, $r2, $rr2, $rr1);

			$r1 = $racer1;
			$rr1 = $racer1;
			$r2 = $racer2;
			$rr2 = $racer2;
			$statement->execute();
			$result = $statement->get_result();
			if($result->num_rows > 0){
			while($row = $result->fetch_assoc()){
					array_push($races,
						[
							't' => $row['timestamp'],
							'w' => $row['winner'],
							'l' => $row['loser'],
						]
					);
				}
			}

			$statement->close();
		}else{
			throw new Exception("Search races sql statement error.");
		}

		return $races;
	}

}

global $sql;
$sql = new SQLManager();

?>