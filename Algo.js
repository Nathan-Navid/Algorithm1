function IsEven(num) {
    if (num === 0) {
        return "0 is exceptional "
    }
    console.log(Number.isInteger(num))
    return num % 1 == 0
}

console.log(IsEven(1));
console.log(IsEven(14));
console.log(IsEven(0));
console.log(IsEven(23.6));

