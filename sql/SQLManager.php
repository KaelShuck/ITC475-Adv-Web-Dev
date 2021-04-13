<?php

require_once("data/trip.php");
require_once("data/user.php");

class SQLManager{

	private $servername = 'localhost';
	private $username = 'root';
	private $password = '';
	private $database = 'megatravel';
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

	function getUser($username, $password){
		$statement = $this->conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
		if($statement){
			$statement->bind_param("ss", $u, $p);
			$u = $username;
			$p = $password;
			$statement->execute();
			$result = $statement->get_result();
			if($result){
				$row = $result->fetch_assoc();
				if($row){
					return new User($row['id'], $row['username'], $row['email'], $row['access']);
				}
			}
		}else{
			throw new Exception("Get User sql statement error.");
		}
		return null;
	}

	function getUserByToken($token){
		if(strlen($token) >= 128){
			$statement = $this->conn->prepare("SELECT * FROM users WHERE token=?");
			if($statement){
				$statement->bind_param("s", $t);
				$t = $token;
				$statement->execute();
				$result = $statement->get_result();
				if($result){
					$row = $result->fetch_assoc();
					if($row){
						return new User($row['id'], $row['username'], $row['email'], $row['access']);
					}
				}
			}else{
				throw new Exception("Get User via Token sql statement error.");
			}
		}
		return null;
	}

	function setTokenUser($user, $token){
		$statement = $this->conn->prepare("UPDATE users SET token=? WHERE id=?");
		if($statement){
			$statement->bind_param("si", $t, $id);
			$t = $token;
			$id = $user->id;
			$statement->execute();
		}else{
			throw new Exception("Set Token sql statement error.");
		}
	}

	function insertTrip($trip){
		$statement = $this->conn->prepare(
			"INSERT INTO trips (fname, lname, phone, email, adults, children, destination, dates, activities) VALUES (?,?,?,?,?,?,?,?,?)"
		);
		if($statement){
			$statement->bind_param("ssssiiiss", $fname, $lname, $phone, $email, $adults, $children, $destination, $dates, $activities);

			$fname = $trip->fname;
			$lname = $trip->lname;
			$phone = $trip->phone;
			$email = $trip->email;
			$adults = $trip->adults;
			$children = $trip->children;
			$destination = $trip->destination;
			$dates = $trip->travelDate;
			$activities = $trip->getActivitiesStr();
			$statement->execute();

			$statement->close();
		}else{
			throw new Exception("Trip sql statement error.");
		}
	}

	//Get all trips
	function getTrips(){
		$trips = [];

		$s = "SELECT * FROM trips";
		$result = $this->conn->query($s);

		if($result->num_rows > 0){
			while($row = $result->fetch_assoc()){
				array_push($trips, new Trip(
					$row['fname'],
					$row['lname'],
					$row['phone'],
					$row['email'],
					$row['adults'],
					$row['children'],
					$row['destination'],
					$row['dates'],
					array_diff(explode(',', $row['activities']), array("")),
				));
			}
		}

		return $trips;
	}

}

global $sql;
$sql = new SQLManager();

?>