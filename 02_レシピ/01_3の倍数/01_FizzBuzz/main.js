const FizzBuzz = function (number) {
    for (let n = 1; n <= number; n++) {
        if (n % 3 === 0) {
            if (n % 5 === 0) {
                console.log(n + "FizzBuzz")
            } else {
                console.log(n + "Fizz")
            }
        } else if (n % 5 === 0) {
            console.log(n + "Buzz")
        } else {
            console.log(n)
        }
    }
}
FizzBuzz(30)