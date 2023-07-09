// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
function SetAndSwap() {
    let myNumber = 42;
    let myName = "Navid";
    let temp = myNumber;
    myNumber = myName,
        myName = temp;

    return {
        myName,
        myNumber
    }

}
let result = SetAndSwap();
console.log("My Name: ", result.myName)
console.log("My Number: ", result.myNumber)
//--------------------------------------------------------------------------

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
function Num52To1066() {

    for (var i = 52; i <= 1066; i++) {
        console.log(i)
    }
}
Num52To1066()
//------------------------------------------------
// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful() {
    for (let i = 1; i <= 98; i++)
        console.log("Good Morning")
}
beCheerful()
//-----------------------------------------------
// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
function Multiple3() {
    for (let i = -300; i < 0; i++) {
        if (i === -3 || i === -6) {
            continue
        } else if (i % 3 === 0) {
            console.log(i)
        }
    }
}
Multiple3()
//-------------------------------------------------
// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
function Integers() {
    let i = 2000;
    while (i <= 5280) {
        console.log(i);
        i++;
    }
}
Integers()
//-------------------------------------------------
// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
function BirthdayDate(month, day) {
    const birthMonth = 12;
    const birthDay = 24;

    if ((month === birthMonth && day === birthDay) || (month === birthDay && day === birthMonth)) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}

BirthdayDate(12, 24);
BirthdayDate(24, 12);
BirthdayDate(6, 1);
//-------------------------------------------------------
// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year) {
    const guessYear = year;
    if (guessYear % 400 === 0) {
        return true
    } else if (guessYear % 4 === 0) {
        return true
    } else if (guessYear % 100 === 0) {
        return false
    } else {
        return false
    }
}
console.log(leapYear(365))
console.log(leapYear(364))
//----- ------------------------------------
// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

let count = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i)
        count++;
    }
}

console.log("Count of all Integer Multiple of 5: ", count)
//--------------------------------------------------
// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
// let num = 0;
// let i = 6;
// while (i <= 60000) {
//     i++
//     if (i % 6 === 0) {
//         console.log(i)
//         num++
//     }
// }
// console.log(num)

// second way
let i = 6;

while (i <= 60000) {
    console.log(i);
    i += 6;
}
//---------------------------------------------
// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for (let i = 1; i <= 100; i++) {
    if (i % 10 == 0) {
        console.log("Dojo")
    } else if (i % 5 === 0) {
        console.log("Coding")
    } else {
        console.log(i)
    }
}
//----------------------------------------
// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
function WhatDoYouKnow(input) {
    return input

}
console.log(WhatDoYouKnow("Incoming"))
console.log(WhatDoYouKnow({ name: "Navid", age: 25 }))
//----------------------------------------
// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
let sum = 0;
for (let i = -300000; i <= 300000; i += 2) {
    sum += i;
}
console.log("The sum is: ", sum)

// let totalNumbers = Math.ceil(600001 / 2); // Total number of odd integers from -300,000 to 300,000
// let sum = totalNumbers * totalNumbers;
// console.log("The sum is:", sum);
//-----------------------------------------------

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
let num = 2016;
while (num >= 0) {
    console.log(num)
    num -= 4
}
//-----------------------------------------------
// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function printMultiple(lowNum, highNum, multi) {
    for (let i = highNum; i >= lowNum; i -= multi) {
        console.log(i)
    }
}
printMultiple(2, 9, 3)
//-----------------------------------------------
// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), 
// print the multiples of param1, 
// starting at param2 and 
// extending to param3. 
// One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
function flexibleCountdown(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i)
        }
        i++
    }
}
flexibleCountdown(3, 5, 17, 9)