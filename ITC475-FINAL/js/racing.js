
var racing = false;
var racer1Progress = 0;
var racer2Progress = 0;

var canvas;
var c;

window.onload = function(){
	for(let i = 0; i < racers.length; i++){
		racers[i].loadImage();
	}

	loadSelectors();
	loadCanvas();
	setInterval(function() {
		race();
	   	drawCanvas();
	}, 50);//50

	redlight();
}

window.onresize = function(){
	drawCanvas();
}

function selectRacer(selector){
	let elm = document.getElementById("racer" + selector);

	//Can't change racers mid race
	if(racing && racer1 !== null && racer2 !== null){
		if(selector == 1){
			elm.value = racer1.id;
		}else if(selector == 2){
			elm.value = racer2.id;
		}
		return;
	}

	if(elm.value > -1){
		let racer = racers[elm.value];
		if(selector == 1){
			if(racer2 != racer){
				racer1 = racer;
			}else{
				elm.value = -1;
			}
		}else{
			if(racer1 != racer){
				racer2 = racer; 
			}else{
				elm.value = -1;
			}
		}
	}else{
		if(selector == 1){
			racer1 = null;
		}else if(selector == 2){
			racer2 = null;
		}
	}
}

function loadCanvas(){
	c = document.getElementById("raceCanvas");
	canvas = c.getContext("2d");
}

function drawCanvas(){
	//canvas.fillStyle = "#FFF6CA";
	canvas.fillStyle = "#FFD700";
	canvas.fillRect(0, 0, c.width, c.height);

	//Draw course
	canvas.fillStyle = "#0000FF";
	canvas.fillRect(100, 90, c.width - (100*2), 10);
	canvas.fillRect(100, 10, 10, 150+20);
	canvas.fillRect(100 + (c.width - (100*2)) - 10, 10, 10, 150+20);

	canvas.fillStyle = "#FF0000";
	canvas.fillRect(100, c.height - 90, c.width - (100*2), 10);
	canvas.fillRect(100, c.height - 175, 10, 150+20);
	canvas.fillRect(100 + (c.width - (100*2)) - 10, c.height - 175, 10, 150+20);

	//Draw racers
	if(racer1 !== null){
		if(racer1.loaded){
			let width = 150.0;
			let height = 150.0;
			let x = (c.width - 98*2) * (racer1Progress/100);
			canvas.fillStyle = "#0000FF";
			canvas.fillRect(102 + x, 10, 6, 150+20);
			canvas.drawImage(racer1.image, 30 + x, 20, width, height);
		}else{
			alert('fail load');
		}
	}
	if(racer2 !== null){
		if(racer2.loaded){
			let width = 150.0;
			let height = 150.0;
			let x = (c.width - 98*2) * (racer2Progress/100);
			canvas.fillStyle = "#FF0000";
			canvas.fillRect(102 + x, c.height - 175, 6, 150+20);
			canvas.drawImage(racer2.image, 30 + x, c.height - 165, width, height);
		}else{
			alert('fail load');
		}
	}
}

function win(racer){
	redlight();
	if(racer == 1){
		racer1Progress = 100;
		$.post( "api/race", { w: racer1.id, l: racer2.id }, function( data ) {
			  postReturn(data);
			} ).fail(function(){
		  console.log("error with post request 1");
		});
		openModal(racer1);
	}else{
		racer2Progress = 100;
		$.post( "api/race", { w: racer2.id, l: racer1.id }, function( data ) {
			  postReturn(data);
			} ).fail(function(){
		  console.log("error with post request.");
		});
		openModal(racer2);
	}
	drawCanvas();

	racing = false;
}

function postReturn(data){
	if(!data.startsWith("SUCCESS")){
		alert( "Error saving race: " + data );
	}
}

function openModal(winner){
	let modal = document.getElementById("modal1");
	modal.style.display = "block";

	document.getElementById("winner").innerHTML = winner.name + " WON!";
	document.getElementById("wonimg").src = winner.image.src;
}

function closeModal(){
	let modal = document.getElementById("modal1");
	modal.style.display = "none";	
}

function race(){
	if(racing){
		racer1Progress += racer1.randomProgress();
		racer2Progress += racer2.randomProgress();
		if(racer1Progress >= 100 || racer2Progress >= 100){
			if(racer1Progress > racer2Progress){
				win(1);
			}else if(racer1Progress < racer2Progress){
				win(2);
			}else{
				win(randomNum(1, 2));
			}
		}
	}
}

function startRace(random = 0){
	if(!racing){
		if(random){
			racer1 = racers[randomNum(0, racers.length-1)];
			do{
				racer2 = racers[randomNum(0, racers.length-1)];
			}while(racer2 == racer1);

			document.getElementById("racer1").value = racer1.id;
			document.getElementById("racer2").value = racer2.id;	
		}

		if(racer1 !== null && racer2 !== null){
			racer1.startRace();
			racer2.startRace();
			racer1Progress = 0;
			racer2Progress = 0;

			//effective track size
			divider = randomNum(80, 120);

			document.getElementById("racer1").disabled = true;
			document.getElementById("racer2").disabled = true;

			racing = true;
			greenlight();
		}else{
			alert("Please select two racers.");
		}
	}
}

function raceAgain(){
	document.getElementById("racer1").disabled = false;
	document.getElementById("racer2").disabled = false;
	racer1Progress = 0;
	racer2Progress = 0;
	closeModal();
}

function randomNum(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function redlight(){
	document.getElementById("header").style.background = "#ff6666";
	document.getElementById("race").style.background = "#ff6666";
	document.getElementById("random-race").style.background = "#ff6666";
}

function greenlight(){
	document.getElementById("header").style.background = "#00cc00";
	document.getElementById("race").style.background = "#00cc00";
	document.getElementById("random-race").style.background = "#00cc00";
}