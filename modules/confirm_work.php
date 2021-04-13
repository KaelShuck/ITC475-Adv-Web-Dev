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