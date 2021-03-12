 
 function timeInput()
 {
  //Capturing User desired On / Off times 
  var livingRoomLamp = document.getElementById("livingroom").value;
  var livingRoomLampOff = document.getElementById("livingroomoff");
  var deskLamp = document.getElementById("bedroom");
  var deskLampOff = document.getElementById("bedroomoff");
  var floorLamp = document.getElementById("floor");
  var floorLampOff = document.getElementById("flooroff");
  var bathroomFan = document.getElementById("bathroom");
  var bathroomFanOff = document.getElementById("bathroomoff");
  var washer = document.getElementById("washer");
  var washerOff = document.getElementById("washeroff");
  var dryer = document.getElementById("dryer");
  var dryerOff = document.getElementById("dryeroff");
  var frontDoor = document.getElementById("frontdoor");
  var frontDoorOff = document.getElementById("frontdooroff");
  var backDoor = document.getElementById("backdoor");
  var backDoorOff = document.getElementById("backdooroff");
  var garageDoor = document.getElementById("garage");
  var garageDoorOff = document.getElementById("garageoff");
  var kitchenFan = document.getElementById("kitchen");
  var kitchenFanOff = document.getElementById("kitchenoff");
  var diningRoomLight = document.getElementById("diningroom");
  var diningRoomLightOff = document.getElementById("diningroomoff");

  //Get System Time
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  if(h == '0') 
  {
    h = 24
  }
  
  var currentTime = h+"."+m;
  alert(currentTime);

  //Get Appliances Time
  var lroomTime = livingRoomLamp.split(":");
  var hour = lroomTime[0];
  if(hour == '00') 
  {
    hour = 24
  }
  var min = lroomTime[1];

  var inputTime = hour+"."+min;
  alert(inputTime);




  //Conditional to Switch Images to On or Off based on user's current time
  if(inputTime < currentTime)
  {
    alert("Test");
    var swapImage = document.getElementById('lroom');
    swapImage.src = "livinglamp.png"
  }


  //Need Loop to Display this while Running
  var n = d.toLocaleTimeString();
  document.getElementById("timeClock").innerHTML = n;
  document.querySelectorAll('.inline-block #lroom').innerHTML = n;

  
}
