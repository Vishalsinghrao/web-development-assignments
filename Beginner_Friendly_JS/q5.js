// Write a JavaScript program that creates an array of n numbers, calculates the sum of all the numbers in the array,
// and prints the result

const prompt = require("prompt-sync")();


const arraySize = parseInt(prompt("Enter the size of the array: "));
let numberArray = [];


for (let i = 0; i < arraySize; i++) {
    let number = parseInt(prompt("Enter number " + (i + 1) + " : "));
    numberArray.push(number);
}


function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


let totalSum = calculateSum(numberArray);


console.log("The sum of the numbers is : " + totalSum);
