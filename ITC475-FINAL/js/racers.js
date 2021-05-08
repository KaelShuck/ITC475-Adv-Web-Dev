var root = "/ITC475-FINAL";
var divider = 100;

class Racer{

	constructor(id, name, podracer, speed, plusVariance, minusVariance, speedIncrease, lucky){
		this.id = id;
		this.name = name;
		this.podracer = podracer;
		this.speed = speed;
		this.plusVariance = plusVariance;
		this.minusVariance = minusVariance;
		this.speedIncrease = speedIncrease;
		this.lucky = lucky;
		this.image = new Image();
		this.loaded = false;
		this.invert = false;

		this.width = 0;
		this.height = 0;
	}

	loadImage(){
		let t = this;
		this.image.onload = function(){
			t.loaded = true;
			t.width = this.width;
			t.height = this.height;
		}

		this.image.src = root + "/images/podracers/" + this.podracer;
	}

	startRace(){
		this.speedNow = this.speed;
		if(randomNum(0, 100) <= this.lucky){
			this.speedBoost = randomNum(5, 10);
		}else{
			this.speedBoost = -randomNum(-5, 5);
		}
	}

	randomProgress(){
		let progress = this.speedNow;

		if(randomNum(0, 100) <= this.lucky){
			progress += randomNum(0, this.plusVariance);
			progress += this.speedBoost;
		}else{
			progress -= randomNum(0, this.minusVariance);
		}

		this.speedNow += this.speedIncrease;
		if(this.speedNow < 10){
			this.speedNow = 10;
		}

		if(progress < 5){
			progress = 5;
		}

		if(this.invert){
			progress *= -1;
		}

		if(this.id == 6){
			if(racer2.id == 6){
				if(racer2Progress > 90 && racer1Progress < 85){
					this.invert = true;
				}
				if(racer1Progress > 95 || racer2Progress < 40){
					this.invert = false;
				}
			}else{
				if(racer1Progress > 90 && racer2Progress < 85){
					this.invert = true;
				}
				if(racer2Progress > 95 || racer1Progress < 40){
					this.invert = false;
				}
			}
		}

		return progress / divider;
	}

}

var racers = [
	new Racer(0, 'Anakin Skywalker', 'anakin.jpg', 20, 10, 10, 1.4, 90),
	new Racer(1, 'Sebulba', 'sebulba.jpeg', 90, 10, 35, 0.05, 80),
	new Racer(2, 'Ben Quadinaros', 'quadinaros.jpg', 10, 0, 100, 2.35, 5),
	new Racer(3, 'Dud Bolt', 'dud-bolt.png', 180, 0, 100, -1, 5),
	new Racer(4, 'Elan Mak', 'elan-mak.jpg', 200, 0, 100, -1.45, 40),
	new Racer(5, 'Ody Mandrell', 'mandrell.jpg', 90, 0, 0, -0.01, 85),
	new Racer(6, 'Jar Jar Binks', 'jarjar.jpg', 400, 0, 200, -2, 50),
];

var racer1 = null;
var racer2 = null;

function loadSelectors(){
	loadRacer(document.getElementById("racer1"));
	loadRacer(document.getElementById("racer2"));
}

function loadRacer(selector){
	let html = '<option selected value="-1">Select One</option>';
	for(let i = 0; i < racers.length; i++){
		html += '<option value="'+i+'">'+racers[i].name+'</option>';
	}
	selector.innerHTML = html;
}