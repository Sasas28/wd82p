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

// const userInput = parseInt(prompt("input a number"));

// for(let i = 1; i < userInput; i++) {

//     if (i % 3 === 0) { 
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz");
//     } else {
//         console.log(i);
//     }

// }

let fruits = ["Apol", "Banana", "Orange"];

fruits[0] = "Apple";
let size = fruits.length; // to know the length of an array
let removeLastElement = fruits.pop(); // to remove last element in an array
let removeFirstElement = fruits.shift(); // to remove first element in an array
let removeSpecificElement = fruits.splice(0, 1); // splice(start index to remove, how many to remove)
let addElement = fruits.push("Mango"); // adding element in the last index
let addElementStart = fruits.unshift("Blueberry"); // adding element in the first index
let addSpecificElement = fruits.splice(1, 0, "Pineapple");

const vegetables = ["tomato", "potato", "cucumber"];
const meat = ["chicken", "pork", "beef"];

let foods = fruits.concat(vegetables, meat); // merge an array

const ages = [32, 33, 16, 40];

for (let i = 0; i< foods.length; i++) {
    // console.log(foods[i]);
}// for (initialization; condition; iteration)

foods.forEach((food) => console.log(food)); // another loop way

for (let food of foods) {
    //console.log(food);
} // another way