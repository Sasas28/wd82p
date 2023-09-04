// const add7 = (num) => num + 7;
// const multiply = (num1, num2) => num1 * num2;
// const capitalize = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }
// const lastletter = (words) => {
//     return words.charAt(words.length-1)
// }
// console.log(add7(10));
// console.log(multiply(3, 5));
// console.log(capitalize("words"));
// console.log(capitalize("WORDS"));
// console.log(capitalize("wOrDs"));
// console.log(lastletter("testing"));

const userInput = parseInt(prompt("input a number"));

for(let i = 1; i < userInput; i++) {

    if (i % 3 === 0) { 
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else {
        console.log(i);
    }

}