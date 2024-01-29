"use strict";
// Create a function that takes an array of numbers as 
// input and returns the sum of all the even numbers in the array.
const sumOfEvenNums = (numbers) => {
    if (numbers.length === undefined) {
        return 0;
    }
    let sum = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
    console.log("This is working!");
};
