var players=2;
var saveinterval;
var gameExists=false;
document.body.onload=function(){
var ypos=0;
for(var i=0; i<10; i++){
var a=document.createElement("DIV");
a.style.position="relative";
a.className="sidesquare";
a.style.zIndex=-1;
a.id=i+11;
a.style.top=1660-ypos+"px";
a.style.left=35-ypos*1.007+"px";
if(i == 9){
a.className="sidelargesquare";
a.style.top=1625-ypos+"px";
a.style.left=5-ypos*1.007+"px";
a.style.backgroundImage="url(freeparking.png)";
}
if(i==0){
a.style.backgroundImage="url(p7.svg)";
}
if(i == 1){
a.style.backgroundImage="url(ec.png)";}
if(i==2){
a.style.backgroundImage="url(p8.svg)";}
if(i==3){
a.style.backgroundImage="url(p9.svg)";}
if(i==4){
a.style.backgroundImage="url(p10.png)";}
if(i == 5){
a.style.backgroundImage="url(p11.svg)";}
if(i == 6){
a.style.backgroundImage="url(cchest.png)";}
if(i == 7){
a.style.backgroundImage="url(p12.svg)";}
if(i == 8){
a.style.backgroundImage="url(p13.svg)";}
a.style.backgroundImage="url(Properties/"+a.style.backgroundImage.split("url(").join("").split(")").join("").split('"').join("")+")";
document.getElementById("siderow").appendChild(a);
ypos += 133;
}
for(var i=0; i<10; i++){
var a=document.createElement("DIV");
a.style.position="relative";
a.className="topsquare";
a.style.zIndex=-1;
a.style.top="-291px";
a.style.left=201-i+"px";
a.id=i+21;
if(i == 9){
a.className="toplargesquare";
a.style.left="195px";
a.style.backgroundImage="url(gotojail.png)";
}
if(i==0){
a.style.backgroundImage="url(p14.svg)";
}
if(i==1){
a.style.backgroundImage="url(c.png)";
}
if(i==2){
a.style.backgroundImage="url(p15.svg)";
}
if(i==3){
a.style.backgroundImage="url(p16.svg)";
}
if(i==4){
a.style.backgroundImage="url(p17.png)";
}
if(i==5){
a.style.backgroundImage="url(p18.svg)";
}
if(i==6){
a.style.backgroundImage="url(p19.svg)";
}
if(i==7){
a.style.backgroundImage="url(ww.png)";
}
if(i==8){
a.style.backgroundImage="url(p20.svg)";
}
a.style.backgroundImage="url(Properties/"+a.style.backgroundImage.split("url(").join("").split(")").join("").split('"').join("")+")";
document.getElementById("toprow").appendChild(a);
}
for(var i=0; i<9; i++){
var a=document.createElement("DIV");
a.style.zIndex=-1;
a.style.position="relative";
a.className="siderightsquare";
a.style.top=2480-ypos+"px";
a.id=i+31;
a.style.left=2778-ypos*1.01+"px";
if(i==8){
a.style.backgroundImage="url(p21.svg)";
}
if(i==7){
a.style.backgroundImage="url(p22.svg)";
}
if(i == 6){
a.style.backgroundImage="url(cchest.png)";}
if(i==5){
a.style.backgroundImage="url(p23.svg)";
}
if(i==4){
a.style.backgroundImage="url(p24.png)";
}
if(i==3){
a.style.backgroundImage="url(c.png)";
}
if(i==2){
a.style.backgroundImage="url(p25.svg)";
}
if(i == 1){
a.style.backgroundImage="url(ltax.png)"}
if(i==0){
a.style.backgroundImage="url(p26.svg)";
}
a.style.backgroundImage="url(Properties/"+a.style.backgroundImage.split("url(").join("").split(")").join("").split('"').join("")+")";
document.getElementById("siderightrow").appendChild(a);
ypos += 133;
}
initTokens();
document.querySelector("form").addEventListener("submit",function(e){e.preventDefault()});
if(localStorage.monopolyTokenArray != null && localStorage.monopolyTokenArray != undefined && localStorage.monopolyPropertyArray != undefined && true && localStorage.monopolyPropertyArray != null){
var conf=confirm("Would you like to resume your game?");
gameExists=true;
if(conf){
document.getElementById("init").innerHTML="<div style='font-size:20px;position:fixed'>Please wait while we are fetching your save... This should not take longer than a few seconds.</div>"
tokenArray=JSON.parse(localStorage.monopolyTokenArray);
var tmp=structuredClone(tokenArray);
var done=0;
propertyArray=JSON.parse(localStorage.monopolyPropertyArray);
document.querySelector("textarea").innerHTML=JSON.parse(localStorage.monopolyLogArray)+"Save loaded\n";
for(var i=0;i<tokenArray.length;i++){
tokenArray[i]=new Token(tokenArray[i].name,tokenArray[i].color,tokenArray[i].src);
tokenArray[i].square=tmp[i].square;
tokenArray[i].direction=1;
tokenArray[i].money=tmp[i].money;
tokenArray[i].propertiesOwned=tmp[i].propertiesOwned;
tokenArray[i].setBottom(-1150);
tokenArray[i].setLeft(1225);
}
for(var m=0;m<tokenArray.length;m++){
game.move(tokenArray[m],tokenArray[m].square,function(){
done++;
if(done >= tokenArray.length){
document.getElementById("init").remove();
document.getElementById("main").style.display="block";
for(var i=0;i<tokenArray.length;i++){
document.getElementById("playermoney"+(i+1)).style.backgroundColor=tokenArray[i].color;
document.getElementById("playermoney"+(i+1)).querySelector("img").src=tokenArray[i].src;
document.getElementById("playermoney"+(i+1)).style.display="block"};
for(var i=0;i<propertyArray.length;i++){
	if(propertyArray[i].ownedBy != "bank"){
		newPropBarr(propertyArray[i],propertyArray[i].getOwnedBy())}};
for(var n=0;n<propertyArray.length;n++){
var tempor=propertyArray[n].houses;
	for(var l=0;l<propertyArray[n].houses;l++){
		if(l < 4){
		if(propertyArray[n].houses>4){continue}
		var barProp=document.createElement("DIV");
		barProp.style.width="24px";
		barProp.style.height="24px";
		barProp.style.backgroundColor='lightgreen';
		barProp.style.position="absolute";
		if(propertyArray[n].square>0 && propertyArray[n].square<10){
barProp.style.left=(1088-110.4*(propertyArray[n].square-1)+27*l)+"px";
barProp.style.bottom="-1076px";
}
if(propertyArray[n].square>10 && propertyArray[n].square<20){
barProp.style.transform="rotate(90deg)"
barProp.style.left="172px";
barProp.style.bottom=(-1045+110.4*(propertyArray[n].square-11)+27*l)+"px";
}
if(propertyArray[n].square>20 && propertyArray[n].square<30){
barProp.style.transform="rotate(180deg)"
barProp.style.left=(1087-110.4*(29-propertyArray[n].square)+27*l)+"px"
barProp.style.bottom="-46px";
}
if(propertyArray[n].square>30 && propertyArray[n].square<40){
barProp.style.transform="rotate(270deg)"
barProp.style.left="1200px";
barProp.style.bottom=(-1045+110.4*(39-propertyArray[n].square)+27*l)+"px";
}
barProp.className="house"+propertyArray[n].square;
document.body.appendChild(barProp);
		}else{
			var hotel=document.createElement("div");
			console.log(hotel);
			hotel.style.width="50px";
			hotel.style.backgroundColor="rgb(120,0,0)";
			hotel.style.height="24px";
			hotel.style.position="absolute";
			hotel.className="house"+propertyArray[n].square;
			if(propertyArray[n].square>0 && propertyArray[n].square<10){
hotel.style.left=(1088-110.4*(propertyArray[n].square-1)+27)+"px";
hotel.style.bottom="-1076px";
}
			if(propertyArray[n].square>10 && propertyArray[n].square<20){
			hotel.style.left="160px";
			hotel.style.bottom=((-1005+110.4*(propertyArray[n].square-11)))+"px";
			hotel.style.transform="rotate(90deg)";
			}
			if(propertyArray[n].square>20 && propertyArray[n].square<30){
hotel.style.transform="rotate(180deg)"
hotel.style.left=(1087-110.4*(29-propertyArray[n].square)+27)+"px"
hotel.style.bottom="-46px";
}
			if(propertyArray[n].square>30 && propertyArray[n].square<40){
			hotel.style.left="1187px";
			hotel.style.bottom=((-1005+110.4*(39-propertyArray[n].square)))+"px";
			hotel.style.transform="rotate(90deg)";
			}
			document.body.appendChild(hotel);
		}
		
		}
	};
		startTurn();
		goSalary=300-tokenArray.length*50;
		saveinterval=setInterval(game.save,1000)}},true,true)}
console.log(tmp);
console.log(i);
i=0;
window.onbeforeunload=function(){game.save()};
var tmp1=structuredClone(propertyArray);
for(var i=0;i<propertyArray.length;i++){
if(i<22){
propertyArray[i]=new Property(tmp1[i].square,tmp1[i].id)}
if(i > 21 && i<26){propertyArray[i]=new Railroad(tmp1[i].square,tmp1[i].id)}
if(i > 25){propertyArray[i]=new Utility(tmp1[i].square,tmp1[i].id)}
propertyArray[i].baserent=tmp1[i].baserent;
propertyArray[i].cost=tmp1[i].cost;
propertyArray[i].mortgageValue=tmp1[i].mortgageValue;
propertyArray[i].group=tmp1[i].group;
propertyArray[i].houseprice=tmp1[i].houseprice;
propertyArray[i].houses=tmp1[i].houses;
propertyArray[i].isInMonopoly=tmp1[i].isInMonopoly;
propertyArray[i].membersInGroup=tmp1[i].membersInGroup;
propertyArray[i].monopolyRentArray=tmp1[i].monopolyRentArray;
propertyArray[i].name=tmp1[i].name;
propertyArray[i].ownedBy=tmp1[i].ownedBy;
for(var j=0;j<tokenArray.length;j++){
	for(var k=0;k<tokenArray[j].propertiesOwned.length;k++){
	if(tokenArray[j].propertiesOwned[k].name == propertyArray[i].name){
	tokenArray[j].propertiesOwned[k]=propertyArray[i];
	propertyArray[i].ownedBy=tokenArray[j].name;
	}
}}
}
}}
}
function initTokens(){
	for(var i=0;i<document.querySelectorAll("select").length;i++){
document.querySelectorAll("select")[i].innerHTML="<option value=Battleship>Battleship</option><option value=Car>Racecar</option><option value=Shoe>Shoe</option><option value='Hat'>Top Hat</option><option value='Dog'>Dog</option><option value='Iron'>Iron</option><option value='Thimble'>Thimble</option><option value='Wheelbarrow'>Wheelbarrow</option>";
document.querySelectorAll("select")[i].querySelectorAll("option")[i].selected=true;
}}
function startGame(){
var isUnique=true;
var valueArr=[];
var isWrongColor=false;
for(var i=0;i<document.querySelector("form").querySelectorAll("*").length;i++){
var el=document.querySelector("form").querySelectorAll("*")[i];

if(el.tagName == "SELECT" || el.tagName == "INPUT"){
if(valueArr.indexOf(el.value) != -1){
isUnique=false;
}
valueArr.push(el.value);
}
	}
for(var i=0;i<document.querySelector("form").querySelectorAll("input").length;i++){
if(i % 2 == 1){
	var val=document.querySelector("form").querySelectorAll("input")[i].value;
	if(!isValidColor(val)){
	isWrongColor=true;
	}
}
}
if(document.querySelector("form").checkValidity() && isUnique && !isWrongColor){
for(var i=0;i<players;i++){
	tokenArray.push(new Token(capitalize(document.querySelector("form").querySelectorAll("input")[i*2].value),(document.querySelector("form").querySelectorAll("input")[i*2+1].value).toLowerCase(),"https://html5.gamemonetize.co/rb9b7ctnmy1rjphxzuwlmy8c4b7mw9po/"+document.querySelector("form").querySelectorAll("select")[i].value+".png"))
}
for(var i=0;i<tokenArray.length;i++){
document.getElementById("playermoney"+(i+1)).style.backgroundColor=tokenArray[i].color;
document.getElementById("playermoney"+(i+1)).querySelector("img").src=tokenArray[i].src;
document.getElementById("playermoney"+(i+1)).style.display="block";
}
startTurn();
goSalary=300-tokenArray.length*50;
document.getElementById("init").remove();
document.getElementById("main").style.display="block";
saveinterval=setInterval(game.save,1000);
return;
}
if(document.querySelector("form").checkValidity() && !isUnique){
alert("Players may NOT have the same name, color, or token");
}
if(document.querySelector("form").checkValidity() && isUnique && isWrongColor){
alert("One or more of the colors you inputted was not a valid color");
}
}
function isValidColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor.toLowerCase();
}
function addPlayer(){
if(players < 4){
document.querySelector("#inputs").innerHTML += '<br>Player '+(players+1)+': Name: <input placeholder="Name..." required></input>, Color: <input placeholder="Color..." required></input>, Token: <select required></select>'
initTokens();
players++}else{alert("Max limit of players reached")}
}
function openSettings(){
var panel=document.createElement("DIV");
panel.style.width="300px";
panel.style.height="200px";
panel.style.border="2px solid black";
panel.style.backgroundColor="lightgrey";
panel.style.textAlign="center";
panel.style.fontSize="20px";
panel.align="center";
panel.style.zIndex=1;
panel.style.position="absolute";
panel.style.left=(innerWidth/2-150)+"px";
panel.style.top=(innerHeight/2-200)+"px";
panel.id="panel";
panel.innerHTML="<h2>Settings</h2>Money to start with: $<input max=2500 value=1500 min=500 step=100 type=number style='width:75px' oninput='if(Number(this.value) >= 2500){this.value=2500}if(Number(this.value) <= 500){this.value=500}'></input><br><br><button style=font-size:20px onclick='MONEY_INIT=Number(document.getElementById(`panel`).querySelectorAll(`input`)[0].value);document.getElementById(`panel`).remove()'>Close Panel</button>"
document.body.appendChild(panel);
}
async function startSavedGame(files){
var file=files.files[0];
clearInterval(saveinterval);
if(confirm("Would you like to set your local save to this game? Note that clicking 'OK' will cause your current local save to be lost.")){
var saveinterval=setInterval(game.save,1000);window.onbeforeunload=function(){game.save()}}
var txt=await file.text();
var array1=txt.split("---SEPERATION---");
document.getElementById("init").innerHTML="<div style='font-size:20px;position:fixed'>Please wait while we are loading the save from your file... This should not take longer than a few seconds.</div>"
tokenArray=JSON.parse(array1[1]);
var tmp=structuredClone(tokenArray);
var done=0;
propertyArray=JSON.parse(array1[0]);
document.querySelector("textarea").innerHTML=JSON.parse(array1[2])+"Save loaded\n";
for(var i=0;i<tokenArray.length;i++){
tokenArray[i]=new Token(tokenArray[i].name,tokenArray[i].color,tokenArray[i].src);
tokenArray[i].square=tmp[i].square;
tokenArray[i].direction=1;
tokenArray[i].money=tmp[i].money;
tokenArray[i].propertiesOwned=tmp[i].propertiesOwned;
tokenArray[i].setBottom(-1150);
tokenArray[i].setLeft(1225);
}
for(var m=0;m<tokenArray.length;m++){
game.move(tokenArray[m],tokenArray[m].square,function(){
done++;
if(done >= tokenArray.length){
document.getElementById("init").remove();
document.getElementById("main").style.display="block";
for(var i=0;i<tokenArray.length;i++){
document.getElementById("playermoney"+(i+1)).style.backgroundColor=tokenArray[i].color;
document.getElementById("playermoney"+(i+1)).querySelector("img").src=tokenArray[i].src;
document.getElementById("playermoney"+(i+1)).style.display="block"};
for(var i=0;i<propertyArray.length;i++){
	if(propertyArray[i].ownedBy != "bank"){
		newPropBarr(propertyArray[i],propertyArray[i].getOwnedBy())}};
for(var n=0;n<propertyArray.length;n++){
var tempor=propertyArray[n].houses;
	for(var l=0;l<propertyArray[n].houses;l++){
		if(l < 4){
		if(propertyArray[n].houses>4){continue}
		var barProp=document.createElement("DIV");
		barProp.style.width="24px";
		barProp.style.height="24px";
		barProp.style.backgroundColor='lightgreen';
		barProp.style.position="absolute";
		if(propertyArray[n].square>0 && propertyArray[n].square<10){
barProp.style.left=(1088-110.4*(propertyArray[n].square-1)+27*l)+"px";
barProp.style.bottom="-1076px";
}
if(propertyArray[n].square>10 && propertyArray[n].square<20){
barProp.style.transform="rotate(90deg)"
barProp.style.left="172px";
barProp.style.bottom=(-1045+110.4*(propertyArray[n].square-11)+27*l)+"px";
}
if(propertyArray[n].square>20 && propertyArray[n].square<30){
barProp.style.transform="rotate(180deg)"
barProp.style.left=(1087-110.4*(29-propertyArray[n].square)+27*l)+"px"
barProp.style.bottom="-46px";
}
if(propertyArray[n].square>30 && propertyArray[n].square<40){
barProp.style.transform="rotate(270deg)"
barProp.style.left="1200px";
barProp.style.bottom=(-1045+110.4*(39-propertyArray[n].square)+27*l)+"px";
}
barProp.className="house"+propertyArray[n].square;
document.body.appendChild(barProp);
		}else{
			var hotel=document.createElement("div");
			console.log(hotel);
			hotel.style.width="50px";
			hotel.style.backgroundColor="rgb(120,0,0)";
			hotel.style.height="24px";
			hotel.style.position="absolute";
			hotel.className="house"+propertyArray[n].square;
			if(propertyArray[n].square>0 && propertyArray[n].square<10){
hotel.style.left=(1088-110.4*(propertyArray[n].square-1)+27)+"px";
hotel.style.bottom="-1076px";
}
			if(propertyArray[n].square>10 && propertyArray[n].square<20){
			hotel.style.left="160px";
			hotel.style.bottom=((-1005+110.4*(propertyArray[n].square-11)))+"px";
			hotel.style.transform="rotate(90deg)";
			}
			if(propertyArray[n].square>20 && propertyArray[n].square<30){
hotel.style.transform="rotate(180deg)"
hotel.style.left=(1087-110.4*(29-propertyArray[n].square)+27)+"px"
hotel.style.bottom="-46px";
}
			if(propertyArray[n].square>30 && propertyArray[n].square<40){
			hotel.style.left="1187px";
			hotel.style.bottom=((-1005+110.4*(39-propertyArray[n].square)))+"px";
			hotel.style.transform="rotate(90deg)";
			}
			document.body.appendChild(hotel);
		}
		
		}
	};
		startTurn();
		goSalary=300-tokenArray.length*50;
		}},true,true)}
console.log(tmp);
console.log(i);
i=0;
var tmp1=structuredClone(propertyArray);
for(var i=0;i<propertyArray.length;i++){
if(i<22){
propertyArray[i]=new Property(tmp1[i].square,tmp1[i].id)}
if(i > 21 && i<26){propertyArray[i]=new Railroad(tmp1[i].square,tmp1[i].id)}
if(i > 25){propertyArray[i]=new Utility(tmp1[i].square,tmp1[i].id)}
propertyArray[i].baserent=tmp1[i].baserent;
propertyArray[i].cost=tmp1[i].cost;
propertyArray[i].mortgageValue=tmp1[i].mortgageValue;
propertyArray[i].group=tmp1[i].group;
propertyArray[i].houseprice=tmp1[i].houseprice;
propertyArray[i].houses=tmp1[i].houses;
propertyArray[i].isInMonopoly=tmp1[i].isInMonopoly;
propertyArray[i].membersInGroup=tmp1[i].membersInGroup;
propertyArray[i].monopolyRentArray=tmp1[i].monopolyRentArray;
propertyArray[i].name=tmp1[i].name;
propertyArray[i].ownedBy=tmp1[i].ownedBy;
for(var j=0;j<tokenArray.length;j++){
	for(var k=0;k<tokenArray[j].propertiesOwned.length;k++){
	if(tokenArray[j].propertiesOwned[k].name == propertyArray[i].name){
	tokenArray[j].propertiesOwned[k]=propertyArray[i];
	propertyArray[i].ownedBy=tokenArray[j].name;
	}
}}
}}