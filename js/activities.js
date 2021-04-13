function ShowHideNZDiv()
{
    var chkNZ = document.getElementById("chkNZ");
    var dvNZActivities = document.getElementById("dvNZActivities");
    dvNZActivities.style.display = chkNZ.checked ? "block" : "none";
    dvMalActivities.style.display = "none";
    dvITActivities.style.display = "none";
    dvCanActivities.style.display = "none";
}

function ShowHideMalDiv()
{
    var chkMal = document.getElementById("chkMal");
    var dvMalActivities = document.getElementById("dvMalActivities");
    dvMalActivities.style.display = chkMal.checked ? "block" : "none";
    dvNZActivities.style.display = "none";
    dvITActivities.style.display = "none";
    dvCanActivities.style.display = "none";
}


function ShowHideITDiv()
{
    var chkIT = document.getElementById("chkIT");
    var dvITActivities = document.getElementById("dvITActivities");
    dvITActivities.style.display = chkIT.checked ? "block" : "none";
    dvNZActivities.style.display = "none";
    dvMalActivities.style.display = "none";
    dvCanActivities.style.display = "none";
}


function ShowHideCanDiv()
{
    var chkCan = document.getElementById("chkCan");
    var dvCanActivities = document.getElementById("dvCanActivities");
    dvCanActivities.style.display = chkCan.checked ? "block" : "none";
    dvNZActivities.style.display = "none";
    dvMalActivities.style.display = "none";
    dvITActivities.style.display = "none";
}


// Below Function Executes On Form Submit
function ValidationEvent() 
{
    /* var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var truTime = parseFloat(time);
    var dateTime = date+' '+time;  */


    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var phoneNo = document.getElementById("phoneNo").value;
    var emailAddress = document.getElementById("email").value;
    var numAdults = document.getElementById("noOfAdults").value;
    var numChildren = document.getElementById("noOfChild").value;
    var travelDates = document.getElementById("date").value;
    
    var tDate = Date.parse(travelDates);
    var today = new Date();

    var tDay = Date.parse(today);


    if (fName !== null && fName !== '' && lName !== null && lName !== '' && phoneNo !== null && phoneNo !== '' && emailAddress !== null &&
    emailAddress != '' && numAdults !== null && numAdults !== '' && numChildren !== '' && travelDates !== null && travelDates !== '' && tDate >= tDay && isNaN(phoneNo) )
    {
        alert("Success!");
        return true;
    }
    else
    {
        alert("Invalid Input");
        return false;
    }


    
}
    