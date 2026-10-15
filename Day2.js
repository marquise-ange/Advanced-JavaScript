/*
DAY 2: LOGIC PRACTICE
1. EVEN OR ODD
*/
const number = 7;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


//2. GRADE CALCULATOR

function calculateGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

console.log(calculateGrade(85));
console.log(calculateGrade(65));
console.log(calculateGrade(120));


//3. TICKET PRICE

function ticketPrice(age, isStudent) {
    if (age < 0) return "Invalid age";
    if (age > 65) return 0;
    if (age < 12) return 2000;
    if (isStudent) return 3000;
    return 5000;
}

console.log(ticketPrice(8, false));
console.log(ticketPrice(20, true));
console.log(ticketPrice(70, false));


//4. DAY PLANNER

const day = "Monday";
switch (day.toLowerCase()) {
    case "monday":
        console.log("Learn JavaScript basics");
        break;
    case "tuesday":
        console.log("Practice conditions");
        break;
    case "wednesday":
        console.log("Practice functions");
        break;
    case "thursday":
        console.log("Practice arrays");
        break;
    case "friday":
        console.log("Review and solve problems");
        break;
    case "saturday":
    case "sunday":
        console.log("No class");
        break;
    default:
        console.log("Invalid day");
}


//5. COUNTDOWN

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Liftoff!");


//6. SUM AND AVERAGE

const scores = [45, 78, 90, 62, 88];
let sum = 0;
for (const score of scores) {
    sum += score;
}

const average = sum / scores.length;
console.log("Sum:", sum);
console.log("Average:", average);


//7. FIND THE FIRST NUMBER GREATER THAN 100

const numbers = [12, 45, 103, 150, 200];
for (const n of numbers) {
    if (n > 100) {
        console.log("First number greater than 100:", n);
        break;
    }
}


//8. SKIP NEGATIVES

const values = [-5, 10, -2, 20, 0, 7];
for (const value of values) {
    if (value < 0) {
        continue;
    }
    console.log(value);
}


//9. MULTIPLICATION TABLE

for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


//10. FIZZBUZZ + KIGALI

for (let i = 1; i <= 100; i++) {
    if (i % 105 === 0) {
        console.log("FizzBuzzKigali");
    } else if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 21 === 0) {
        console.log("FizzKigali");
    } else if (i % 35 === 0) {
        console.log("BuzzKigali");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 7 === 0) {
        console.log("Kigali");
    } else {
        console.log(i);
    }
}

//CHALLENGE: RIGHT-ANGLED TRIANGLE

for (let row = 1; row <= 5; row++) {
    let stars = "";
    for (let column = 1; column <= row; column++) {
        stars += "*";
    }

    console.log(stars);
}
