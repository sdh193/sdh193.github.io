addEventListener('contextmenu', function(e){e.preventDefault(); document.onkeydown = function(e) {if(event.keyCode == 123) {return false;};if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))return false;};if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {return false;}if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {return false;}if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {return false;}if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {return false;};}); 
var a = localStorage.getItem('password') 
var b = localStorage.getItem('captchaa')
var d=new Date()
if (a>2051 && a<2053 && b>(((d.getHours()*8992301.61)+(d.getDay()*1023198.79)-1) && b<((d.getHours()*8992301.61)+(d.getDay()*1023198.79)+1))) {
}else{window.location = "sdh193.github.io/secure/math_language"}
