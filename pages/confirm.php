<?php

    require_once("sql/SQLManager.php");

    $success = false;

    if(isset($_POST['fName'], $_POST['lName'], $_POST['phoneNo'], $_POST['email'], $_POST['noOfAdults'], $_POST['noOfChild'], $_POST['date'], $_POST['destination'])){
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $phoneNo = $_POST['phoneNo'];
        $email = $_POST['email'];
        $noOfAdults = $_POST['noOfAdults'];
        $noOfChild = $_POST['noOfChild'];
        $date = $_POST['date'];
        $destination = $_POST['destination'];

        $activities = [];
        $checkActivities = [
            [
                'NZcitytour',
                'NZcycling',
                'NZmuseums',
                'NZboating',
            ],
            [
                'Malmuseum',
                'Malsailing',
                'Malbeach',
                'MalHiking',
            ],
            [
                'ITmuseum',
                'ITTheatre',
                'ITParks',
                'ITCity',
            ],
            [
                'CanParks',
                'CanBeach',
                'CanBoating',
                'CanSnorkel',
            ],
        ];

        for($j = 0; $j < sizeof($checkActivities[$destination]); $j++){
            if(isset(  $_POST[$checkActivities[$destination][$j]]  )){
                array_push($activities, $_POST[$checkActivities[$destination][$j]] );
            }
        }

        $sql->connectedOrDie();

        $trip = new Trip(
            $fName,
            $lName,
            $phoneNo,
            $email,
            $noOfAdults,
            $noOfChild,
            $destination,
            $date,
            $activities,
        );

        $sql->insertTrip($trip);

        $destName = $trip->getDestinationStr();

        /*for($i = 0; $i < sizeof($activities); $i++){
            echo 'activi: ' . $activities[$i];
        }*/
        $success = true;
    }else{
        $success = false;
        //echo 'fail';
        //header("Location: contact");
        //die();
    }

    if($success){
        require "modules/confirm_work.php";
    }else{
        echo "<div><h2>Failed to save your travel information.</h2></div>";
    }

?>