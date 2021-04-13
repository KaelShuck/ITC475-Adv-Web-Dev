<form id="form1" action="confirm" method="post" onsubmit="return ValidationEvent()">
    <div class="selection">
        <span>Choose a destination to see activites</span><br>
        <br/>
        <label for="chkNZ">
            <input type="radio" id="chkNZ" name="destination" onClick="ShowHideNZDiv()" value="0"/>
            New Zealand
        </label>
        <label for="chkMal">
            <input type="radio" id="chkMal" name="destination" onClick="ShowHideMalDiv()" value="1"/>
            Maldives, South Asia
        </label>
        <label for="chkIT">
            <input type="radio" id="chkIT" name="destination" onClick="ShowHideITDiv()" value="2"/>
            Venice, Italy
        </label>
        <label for="chkCan">
            <input type="radio" id="chkCan" name="destination" onClick="ShowHideCanDiv()" value="3"/>
            Cancun
        </label>
    </div>

    <div class="activitiesGroup">
        <div id="dvNZActivities" style="display: none">
        <input type="checkbox" id="NZcitytour" name="NZcitytour" value="City Tour">
        <label for=NZcitytour>City Tour</label><br>
        <input type="checkbox" id="NZcycling" name="NZcycling" value="Cycling">
        <label for=NZcycling>Cycling</label><br>
        <input type="checkbox" id="NZmuseums" name="NZmuseums" value="Museums">
        <label for=NZmuseums>Museums</label><br>
        <input type="checkbox" id="NZboating" name="NZboating" value="Boating">
        <label for=NZboating>Boating</label><br>
    </div>

    <div id="dvMalActivities" style="display: none">
        <input type="checkbox" id="Malmuseum" name="Malmuseum" value="Museums">
        <label for=Malmuseum>Museums</label><br>
        <input type="checkbox" id="Malsailing" name="Malsailing" value="Sailing">
        <label for=Malsailing>Sailing</label><br>
        <input type="checkbox" id="Malbeach" name="Malbeach" value="Beach">
        <label for=Malbeach>Beach</label><br>
        <input type="checkbox" id="MalHiking" name="MalHiking" value="Hiking">
        <label for=MalHiking>Hiking</label><br>
        </div>


        <div id="dvITActivities" style="display: none">
            <input type="checkbox" id="ITmuseum" name="ITmuseum" value="Museums">
            <label for=ITmuseum>Museums</label><br>
            <input type="checkbox" id="ITTheatre" name="ITTheatre" value="Theatre">
            <label for=ITTheatre>Theatre</label><br>
            <input type="checkbox" id="ITParks" name="ITParks" value="Parks and Recreation">
            <label for=ITParks>Parks and Recreation</label><br>
            <input type="checkbox" id="ITCity" name="ITCity" value="City Tour">
            <label for=ITCity>City Tour</label><br>
            </div>

        <div id="dvCanActivities" style="display: none">
            <input type="checkbox" id="CanParks" name="CanParks" value="Parks and Recreation">
            <label for=CanParks>Parks and Recreation</label><br>
            <input type="checkbox" id="CanBeach" name="CanBeach" value="Beaches">
            <label for=CanBeach>Beaches</label><br>
            <input type="checkbox" id="CanBoating" name="CanBoating" value="Beaches">
            <label for=CanBoating>Boating</label><br>
            <input type="checkbox" id="CanSnorkel" name="CanSnorkel" value="Snorkeling">
            <label for=CanSnorkel>Snorkeling</label><br>
        </div>
    </div>

    <br>
    Client first name:<br>
    <input type="text" id="fName" name="fName">
    <br>
    Client last name:<br>
    <input type="text" id="lName" name="lName">
    <br>
    Client Phone Number:<br>
    <input type="tel" id="phoneNo" name="phoneNo" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4})"><small>Format: 123-456-7890</small>
    <br>
    Client Email:<br>
    <input type="email" id="email" name="email">
    <br>
    Number of Adults:<br>
    <input type="number" id="noOfAdults" name="noOfAdults">
    <br>
    Number of Children:<br>
    <input type="number" id="noOfChild" name="noOfChild">
    <br>
    Travel Dates:<br>
    <input name="date" id="date" type="date">
    <br>
    <input type="submit" value="Submit"> 
</form>
    </br>
    </br>



<section class="intro">
    <h1>Contact Form</h1>
    <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
</section>
