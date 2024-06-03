console.log(`Hello`);
console.log(`Piyush`);

// window.alert("This is an alert");
// window.alert(`I like pizza`);

// Add text using js
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myp").textContent = "I like pizza";

// ==============Variable ===========
// Numbers
let age=100;
let cgpa= 10.36;
console.log(typeof age,'and ',typeof cgpa)

// string 
let username = "Piyush";
console.log(typeof username)

// Boolean 
let isOnline = false;
console.log(typeof isOnline);

// =============arithmatic operator==========

let num =30;
num += 3;
num -= 2;
num *= 4;
num /= 2;
num **=3;  //power
num %= 2;  //modulo
console.log(num+=2);

//=========== User input ===================

// let num1 = parseInt(window.prompt("enter value of a "));
// let num2 = parseInt(window.prompt("enter value of b "));
// window.alert(`a+b = ${num1+num2}`)

let msg ;
document.getElementById("mysub").onclick = function(){
    msg = document.getElementById("myinput").value;
    console.log(msg);
}










