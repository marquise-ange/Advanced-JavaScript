
// the frist way of creating an array 
// const mixed = ["string", number, null, object]

const array = [1,2,3,2,4,5,6,7,8,9,2,10,4] //simple array 

// array methodes 

// 1. mutation (add, remove) 

array.push(11); // these addes an element to the end of the array or the last index of the array 
array.pop(); // these removes the last element of the array or the last index of the array 
array.unshift("derrick"); // these adds an element to the beginning of the array or the first index of the array 
array.shift(); // these removes the first element of the array or the first index of the array 
array.splice(2, 0) // these removes element from the array starting (index, number of elements to remove, ...element to add)



// 2. search and indexing

const index = array.indexOf(2); // these returns the first index of the element in the array or -1 if the element is not found in the array 
const lastIndex = array.lastIndexOf(2); // these returns the last index of the element in the array or -1 if the element is not found in the array
const includes = array.includes(2); // the returns true if the element is found in the array or false if the element is not found in the array 
const find = array.find((element) => element < 5) // the returns the first element in the array that satisifies the provided condition, function or undefined if no element is found 
const findIndex = array.findIndex((element) => {
    return element < 10
});  // these returns the index of the first element in the array that satisifies the provided condition, function or -1 if no element is found 
const at = array.at(22); // the returns the value of the element at the specified index in the array or undefined if they can't find the element at that index.


// 3. Transformation and reodering

let name = ["derrick", "grace", "james", "john", "mary", "jane", "joseph", "joshua", "julius", "jameson"]
let nestedArray = [1,3,4,5,6, ["names", "class", [true,false]], 2 ,6]

const joindedName = name.join(";"); // the Joins all elements of an array into a string and returns this string.with a specified separator between each element
const reversedName = name.reverse(); // the reverses the order of the elements in an array and returns the reversed array
const sort = name.sort((a, b) => a - b); // the sort of element in ascending order or decending order and by defualt its sorted in alphabetical ascending order 
const contact = name.concat(array); // these is Joing two or more arrays and retuns a new array without changing the existing arrays or order
const slice = array.slice(1, 5);
const flatArray = nestedArray.flat(2);



//  3 . functional Iteration

// 1. forEach  

const forEach = name.forEach((element) => {
     console.log(`the element is ${element}`);
})

//  2. map()
const map = array.map((x) => {
    return x * 2
})

const newArray = array



console.log(map); 
console.log(array)