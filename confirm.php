<?php

    if(isset($_POST['fName'], $_POST['lName'], $_POST['phoneNo'], $_POST['email'], $_POST['noOfAdults'], $_POST['noOfChild'], $_POST['date'], $_POST['destination'])){
        $destNames = [
            'New Zealand',
            'Maldives, South Asia',
            'Venice, Italy',
            'Cancun',
        ];  

        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $phoneNo = $_POST['phoneNo'];
        $email = $_POST['email'];
        $noOfAdults = $_POST['noOfAdults'];
        $noOfChild = $_POST['noOfChild'];
        $date = $_POST['date'];
        $destination = $_POST['destination'];
        $destName = $destNames[$destination];

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

        /*for($i = 0; $i < sizeof($activities); $i++){
            echo 'activi: ' . $activities[$i];
        }*/
    }else{
        //echo 'fail';
        header("Location: contactform.html");
        die();
    }

?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Confirmation - Mega Travel</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <script src="activities.js"></script>
    <header>
        <img src="images/mega travel logo.png" height="200px" alt="logo"/>
    </header>
    <section>
        <div class="bar"> </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutus.html">About Us</a></li>
                <li><a href="contactform.html">Contact Agent</a></li>
            </ul>
        </nav>
    </section>
    <div>
        <h2>Thank you for submitting your travel agent contact request! Here is the information you submitted:</h2>
        <p><strong>Client Name: </strong><?php echo $fName . ' ' . $lName; ?></p>
        <p><strong>Client Phone Number: </strong><?php echo $phoneNo; ?></p>
        <p><strong>Client Email: </strong><?php echo $email; ?></p>
        <p><strong>Number of Adults: </strong><?php echo $noOfAdults; ?></p>
        <p><strong>Number of Children: </strong><?php echo $noOfChild; ?></p>
        <p><strong>Destination: </strong><?php echo $destName; ?></p>
        <p><strong>Travel Dates: </strong><?php echo $date; ?></p>
        <p><strong>Interested Activities: </strong></p>
        <ul>
            <?php
                for($i = 0; $i < sizeof($activities); $i++){
                    echo '<li>' . $activities[$i] . '</li>';
                }
            ?>
        </ul>
    </div>
</body>
<footer>
    <p>
        Copyright Protected. All Rights Reserved.
    </p><br/>
    <p>MEGA TRAVELS</p>
    <p>mega@travels.com</p>
</footer>

</html>