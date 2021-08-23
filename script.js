

function printUserInfo() {
  
var name = prompt('Name: ', "tony starks");
var email = prompt('Email: ', "ironman@gmail.com");
var number = prompt('Number: ', "0917111111");

if (name != null) {
  document.getElementById("demo1").innerHTML =
  "Name: " + name ;
}

if (email != null) {
  document.getElementById("demo2").innerHTML =
  "Email: " + email ;
}

if (number != null) {
  document.getElementById("demo3").innerHTML =
  "Number: " + number ;
}
  
}

  printUserInfo();
 


