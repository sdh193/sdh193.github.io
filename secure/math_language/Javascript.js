var a = localStorage.getItem('password') 
var b = localStorage.getItem('captchaa')
var d=new Date()
if (a>2051 && a<2053 && b>(((d.getHours()*8992301.61)+(d.getDay()*1023198.79)-1) && b<((d.getHours()*8992301.61)+(d.getDay()*1023198.79)+1))) {
}else{window.location = "/secure/math_language"}
