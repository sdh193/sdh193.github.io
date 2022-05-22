function bigNumber(){
var obj=new Object();
obj.coefficient=arguments[0];
obj.length=arguments.length;
obj.e1=0;
var i=1;
while(i<arguments.length){
eval("obj.e"+i+" = "+arguments[i]);
i++
}
obj.multiply=function(){obj.coefficient *= arguments[0];while(obj.coefficient >= 10){obj.coefficient *= .1; obj.e1 ++; }var i=1; var tempVar; while(i < arguments.length){eval("obj.e"+i+" += "+arguments[i]);eval("tempVar = obj.e"+arguments[i]);i++}obj.wholeValue=obj.coefficient+"e"+obj.e1;obj.formattedValue=obj.coefficient.toFixed(2)+"e"+Math.round(obj.e1);return obj;}
obj.multiplyByBigNumber=function(){obj.coefficient *= arguments[0].coefficient; obj.e1 += arguments[0].e1;obj.multiply(1);return obj}
obj.multiply(1);
obj.formatTotalValue=function(){if(Number(obj.wholeValue) < 1e33){if(obj.e1 > 29){return obj.coefficient*(10**(obj.e1-30))+" No"}else if(obj.e1 > 26){return obj.coefficient*(10**(obj.e1-27))+" Oc"}else if(obj.e1 > 23){return obj.coefficient*(10**(obj.e1-24))+" Sp"}else if(obj.e1 > 20){return obj.coefficient*(10**(obj.e1-21))+" Sx"}else if(obj.e1 > 17){return obj.coefficient*(10**(obj.e1-18))+" Qt"}else if(obj.e1 > 14){return obj.coefficient*(10**(obj.e1-15))+" Qa"}else if(obj.e1 > 11){return obj.coefficient*(10**(obj.e1-12))+" T"}else if(obj.e1 > 8){return obj.coefficient*(10**(obj.e1-9))+" B"}else if(obj.e1 > 5){return obj.coefficient*(10**(obj.e1-6))+" M"}else if(obj.e1 > 2){return obj.coefficient*(10**(obj.e1-3))+" K"}else if(obj.e1 > -1){return obj.coefficient*(10**(obj.e1))}}else{return obj.formattedValue}}
obj.format=function(){if(Number(obj.wholeValue) < 1e33){if(obj.e1 > 29){return (obj.coefficient*(10**(obj.e1-30))).toFixed(2)+" No"}else if(obj.e1 > 26){return (obj.coefficient*(10**(obj.e1-27))).toFixed(2)+" Oc"}else if(obj.e1 > 23){return (obj.coefficient*(10**(obj.e1-24))).toFixed(2)+" Sp"}else if(obj.e1 > 20){return (obj.coefficient*(10**(obj.e1-21))).toFixed(2)+" Sx"}else if(obj.e1 > 17){return (obj.coefficient*(10**(obj.e1-18))).toFixed(2)+" Qt"}else if(obj.e1 > 14){return (obj.coefficient*(10**(obj.e1-15))).toFixed(2)+" Qa"}else if(obj.e1 > 11){return (obj.coefficient*(10**(obj.e1-12))).toFixed(2)+" T"}else if(obj.e1 > 8){return (obj.coefficient*(10**(obj.e1-9))).toFixed(2)+" B"}else if(obj.e1 > 5){return (obj.coefficient*(10**(obj.e1-6))).toFixed(2)+" M"}else if(obj.e1 > 2){return (obj.coefficient*(10**(obj.e1-3))).toFixed(2)+" K"}else if(obj.e1 > -1){return (obj.coefficient*(10**(obj.e1))).toFixed(2)}}else{return obj.formattedValue}}

return obj;
}
function getBackOfScientific(value){
return "e"+Math.floor(Math.log10(value))}
function getFrontOfScientific(value){if(value != 0){return value/(10**(Math.floor(Math.log10(value))))}else{return 0}}