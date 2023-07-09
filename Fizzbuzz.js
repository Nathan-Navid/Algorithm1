function fizzBuzz(list) {
    for (var i = 0; i < list.length; i++) {
        const value = list[i];
        if (typeof value === "number" && value % 15 ===0) {
            console.log("FizzBuzz")
        } else if (typeof value === "number" && value % 3 === 0) {
            console.log("Fizz")
        } else if (typeof value === "number" && value % 5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(value)
        }
    }
}

fizzBuzz([1, 5, 8, 2, "hello", 879, 93.42, "Fizz", true]);