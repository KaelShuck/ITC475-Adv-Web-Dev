
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var truTime = parseFloat(time);
var dateTime = date+' '+time;

function timeChange(){
  if(truTime < 12)
  {
    var newImage = document.getElementById('sunmoon');
    newImage.src = "images/sun.jpg";
    document.write('<h4 style="text-align: center;">Good Morning</h4>');
    document.write(`<h5 style="text-align: center;">Time is ${time} </h5>`);
  }
  else if(truTime < 18)
  {
    if(truTime > 12 && truTime < 15)
    {
      var newImage = document.getElementById('sunmoon');
      newImage.src = "images/sun3.jpg";
    }
    else if(truTime > 15 && truTime < 18)
    {
      var newImage = document.getElementById('sunmoon');
      newImage.src = "images/sunset.jpg";
    }
    else
    {
      var newImage = document.getElementById('sunmoon');
      newImage.src = "images/sunset.jpg";
    }
    document.write('<h4 style="text-align: center;">Good Afternoon</h4>');
    document.write(`<h5 style="text-align: center;">Time is ${time} </h5>`);
  }
  else
  {
    var newImage = document.getElementById('sunmoon');
    newImage.src = "images/moon2.jpg";
    document.write('<h4 style="text-align: center;">Good Evening</h4>');
    document.write(`<h5 style="text-align: center;">Time is ${time} </h5>`);
  }
}

timeChange();
