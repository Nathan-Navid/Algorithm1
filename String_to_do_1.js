// Challenge 1: pushFront
function pushFront(arr, value) {
    const newArray = [value];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

// Challenge 2: popFront
function popFront(arr) {
    const removedValue = arr[0];
    const newArray = [];
    for (let i = 1; i < arr.length; i++) {
        newArray.push(arr[i]);
    }
    console.log(removedValue);
    return newArray;
}

// Challenge 3: removeAt
function removeAt(arr, index) {
    const removedValue = arr[index];
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArray.push(arr[i]);
        }
    }
    console.log(removedValue);
    return newArray;
}

// Challenge 4: insertAt
function insertAt(arr, index, value) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            newArray.push(value);
        }
        newArray.push(arr[i]);
    }
    return newArray;
}

// Challenge 5: removeDupes
function removeDupes(arr) {
    const noDup = [];
    for (let i = 0; i < arr.length; i++) {
        let isDup = false;
        for (let j = 0; j < noDup.length; j++) {
            if (arr[i] === noDup[j]) {
                isDup = true;
                break;
            }
        }
        if (!isDup) {
            noDup.push(arr[i]);
        }
    }
    return noDup;
}

// ------------------------------------------------------------------------
// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

// ------------------------------------------------------------------------
// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(str) {
    let digits = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digits += str[i];
        }
    }
    return digits;
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// ------------------------------------------------------------------------
// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronym(str) {
    const words = str.split(' ');
    let acronym = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            acronym += words[i][0].toUpperCase();
        }
    }

    return acronym;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));
// ------------------------------------------------------------------------
// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }

    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));
// ------------------------------------------------------------------------
// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, value) {
    return arr.filter((str) => str.length >= value);
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
