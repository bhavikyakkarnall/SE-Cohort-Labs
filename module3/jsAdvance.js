console.log("MODULE 3 LABS - JS ADVANCED")

// console.log("")
// console.log("------------------------------EXCERCISE 1------------------------------")
// console.log("")

/* function makeCounter() {
    let currentCount = 0;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1

let counter2 = makeCounter();
counter2();
counter2();
counter2(); */

// b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)

/* function makeCounter(startFrom) {
    let currentCount = startFrom;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

console.log("new makeCounter function with startFrom argument.")

let newCounter1 = makeCounter(2);
newCounter1(); // 1
newCounter1(); // 2

let newCounter2 = makeCounter(10);
newCounter2();
newCounter2();
newCounter2(); */


// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

/* function makeCounter(startFrom,incrementBy) {
    let currentCount = startFrom;
    return function () {
        currentCount = currentCount + incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

console.log("new makeCounter function with startFrom & incrementBy argument.")

let newCounter3 = makeCounter(0,2);
newCounter3();
newCounter3();
newCounter3(); */


// console.log("")
// console.log("------------------------------EXCERCISE 2------------------------------")
// console.log("")

/* function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all') */

// a) What order will the four tests below print in? Why?

// It will print in reverse order - #4; #3; #2; #1

// b) Rewrite delayMsg as an arrow function

/* var delayMsg = (msg) => {console.log(`This message will be printed after a delay: ${msg}`)};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)

const timeoutID = setTimeout(delayMsg, 10000, '#5: Delayed by 10s');


// d) Use clearTimeout to prevent the fifth test from printing at all.

clearTimeout(timeoutID); */


// console.log("")
// console.log("------------------------------EXCERCISE 3------------------------------")
// console.log("")

// function printMe() {
//     console.log('printing debounced message')
// }

/* a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored. */

/* function debounce(func) {
    let timer;
    return function () {
        if(!timer){
            timer = -1;
            const result = setTimeout(func, 3000);
        return result;
        }
        //clearTimeout(timer);
        //console.log(func);
        //console.log(`This message will be printed after a delay:`)
    }
}

let output = debounce(printMe); //create this debounce function for a)
output();
output();
output();
 */

/* b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms */

/* function debounce(func) {
    let timer;
    return function () {
        if (!timer) {
            timer = -1;
            //const result = setTimeout(func, ms);
            const result = func;
            return result;
        }
        clearTimeout(timer);
        //console.log(func);
        //console.log(`This message will be printed after a delay:`)
    }
}

const output = debounce(printMe);

setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300); */


// console.log("")
// console.log("------------------------------EXCERCISE 4------------------------------")
// console.log("")

// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

/* fibArr = [];
function printFibonacci(num1, num2, len) {
    fibArr.push(num1);
    fibArr.push(num2);
    for (let i = 0; i < len; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        fibArr.push(sum);
    }
    //console.log(fibArr);
    return fibArr;
}

printFibonacci(0, 1, 10);
console.log(fibArr); */


/* var count = 0;
var num1 = 0;
var num2 = 1;

function printMe(msg) {
    console.log(msg)
}


let fibonacciSeq = setInterval(() => {
    count++;
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    printMe(sum);
    if(count == 5) {
        clearInterval(fibonacciSeq);
        console.log("**********END**********")
    }
},
2000

);

setTimeout( () => clearInterval(fibonacciSeq),30*1000); */

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

/* function repeatTimeout() {
    let counter = 1;
    var num1 = 0;
    var num2 = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(sum);
        console.log("Current: "+current);
        // but we do need to call setTimeout recursively so that it repeats executing the function
        if (current < 5) setTimeout(repeatThis, 2000, current + 1) //repeat if limit not reached
    }, 2000, counter);
}
//repeatTimeout(); */

// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

/* function repeatTimeout(delay, limit) {
    let counter = 1;
    var num1 = 0;
    var num2 = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(sum);
        // but we do need to call setTimeout recursively so that it repeats executing the function
        if (current < limit) setTimeout(repeatThis, delay, current + 1) //repeat if limit not reached
    }, delay, counter);
}
//repeatTimeout(2000, 10); */


console.log("")
console.log("------------------------------EXCERCISE 5------------------------------")
console.log("")

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
setTimeout(car.description, 200); //fails