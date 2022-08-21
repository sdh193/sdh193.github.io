var turn=0;
var currentProperty=null;
var potMoney=0;
var CCCardIndex=0;
var ChanceCardIndex=0;
var interva;
var currentRequest=undefined;
var CCCardArray=[new CCCard("Life insurance matures.<br>Collect $100",100),new CCCard("Bank error in your favor.<br>Collect $200",200),new CCCard("Xmas fund matures.<br>Collect $100",100),new CCCard("Pay school tax of $150.",-150),new CCCard("Doctor's fee. Pay $50.",-50),new CCCard("Pay hospital $100",-100),new CCCard("Recieve for services $75",75),new CCCard("You won first prize in a beauty contest.<br>Collect $25",25),new CCCard("You are due for property tax.<br>Pay 10% of all your assets excluding your money",0,payPropertyTax),new CCCard("Advance to GO (Collect $200)",0,function(){game.move(cp(),40-cp().square)}),new CCCard("Advance to the nearest Chance square",0,advanceToNearestChance)]
CCCardArray=shuffle(CCCardArray);
var ChanceCardArray=[new ChanceCard("Your building and loan matures.<br>Collect $150",150),new ChanceCard("Take a walk on the boardwalk<br>Advance token to Boardwalk",0,function(){game.move(cp(),39-cp().square)}),new ChanceCard("Advance to Oriental Avenue",0,function(){game.move(cp(),46-cp().square)}),new ChanceCard("Bank pays you dividend of $50",50),new ChanceCard("Advance to St.Charles Place.",0,function(){if(cp().square > 11){game.move(cp(),51-cp().square)}else{game.move(cp(),11-cp().square)}}),new ChanceCard("Advance to GO (Collect $200)",0,function(){game.move(cp(),40-cp().square)}),new ChanceCard("Pay poor tax of 3% of ALL your assets",0,payPoorTax),new ChanceCard("Advance to Illinois Avenue",0,function(){game.move(cp(),(64-cp().square) % 40)}),new ChanceCard("Advance to the nearest Community Chest square",0,advanceToNearestCC)]
ChanceCardArray=shuffle(ChanceCardArray);
function advanceToNearestCC(){
if(cp().square == 7){
game.move(cp(),17-cp().square);
}
if(cp().square == 22){
game.move(cp(),33-cp().square);
}
if(cp().square == 36){
game.move(cp(),42-cp().square);
}}
function advanceToNearestChance(){
if(cp().square == 2){
game.move(cp(),7-cp().square);
}
if(cp().square == 17){
game.move(cp(),5);
}
if(cp().square == 33){
game.move(cp(),36-cp().square);
}}
function payPoorTax(){
var totalPayment=0;
for(var i=0;i<cp().propertiesOwned.length;i++){
totalPayment += Math.floor(cp().propertiesOwned[i].cost*0.03);
if(cp().propertiesOwned[i].className == "Property"){
totalPayment += Math.floor(cp().propertiesOwned[i].houses*cp().propertiesOwned[i].houseprice*0.03)}
}
totalPayment += Math.floor(0.03*cp().money);
cp().money += -totalPayment;
game.announce(cp().name+" lost $"+totalPayment+" from Chance")
}
function startTurn(){
scrollTo(0,200-cp().getBottom());
game.announce(cp().name+" is starting its turn",function(){
		document.getElementById("rollbtn").style.display="block";
		document.getElementById("rollbtn").innerText="Roll dice";
		document.getElementById("rollbtn").onclick=function(){roll()}});
}
interva=setInterval(function(){
	document.getElementById("rollbtn").style.left=innerWidth/2-document.getElementById("rollbtn").offsetWidth/2+"px";
for(var i=0;i<tokenArray.length;i++){
document.getElementById("play"+tokenArray[i].quadrant).innerText="$"+tokenArray[i].money;
}
	},100)
function roll(){
var diceroll1=Math.ceil(Math.random()*6);
var diceroll2=Math.ceil(Math.random()*6);
var d1=document.getElementById("diceroll1");
var d2=document.getElementById("diceroll2");
var rb=document.getElementById("rollbtn");
var img1=document.createElement("IMG");
var img2=document.createElement("IMG");
d2.innerHTML = "";
d1.innerHTML = "";
img1.setAttribute("src",diceroll1+".svg");
img2.setAttribute("src",diceroll2+".svg");
img1.style.width="25px";
img2.style.width="25px";
img1.style.height="25px";
img2.style.height="25px";
d2.appendChild(img2);
d1.appendChild(img1);
d2.style.top=800+Math.random()*600+"px";
d1.style.top=800+Math.random()*600+"px";
d2.style.left=200+Math.random()*900+"px";
d1.style.left=200+Math.random()*900+"px";
d2.style.border="1px solid black";
d1.style.border="1px solid black";
game.announce(cp().name + " rolled "+(diceroll1+diceroll2));
rb.style.display="none";
cp().prevSquare=cp().square;
currentDiceRoll=diceroll1+diceroll2;
game.move(cp(),(diceroll1+diceroll2),function(){
	if(diceroll1 != diceroll2){
	rb.style.display="block";
	rb.innerText="End turn";
	rb.onclick=function(){endTurn()}}else{	rb.style.display="block"}
	});
}
function cp(){return tokenArray[turn]}
function endTurn(){
	turn++;
	turn=turn % tokenArray.length;
	startTurn();
	document.getElementById("rollbtn").style.display="none"}
function EOREvent(){}
function passGo(){
cp().money += goSalary;
game.announce(cp().name+" earned $"+goSalary+" for passing GO");
}
function openCChestCard(){
CCCardArray[CCCardIndex].action();
CCCardIndex++;
CCCardIndex=CCCardIndex % CCCardArray.length;
}
function openChanceCard(){
ChanceCardArray[ChanceCardIndex].action();
ChanceCardIndex++;
ChanceCardIndex=ChanceCardIndex % ChanceCardArray.length;
}
function incomeTax(){cp().money += -200;potMoney += 200; game.announce(cp().name+" lost $200 from Income Tax")}
function collectFreeParkingMoney(){
game.announce(cp().name+" gained $"+potMoney+" from landing on Free Parking.");cp().money += potMoney;potMoney=0;
}
function goToJail(){}
function luxuryTax(){
cp().money += -75;potMoney += 75; game.announce(cp().name+" lost $75 from Luxury Tax")
}
function buyProperty(){
if(currentProperty.playerCanBuy(cp())){
tokenArray[turn].money += -currentProperty.cost;
tokenArray[turn].propertiesOwned.push(currentProperty);
currentProperty.ownedBy=cp().name;
game.announce(cp().name+" bought "+currentProperty.name+ " for $"+currentProperty.cost,function(){document.getElementById("rollbtn").disabled=undefined});
document.getElementById("propertydialogue").style.display="none";
newPropBar(currentProperty);
var j=0;
var propsInSet;
var mappedArray=cp().propertiesOwned.map(object => object.group)
for(var i=0;i<cp().propertiesOwned.length;i++){
if(currentProperty.group == cp().propertiesOwned[i].group){
j++
}
}
if(currentProperty.group == "rgb(139, 69, 19)" || currentProperty.group == "rgb(0, 0, 255)"){
propsInSet=2
}else{
propsInSet=3
}
if(j >= propsInSet){
currentProperty.isInMonopoly=true;
console.log("Monopoly");
for(var i=0;i<cp().propertiesOwned.length;i++){
if(cp().propertiesOwned[i].group == currentProperty.group){
cp().propertiesOwned[i].isInMonopoly=true;
}
}
}else{
currentProperty.isInMonopoly=false}
}else{
alert("You do not have sufficient funds to purchase this property.")
}
}
function passProperty(){
document.getElementById("propertydialogue").style.display="none";
game.announce(cp().name+" passed on buying "+currentProperty.name,function(){document.getElementById("rollbtn").disabled=undefined});

}
function payPropertyTax(){
var totalPayment=0;
for(var i=0;i<cp().propertiesOwned.length;i++){
totalPayment += Math.floor(cp().propertiesOwned[i].cost/10);
if(cp().propertiesOwned[i].className == "Property"){
totalPayment += Math.floor(cp().propertiesOwned[i].houses*cp().propertiesOwned[i].houseprice/10)}
}
cp().money += -totalPayment;
game.announce(cp().name+" lost $"+totalPayment+" from Community Chest")
}
function propEvent(){
	for(var i=0;i<propertyArray.length;i++){
		if(propertyArray[i].square == cp().square){
			if(propertyArray[i].ownedBy == "bank"){
				currentProperty=propertyArray[i];
				document.getElementById("propertydialogue").innerHTML = "<div style=font-size:20px align=center>Would you like to purchase "+propertyArray[i].name+" for $"+propertyArray[i].cost+"?</div><br><div align='center'>"+propertyArray[i].node.outerHTML+"</div><br><button style=font-size:20px onclick=buyProperty()>Buy</button><button style=font-size:20px onclick=passProperty()>Pass</button>"
				document.getElementById("propertydialogue").style.display="block";
				document.getElementById("rollbtn").disabled=true;
			}else{
				if(propertyArray[i].ownedBy != cp().name){
					cp().chargeRent(propertyArray[i])}else{
				if(propertyArray[i].houses<4 && cp().money>=propertyArray[i].houseprice){
				if(confirm("Would you like to buy a house on "+propertyArray[i].name+" for $"+propertyArray[i].houseprice+"?")){propertyArray[i].addHouse()}
				}
				}
	}
}}}
function newPropBar(prop,player){
var elem=document.getElementById(prop.square);
var barProp=document.createElement("DIV");
var ele=cp();
if(player != undefined){ele=player}

barProp.className="propmarker "+ele.name;
barProp.ownedBy=ele.name;
barProp.style.backgroundColor=ele.color.toLowerCase();
barProp.style.position="absolute";
barProp.style.zIndex=-1;
if(ele.square>0 && ele.square<10){
barProp.style.left=(1095-110*(prop.square-1))+"px";
barProp.style.bottom="-1235px";
}
if(ele.square>10 && ele.square<20){
barProp.style.transform="rotate(90deg)"
barProp.style.left="-20px";
barProp.style.bottom=(-1003+110*(prop.square-11))+"px";
}
if(ele.square>20 && ele.square<30){
barProp.style.transform="rotate(180deg)"
barProp.style.left=1095-110*(29-prop.square)+"px"
barProp.style.bottom="118px";
}
if(ele.square>30 && ele.square<40){
barProp.style.transform="rotate(270deg)"
barProp.style.left="1330px";
barProp.style.bottom=(-1003+110*(39-prop.square))+"px";
}
document.getElementById("main").appendChild(barProp);
}
function newPropBarr(prop,player){
var elem=document.getElementById(prop.square);
var barProp=document.createElement("DIV");
var ele=cp();
if(player != undefined){ele=player}

barProp.className="propmarker "+ele.name;
barProp.ownedBy=ele.name;
barProp.style.backgroundColor=ele.color.toLowerCase();
barProp.style.position="absolute";
barProp.style.zIndex=-1;
if(prop.square>0 && prop.square<10){
barProp.style.left=(1095-110*(prop.square-1))+"px";
barProp.style.bottom="-1235px";
}
if(prop.square>10 && prop.square<20){
barProp.style.transform="rotate(90deg)"
barProp.style.left="-20px";
barProp.style.bottom=(-1003+110*(prop.square-11))+"px";
}
if(prop.square>20 && prop.square<30){
barProp.style.transform="rotate(180deg)"
barProp.style.left=1095-110*(29-prop.square)+"px"
barProp.style.bottom="118px";
}
if(prop.square>30 && prop.square<40){
barProp.style.transform="rotate(270deg)"
barProp.style.left="1330px";
barProp.style.bottom=(-1003+110*(39-prop.square))+"px";
}
document.getElementById("main").appendChild(barProp);
}