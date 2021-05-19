let round = (number,places_to_round) => {
  const x = Math.pow(10,places_to_round);
  return Math.round(number * x) / x;
}
let round0 = number => {
	return Math.round(number*1)/1;}
let round1 = number => {
	return Math.round(number*10)/10;}
let round2 = number => {
	return Math.round(number*100)/100;}
let round3 = number => {
	return Math.round(number*1000)/1000;}
let round4 = number => {
	return Math.round(number*10000)/10000;}
let round5 = number => {
	return Math.round(number*100000)/100000;}
let round6 = number => {
	return Math.round(number*1000000)/1000000;}
let round7 = number => {
	return Math.round(number*10000000)/10000000;}
let round8 = number => {
	return Math.round(number*100000000)/100000000;}
let round9 = number => {
	return Math.round(number*1000000000)/1000000000;}
let round10 = number => {
	return Math.round(number*10000000000)/10000000000;}
let bignumber = number => {
return BigInt(number)}
let product = (number1,number2) => {
return number1*number2}
let sum = (number1,number2) => {
return number1+number2}
let makenumber = number => {
return (number*1)/1;}

//let sum = (number1,number2,number3,number4,number5,number6,number7,number8,number9) => {
//if (number2 === null) {
//number2 = 0}
//if (number3 === null) {
//number3 = 0}
//if (number4 === null) {
//number4 = 0}
//if (number5 === null) {
//number5 = 0}
//if (number6 === null) {
//number6 = 0}
//if (number7 === null) {
//number7 = 0}
//if (number8 === null) {
//number8 = 0}
//if (number9 === null) {
//number9 = 0}
let power = (base, exponent) => {
return Math.pow(base, exponent)}
let sn = (number) => {
return number.toExponential()}
let sn10 =number => {
return number/Math.pow(10,Math.floor(Math.log10(number)))+' x 10^'+Math.floor(Math.log10(number))}
let sqrt=number_you_are_rooting => {
return Math.pow(number_you_are_rooting,(1/2))}
let cbrt=number_you_are_rooting => {
return Math.pow(number_you_are_rooting,(1/3))}
let hcbrt=number_you_are_rooting => {
return Math.pow(number_you_are_rooting, (1/4))}
let rt=(number_you_are_rooting,rt_number) => {
return Math.pow(number_you_are_rooting,(1/rt_number))}
//let roundneg1 = number => {
	//return Math.round(number*.1)/.1;}
//let roundneg2 = number => {
	//return Math.round(number*.01)/.01;}
//let roundneg3 = number => {
	//return Math.round(number*.001)/.001;}
//let roundneg4 = number => {
	//return Math.round(number*.0001)/.0001;}
//let roundneg5 = number => {
	//return Math.round(number*.00001)/.00001;}
//let roundneg6 = number => {
	//return Math.round(number*.000001)/.000001;}
//let roundneg7 = number => {
	//return Math.round(number*.0000001)/.0000001;}
//let roundneg8 = number => {
	//return Math.round(number*.00000001)/.00000001;}
//let roundneg9 = number =>;} {
	//return Math.round(number*.000000001)/.000000001;}
//let roundneg10 = number => {
//return Math.round(number*.0000000001)/.0000000001;}