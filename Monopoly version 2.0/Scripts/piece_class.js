var token=0;
class Token{
	constructor(name,color,src){
		this.name=name;
		this.money=MONEY_INIT;
		this.src=src;
		this.color=color;
		this.square=0;
		this.prevSquare=undefined;
		this.direction=1;
		this.bankrupt=false;
		this.propertiesOwned=[];
		this.getLeft=function(){
		return Number(this.elem.style.left.split("px")[0]);
		}
		this.getBottom=function(){
		return Number(this.elem.style.bottom.split("px")[0]);
		}
		this.setLeft=function(val){
		this.elem.style.left=val+"px"}
		this.setBottom=function(val){
		this.elem.style.bottom=val+"px"}
		this.chargeRent=function(val){
		var propOwner=val.getOwnedBy();
		var rent=val.getCurrentRent();
		propOwner.money += rent;
		cp().money += -rent;
		game.announce(cp().name+" paid $"+rent+" to "+propOwner.name+" for landing on "+val.name);
		}
		token++;
		this.quadrant=token;
		var elem=document.createElement("DIV");
		elem.style.position="absolute";
		elem.style.left="1225px";
		elem.style.bottom="-1150px";
		elem.style.width="50px";
		elem.style.height="50px";
		var elem1=document.createElement("IMG");
		elem1.setAttribute("src",src)
		elem1.setAttribute("width","50");
		elem1.setAttribute("height","50");
		elem.id=name;
		document.getElementById("main").appendChild(elem);
		elem.appendChild(elem1);
		this.elem=elem;
		this.className="Token";
}}
class Property{
	constructor(square,id){
		var elem=document.createElement("DIV");
		var data=array[id];
		elem.innerHTML=data;
		var node=elem.firstElementChild;
if(node == null){
console.log(id)}

		this.name=node.querySelector("#deed-name").innerText;
		this.cost=Number(node.querySelector("#deed-mortgage").innerText)*2;
		this.mortgageValue=this.cost/2;
		this.houseprice=Number(node.querySelector("#deed-houseprice").innerText);
		this.hotelprice=this.houseprice*5;
		this.group=node.querySelector("#deed-header").style.backgroundColor;
		this.baserent=Number(node.querySelector("#deed-baserent").innerText);
		this.monopolyRentArray=game.nodeRentToArray(node);
		this.isInMonopoly=false;
		this.id=id;
		this.membersInGroup=null;
		this.className="Property";
		this.getCurrentRent=function(){
			if(this.isInMonopoly){
				return this.monopolyRentArray[this.houses];
			}else{return this.monopolyRentArray[this.houses]/2}
		}
		this.houses=0;
		this.addHouse=function(shouldPay){
			cp().money += -this.houseprice;
		if(this.houses < 4){
		var barProp=document.createElement("DIV");
		barProp.style.width="24px";
		barProp.style.height="24px";
		barProp.style.backgroundColor='lightgreen';
		barProp.style.position="absolute";
		if(this.square>0 && this.square<10){
barProp.style.left=(1088-110.4*(this.square-1)+27*this.houses)+"px";
barProp.style.bottom="-1076px";
}
if(this.square>10 && this.square<20){
barProp.style.transform="rotate(90deg)"
barProp.style.left="172px";
barProp.style.bottom=(-1045+110.4*(this.square-11)+27*this.houses)+"px";
}
if(this.square>20 && this.square<30){
barProp.style.transform="rotate(180deg)"
barProp.style.left=(1087-110.4*(29-this.square)+27*this.houses)+"px"
barProp.style.bottom="-46px";
}
if(this.square>30 && this.square<40){
barProp.style.transform="rotate(270deg)"
barProp.style.left="1200px";
barProp.style.bottom=(-1045+110.4*(39-this.square)+27*this.houses)+"px";
}
barProp.className="house"+this.square;
document.body.appendChild(barProp);
document.getElementById("rollbtn").disabled=true;
this.houses++;
game.announce(cp().name+" bought a house on "+this.name+" for $"+this.houseprice,function(){document.getElementById("rollbtn").disabled=undefined});
		}else{
	}}
	
		this.getOwnedBy=function(){return game.getElementByName(this.ownedBy)};

		this.square=square;
		this.ownedBy="bank";
		this.node=node;
		this.playerCanBuy=function(token){
			if(token.money >= this.cost && this.ownedBy == "bank" && !token.bankrupt){
				return true
			}else{return false}
			}
		}
}
class Railroad{
	constructor(square,id){
		var elem=document.createElement("DIV");
		var data=array[id];
		elem.innerHTML=data;
		var node=elem.firstElementChild;
		this.name=node.querySelector("#deed-name").innerText;
		this.cost=Number(node.querySelector("#deed-mortgage").innerText)*2;
		this.mortgageValue=this.cost/2;
		this.group="Railroads";
		this.baserent=25;
		this.id=id;
		this.getOwnedBy=function(){return game.getElementByName(this.ownedBy)};
		this.monopolyRentArray=[25,50,100,200];
		this.isInMonopoly=false;
		this.membersInGroup=null;
				this.className="Railroad";
		this.getCurrentRent=function(){
			var otherProps=0;
for(var i=0;i<this.getOwnedBy().propertiesOwned.length;i++){
	if(this.getOwnedBy().propertiesOwned[i].group == "Railroads"){
		otherProps ++;
	}
		}
		return this.monopolyRentArray[otherProps-1];
		}
		this.houses=0;
		this.square=square;
		this.ownedBy="bank";
		this.node=node;
		this.playerCanBuy=function(token){
			if(token.money >= this.cost && this.ownedBy == "bank" && !token.bankrupt){
				return true
			}else{return false}
			}
		}
}
class Utility{
	constructor(square,id){
		var elem=document.createElement("DIV");
		var data=array[id];
		elem.innerHTML=data;
		var node=elem.firstElementChild;
		this.name=node.querySelector("#deed-name").innerText;
		this.cost=Number(node.querySelector("#deed-mortgage").innerText)*2;
		this.mortgageValue=this.cost/2;
		this.baserent=null;
		this.getOwnedBy=function(){return game.getElementByName(this.ownedBy)};
		this.group="Utilities";
		this.id=id;
		this.className="Utility";
		this.monopolyRentArray=[25,50,100,200];
		this.isInMonopoly=false;
		this.membersInGroup=null;
		this.getCurrentRent=function(){
			var otherProps=0;
for(var i=0;i<this.getOwnedBy().propertiesOwned.length;i++){
	if(this.getOwnedBy().propertiesOwned[i].group == "Utilities"){
		otherProps ++;
	}
		}
if(otherProps == 1){
return 4*currentDiceRoll;
}
if(otherProps == 2){
return  10*currentDiceRoll;
}
		}
		this.houses=0;
		this.square=square;
		this.ownedBy="bank";
		this.node=node;
		this.playerCanBuy=function(token){
			if(token.money >= this.cost && this.ownedBy == "bank" && !token.bankrupt){
				return true
			}else{return false}
			}
		}
}
var propertyArray=[new Property(1,0),new Property(3,1),new Property(6,2),new Property(8,3),new Property(9,4),new Property(11,5),new Property(13,6),new Property(14,7),new Property(16,8),new Property(18,9),new Property(19,10),new Property(21,11),new Property(23,12),new Property(24,13),new Property(26,14),new Property(27,15),new Property(29,16),new Property(31,17),new Property(32,18),new Property(34,19),new Property(37,20),new Property(39,21),new Railroad(5,22),new Railroad(15,23),new Railroad(25,24),new Railroad(35,25),new Utility(12,26),new Utility(28,27)]
var tokenArray=[]
var squareArray;
//Await loading of core.js
setTimeout(function(){
squareArray=["","",openCChestCard,"",incomeTax,"","",openChanceCard,"","","","","","","","","",openCChestCard,"","",collectFreeParkingMoney,"",openChanceCard,"","","","","","","",goToJail,"","",openCChestCard,"","",openChanceCard,"",luxuryTax,""];
squareArray.forEach(function(val){if(val == ""){squareArray[squareArray.indexOf(val)] = function(){}}});
},50)
class CCCard{
constructor(cardContent,payment,act){
this.cardContent=cardContent;
this.payment=payment;
this.act=act;
this.action=function(){
document.getElementById("chancedialogue").style.display="inline-block";
document.getElementById("chancedialogue").style.backgroundColor="lightblue";
document.getElementById("chancedialogue").innerHTML=this.cardContent+"<br><br><button style=font-size:20px id=closebtn>OK</button><br>"
document.getElementById("closebtn").onclick=function(){
if(payment>0){
game.announce(cp().name+" gained $"+payment+" from Community Chest");
}
if(payment<0){
game.announce(cp().name+" lost $"+Math.abs(payment)+" from Community Chest")}
cp().money += payment;


document.getElementById("chancedialogue").style.display="none";
if(act != undefined){act()};
}}}}
class ChanceCard{
constructor(cardContent,payment,act){
this.cardContent=cardContent;
this.payment=payment;
this.act=act;
this.action=function(){
document.getElementById("chancedialogue").style.display="inline-block";
document.getElementById("chancedialogue").style.backgroundColor="red";
document.getElementById("chancedialogue").innerHTML=this.cardContent+"<br><br><button style=font-size:20px id=closebtn>OK</button><br>"
document.getElementById("closebtn").onclick=function(){
if(payment>0){
game.announce(cp().name+" gained $"+payment+" from Chance");
}
if(this.payment<0){
game.announce(cp().name+" lost $"+Math.abs(payment)+" from Chance")}
cp().money += payment;


document.getElementById("chancedialogue").style.display="none";
if(act != undefined){act()};
}}}}
function isPassingGo(){
if(cp().getLeft()>1200 && cp().getBottom<-1075){
console.log(true)}
}