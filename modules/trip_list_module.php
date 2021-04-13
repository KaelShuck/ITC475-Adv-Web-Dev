<tr>
	<td><?php echo $trip->fname . ' ' . $trip->lname; ?></td>
	<td><?php echo $trip->phone; ?></td>
	<td><?php echo $trip->email; ?></td>
	<td><?php echo $trip->adults; ?></td>
	<td><?php echo $trip->children; ?></td>
	<td><?php echo $trip->getDestinationStr(); ?></td>
	<td><?php echo $trip->travelDate; ?></td>
	<td>
		<ul>
			<?php
				foreach($trip->activities as $a){
					echo "<li>" . $a . "</li>";
				}
			?>
		</ul>
	</td>
</tr>