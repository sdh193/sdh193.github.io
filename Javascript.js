//Assign variables
var timesbought1 = 0
var multiplier1 = 1
var amount1 = 1
var pointseveryclick = 0
var pointtotal = 1
var cost1st = 1
var multiplier1a=0
var multiplier1b=0
var num0=0
var m=0
var pointstorage=0
//Prevent error value 'null'
if (localStorage.getItem('points') == null) {
	pointstorage = 0}
//Make the 1st timesbought function
function multiply2() { 
//Give 1 sublevel every click
	timesbought1 += 1
//Prevent a player from purchasing a level when they don't have enough points
	if (pointsa<cost1st) {
	timesbought1 += -1}
//Set the value and exponential increase of multiplier1
	multiplier1 = round2(Math.pow(1.13,timesbought1)); 
//Add an additional 1.35x multiplier per 10 sublevelups when multiplier exceeds 100
	if (multiplier1>100)
		multiplier1 =round2(Math.pow(1.13,timesbought1)+Math.pow(1.35,Math.floor(timesbought1/10)));
//Make the sublevels by default equal to the times bought
	amount1 = timesbought1;
//Add an additional bonus to the amount of sublevels when the sublevels exceed 25.
	if (amount1>25)
		amount1 = timesbought1+Math.floor(timesbought1/10);
//Set the value of the points per second
	pointseveryclick = multiplier1*amount1;
//Set the value and exponential increase of the cost to purchase a level.
	cost1st = Math.pow(2,timesbought1)
//Input the variables into the HTML document, where they will be visible to other viewers of the website.
	document.getElementById("cost1st") .innerHTML = cost1st;
	document.getElementById("pointseveryclick") .innerHTML = round2(pointseveryclick);
	document.getElementById("amount1") .innerHTML = amount1;
	document.getElementById("multiplier1") .innerHTML = multiplier1;
	document.getElementById("timesbought1") .innerHTML = '';
}
//assign variables
var point=0
var points=0
var h=0
//Set an interval in which the function updates.
setInterval(function() {
//Assign an increase of 1 pointseveryclick per second
point += .01*pointseveryclick
//Make the cost have an effect
points=point+(1-cost1st)
//Add in localStorage amount and other scale balances
pointsa=points+((makenumber(localStorage.getItem('points')))-(m*(points))+1-h);
pointstorage=makenumber(localStorage.getItem('points'))
if (pointstorage>0.01){
h=1}},10)

var timesbought2 = 0
function multiply9() {
	timesbought2 +=1
	document.getElementById("timesbought2") .innerHTML = timesbought2;
}
if (pointstorage>0)
var cost2nd = 1
function multiply10() {
	cost2nd = Math.pow(3,timesbought2)
	document.getElementById("cost2nd") .innerHTML = cost2nd;
}
setInterval(function() {
document.getElementById('totalpoints').innerHTML='You have '+round2(pointsa)+' points';},25)
function save(){
localStorage.setItem('points',pointsa)
m += 1
if (m>1){
	m += -1
}
location.reload(true)}
if (window.performance) {
  console.info("window.performance works fine on this browser");
}
function remove(){
localStorage.removeItem('points')}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info( "This page is reloaded" );
} else {
  console.info( "This page is not reloaded");
}
//Set style
var ac=0
setInterval(function () {
//Set style of times bought btn
	if (pointsa>cost1st) {
	document.getElementById('timesboughtbtn').style.backgroundColor = 'limegreen';
	document.getElementById('timesboughtbtn').style.borderColor = 'green';
	document.getElementById('timesboughtbtn').style.borderWidths = '5px';}else{
	document.getElementById('timesboughtbtn').style.backgroundColor = 'red'; 
	document.getElementById('timesboughtbtn').style.borderColor = 'grey';
document.getElementById('timesboughtbtn').style.borderWidths = '5px'}},10)
//multiplier1a=round(multiplier1, 2)
//multiplier1b=round0(multiplier1)
//if (multiplier1a=multiplier1b) {
//document.getElementById('multiplier1').innerText = multiplier1+'00'}
