<?php

class Trip {

	public $fname;
	public $lname;
	public $phone;
	public $email;
	public $adults;
	public $children;
	public $destination;
	public $travelDate;
	public $activities = [];

	function __construct($fname, $lname, $phone, $email, $adults, $children, $destination, $travelDate, $activities){
		$this->fname = $fname;
		$this->lname = $lname;
		$this->phone = $phone;
		$this->email = $email;
		$this->adults = $adults;
		$this->children = $children;
		$this->destination = $destination;
		$this->travelDate = $travelDate;
		$this->activities = $activities;
	}

	function getActivitiesStr(){
		$str = "";
		foreach($this->activities as $a){
			$str .= $a . ',';
		}
		return $str;
	}

	function getDestinationStr(){
		$destNames = [
            'New Zealand',
            'Maldives, South Asia',
            'Venice, Italy',
            'Cancun',
        ];
        return $destNames[$this->destination];
	}

}

?>