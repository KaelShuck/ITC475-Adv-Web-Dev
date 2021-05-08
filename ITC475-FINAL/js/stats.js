var table1 = null;
var table2 = null;
var select1 = null;
var select2 = null;

var loading1 = null;
var loading2 = null;

window.onload = function(){
	table1 = document.getElementById("table1");
	table2 = document.getElementById("table2");
	select1 = document.getElementById("racer1");
	select2 = document.getElementById("racer2");
	loading1 = document.getElementById("loading1");
	loading2 = document.getElementById("loading2");

	loadSelectors();
	loadStats();
}

function loadStats(){
	clearTable(table1);
	loading1.style.display = "block";

	$.post( "api/stats", { r: 1, }, function( data ) {
		loading1.style.display = "none";
		returnTable1(data);
		} ).fail(function(xhr, status, error){
			loading1.style.display = "none";
			alert('Error loading stats..');
			console.error("Error with post request 1: " + error);
		}
	);
}

function searchStats(){
	clearTable(table2);

	if(select1.value == -1 || select2.value == -1){
		alert("You must select two racers.");
		return;
	}else if(select1.value == select2.value){
		alert("You must select two DIFFERENT racers.");
		return;
	}

	loading2.style.display = "block";

	$.post( "api/stats", { r: 2, racer1: select1.value, racer2: select2.value, }, function( data ) {
		loading2.style.display = "none";
		returnTable2(data);
		} ).fail(function(xhr, status, error){
			loading2.style.display = "none";
			alert('Error loading stats 2..');
			console.error("Error with post request 2: " + error);
		}
	);
}

function clearTable(table){
	while(table.hasChildNodes())
	{
	   table.removeChild(table.firstChild);
	}
}

function returnTable1(data){
	if(data['response'] != "SUCCESS"){
		alert( "Error loading stats.");
		console.error(data);
	}else{
		dataToTable(table1, data['races']);
	}
}

function returnTable2(data){
	if(data['response'] != "SUCCESS"){
		alert( "Error searching stats.");
		console.error(data);
	}else{
		console.log(data);
		dataToTable(table2, data['races']);
	}
}

function dataToTable(table, data){
	table.innerHTML = "<tr><th>Time</th><th>Winner</th><th>Loser</th></tr>";

	for(let i = 0; i < data.length; i++){
		let row = table.insertRow();
		row.insertCell().innerHTML = parseTime(data[i]['t']);
		row.insertCell().innerHTML = parseName(data[i]['w']);
		row.insertCell().innerHTML = parseName(data[i]['l']);
	}
}

function parseTime(seconds){
	seconds = parseInt(seconds);
	let date = new Date();
	date.setTime(seconds*1000);

	return date.toLocaleString('en-US');
}

function parseName(idStr){
	for(let i = 0; i < racers.length; i++){
		if(racers[i].id == idStr){
			return racers[i].name;
		}
	}
	return "Unknown"; 
}