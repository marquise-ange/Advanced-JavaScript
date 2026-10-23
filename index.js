// string 

let name = "John Doe";
let age = "30";
let city = 'New York';
let names = `My name is ${name}, I am ${age} years old and I live in ${city}.`;


// number 

let number = 12349.1234567;
let number2 = 123483;

// BigInt

let bigIntNumber = 1234567890123456789012345678901234567890n;
let bigInt= BigInt("1234567890123456789012345678901234567890");

// boolean


let isTrue = true;
let isFalse = false;

// null

let nullValue = null;

// undefined

let undefinedValue;


// symbol

let symbol1 = Symbol('symbol');
let symbol2 = Symbol('symbol');

console.log(typeof undefinedValue);


// non-primitive data types these are data types that are build using primitive data types

// object

let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isStudent: false,
    country: null
};

//sub- non-primitive data types

// array

let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixedArray = [1, "apple", true, null, undefined];

// function

function greet(name) {
    return `Hello, ${name}!`;
}

// date

let currentDate = new Date();

// regular expression

let regex = /ab+c/;

// map

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');



// Declaration of variables using var, let and const 

// let , const

let variable = "value";

variable = "new value";

// const 

const constantvariable = "value";


// var

var varVariable = "value";
varVariable= "new value";

var varVariable = "new value2";


console.log(varVariable);



// Hoisting

// console.log(hoistedVar); 

//  these is the TDZ
const hoistedVar = "I am hoisted!";

//  THE END

console.log(hoistedVar);



// scope

// global scope

let globalVar = "I am a global variable";


// function scope
function myFunction(){
 console.log(globalVar);
} 

myFunction()



// function scope 

function addNumber(){
    let number1 = 10;
    let number2 = 20;
    let sum = number1 + number2;
    console.log(sum);
}

addNumber();


// Block scope 

{
    let city = "New York";
    let country = "USA";
    
}



// console.log(`I live in ${city}, ${country}.`);
















console.log(globalVar); // Accessible here


let num = 5;
let string = "5";


let isEqual = num === string;
let isEqual2 = num !== string;
let isEqual3 = num == string;

console.log(isEqual);
console.log(isEqual2);
console.log(isEqual3);



//  logical operators 



// && || !

let isLoggedIn = false;
let showDashboard = false;

// &&

let user = isLoggedIn && showDashboard


// ||

let guest = false;
let userName = "derrick"

let user2 = guest || userName ;

console.log(`the user output is ${user}`);

console.log(`Good morning ${user2} what are we achiving today`);

// !

let isUserLoggedIn = !isLoggedIn;
let isUserLoggedIn2 = !showDashboard;


// ?? Nullish coalescing operator

let user3 = null ?? "On data Yeat";
let user4 = undefined ?? "unkown type";


console.log(user3);
console.log(user4);

// console.log(isUserLoggedIn);

let age3 = 20
const status = age3 >= 18 ? "Adult" : "monir"

console.log(status)



// conditons 

let score = 45;

if (score >= 80) {
    console.log("You got in Grad A");
}



let password = "password123";

// if 
if (password !== "password123") {
    console.log("invalid email or password");
}

// if else 
if (password !== "password123") {
    console.log("invalid email or password");
} else {
    console.log("You are logged in");
}

// if else if else 

if(score >= 80) {
    console.log("You got in Grad A");
} else if (score >= 70) {
    console.log("You got in Grad B");
} else if (score >= 60) {
    console.log("You are in Grad C");
} else if (score >= 50) {
    console.log("You are in Grad D");
} else {
    console.log("You are fail");
}


let day = "Sunday";

if (day === "Staturday" && day === "Sunday") {
    console.log('Welcome to the weekend');
}

if (!isLoggedIn && !showDashboard) {
   console.log("No access to thes page");
} else  {
   console.log(`Well come back ${name}`);
}



// switch case


const days = "sun";

switch (days) {
    case "Sun":
      case "Sat":
        console.log("It's the weekend");
           break;

    case "Wed":
        case "Fri":
            console.log("It's a workshoop day");
            break;
default: 
console.log("We are on a Normal day");
}



// loops is a repetion of a block of code until a certain condition is met

// for loop 

for (let i = 1; i<= 5; i++) {
    console.log(`The number is ${i}`);
}


let fruites = ["Apple", "Banana", "Orange", "Mango", "Pineapple"]

for (let z = 0; z < fruites.length; z++) {
    console.log(`The fruits are ${z + 1} ${fruites[z]}`);
}

let balance = 1000;
let month = 0;

while (balance < 2000) {
    balance *= 1.05;
    month++;
    console.log(`We need ${month} Months to have a balance that is greater than 2,000 rwf when saving`);
}

 let math = Math.floor(Math.random() * 10);

 console.log(math);


 let pin 

 do {
    pin = Math.floor(Math.random() * 10000);
    console.log(`The pin is ${pin}`);
 } while (pin < 10);



//  for.. of works with arrays and strings

let fruits2 = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

for (const [index, value] of fruits2.entries()) {
    if (index === 0) {
        console.log(value.charAt(0).toUpperCase()+ value.slice(1));
    } 
}

// for.. in works with objects

const student = { name: "Grace", cohort: 3, track: "Frontend" }
for (const key in student) {
  console.log(`${key}: ${student[key]}`)
}


//  

for (const number of [1,2,8,12, 43]) {
    if (number > 10 ) {
        console.log(`found ${number}`);
        break;
    }
}


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

for (let i = 1; i <=5; i++) {
    if (i === 2 && i === 3) continue;
    console.log(`The number is ${i}`);
}

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

for (let row = 1; row <= 3; row++) {
  let line = ""
  for (let col = 1; col <= 3; col++) {
    line += `${row * col}\t`
  }
  console.log(line)
}