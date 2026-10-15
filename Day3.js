//DAY 3: FUNCTION FACTORY
//1. SQUARE
// Arrow function with implicit return
const square = (n) => n * n;
console.log(square(4));
console.log(square(5));
console.log(square(0));


//2. ISEVEN
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));


//3. TEMPERATURE CONVERSION

function celsiusToFahrenheit(c) {
    return (c * 9) / 5 + 32;
}
function fahrenheitToCelsius(f) {
    return ((f - 32) * 5) / 9;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(-40));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));
console.log(fahrenheitToCelsius(0));


//4. FORMAT PRICE

function formatPrice(amount, currency = "RWF") {
    return `${amount.toLocaleString("en-US")} ${currency}`;
}

console.log(formatPrice(5000));
console.log(formatPrice(250000));
console.log(formatPrice(5000, "USD"));


//5. GET GRADE

function getGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

console.log(getGrade(90));
console.log(getGrade(55));
console.log(getGrade(101));


//6. MAX

function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log(max(3, 8, 2));
console.log(max(10, 25, 15));
console.log(max());


//7. CAPITALIZE

function capitalize(word) {
    if (word.length === 0) {
        return "";
    }

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("kigali"));
console.log(capitalize("RWANDA"));
console.log(capitalize(""));


//8. COUNT VOWELS

function countVowels(text) {
    let count = 0;
    const vowels = "aeiou";

    for (const character of text.toLowerCase()) {
        if (vowels.includes(character)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Kigali"));
console.log(countVowels("EDUCATION"));
console.log(countVowels("rhythm"));


//9. IS PALINDROME

function isPalindrome(word) {
    const normalized = word.toLowerCase();
    const reversed = normalized.split("").reverse().join("");

    return normalized === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Kigali"));
console.log(isPalindrome(""));


//10. REPEAT ACTION

function repeatAction(times, callback) {
    for (let round = 1; round <= times; round++) {
        callback(round);
    }
}

repeatAction(3, (round) => console.log("Round", round));
repeatAction(2, (round) => console.log(round * 10));
repeatAction(0, (round) => console.log(round));


//11. CREATE COUNTER

function createCounter(start = 0) {
    let count = start;

    return {
        increment: () => {
            count++;
        },
        decrement: () => {
            count--;
        },
        getValue: () => count
    };
}

const counter1 = createCounter(5);
counter1.increment();
console.log(counter1.getValue());

counter1.decrement();
console.log(counter1.getValue());

const counter2 = createCounter();
console.log(counter2.getValue());


//12. MAKE DISCOUNT

function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent) / 100;
    };
}

const discount10 = makeDiscount(10);
const discount20 = makeDiscount(20);
const discount100 = makeDiscount(100);

console.log(discount10(1000));
console.log(discount20(5000));
console.log(discount100(200));  
