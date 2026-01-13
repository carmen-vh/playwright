const numbers = [...Array(101).keys()];

for (let index = 1; index < numbers.length; index++) {
    // const element = numbers[index]
    if (numbers[index] % 15 == 0) {
        console.log("fizzbuzz!");
    } else if (numbers[index] % 5 == 0) {
        console.log("buzz");
    } else if (numbers[index] % 3 == 0) {
        console.log("fizz");
    } else {
        console.log(numbers[index])
    }
}