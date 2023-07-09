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
