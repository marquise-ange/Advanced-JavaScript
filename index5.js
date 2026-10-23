// Asynchronus JavaScript, Promises, Async/Await, Fetch API, and Error Handling


// Asynchronous Operation 

// setTimeout(() => {
//     console.log("I am inside the timeout");
// }, 5000);



// async function asyncTimer() {
//     console.log("I am outside the timeout");
//     await timer(5000);
//     console.log("I am inside the timeout");
// }

// asyncTimer();



// synchronous Operation

// console.log("I am outside the timeout");


// Promises

// 1. Pending these is the initial state of a promise, before it is either fulfilled or rejected.

// 2. Fulfilled these is the state of a promise representing a successful operation.

// 3. Rejected these is the state of a promise representing a failed operation.



// we fixe the <pending> state issue with Async/Await  


async function timer(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function asyncTimer() {
    console.log("I am outside the timeout");
    await timer(5000);
    console.log("I am inside the timeout");
}

// asyncTimer(); // function call, execution or invocation of the function





// Api fethcing with async/await and error handling with promises 




// native fetch method build in fetching method

//  these is the simple example of fetching data from an Api using native fetch method and async/await

async function fetchData() {
    const url = fetch("https://dummyjson.com/products");
    const response = await url;
    if (!response.ok) {
        throw new Error("Error fetching data");
    }
    const data = await response.json(); // these is the method that converts the response to json format
    console.log(data);
}



//  the other fetching method using .then() and .catch() methods

const fetchDataWithThenCatch = () => {
    fetch("https://dummyjson.com/products1234567")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching data");
            }

            return response.json();
        })

        .then((data) => {
            console.log(data);
        })

        .catch((error) => {
            console.error(error);
        });
}

// fetchDataWithThenCatch();


//  try and catch method and error handline 


const products = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Error fetching data");
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

products();