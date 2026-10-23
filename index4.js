// Objects in JavaScript and destructuring with spread Operators/Rest Paramenters Template literals  

// creating an Object in JavaScript

const student = {
    name: "John",
    course: "Advanced - Front-End Development",
    cohort: "cohort#13",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    age: 25,
    isEnrolled: true,
    profile: null,
    address: {
        street: "123 Main St",
        city: "Kigali",
        state: "Kigali",
        zip: "00000"
    },
    greet() {
        console.log(`Hello, my name is ${this.name} and I am enrolled in ${this.course}.`);
    }
};


// mutation

// adding a new property to the object

student.email = "example@example.com";

// updating an existing property of the object

student.name = "Derrick";


// deleting a property from the object 

// delete student.name;


// the way we move or access lement in object is by using dot notation or bracket notation 

// dot notation 

// console.log(student.skills.push("TypeScript"));
// console.log(student.skills);
// console.log(student.greet());


// bracket notation 

// console.log(student["address"]["city"]);


// Looping over or thought an object using for...in loop 

// Object.keys () method 

// Object array methods 

const prices = { shoes: 45000, bag: 30000, cap: 8000 };

// loop

for (const key in prices) {
    // console.log(key + ": " + prices[key]);
}


// Object.values() method

// console.log(Object.entries(prices))
// console.log(Object.keys(prices))
// console.log(Object.values(prices))



// Destructuring of the object 

const { name, course } = student;

// console.log(name, course);



// spread operator and rest parameters 

(...student) => {};
// const newStudent = {...student};
// const newStudent2 = [...student];

// rest parameters 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fuction decralation 

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 10);
}

// console.log(sum(...numbers));

// arrow function 

(...number) => {

}

// function expression 
// const sum = function (...numbers) {

// }


// spread operators 

 const arry1 = [1,2,3,4,5];
 const array2 = [6,7,8,9,10];

// marging two arrays using spread operators
 const newArray = [...arry1, ...array2];

//  copying an array using spread operators // shollow copy of an array using spread operators

const copyArray = [...arry1];

copyArray.push(11);

// passing data using spread operators to a function 

function add(x, y, z) {
    return x + y + z;
}

// console.log(add(...arry1));

// console.log(arry1);
// console.log(copyArray);


// spread operators with objects 

const student1 = {
    Job: "Software Engineer",
    Postion: "intern",
    project: "Micro-services",
    isInProduction: true
}

// marging of two object 

const newStudent = {...student, ...student1};

// shallow copy of an object using 

const copyStudent = {...student1};

console.log(newStudent);
console.log(student1);
copyStudent.isInProduction = false;
console.log(copyStudent);

// template literals

const firstName = "Derrick";
const lastName = "Kamanzi";
const age = 25;
const city = "Kigali";

const message = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`;

console.log(message);