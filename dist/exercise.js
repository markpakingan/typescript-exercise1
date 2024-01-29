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
// Write a TypeScript function that takes a string as input and returns true 
// if the string is a palindrome and false otherwise. A palindrome is a word, phrase, number, 
// or other sequences of characters that reads the same forward and backward, 
// ignoring spaces, punctuation, and capitalization.
const isPalindrome = (word) => {
    // for(let x = 0; x < word.length - 1; x++ ){
    //     for (let y = word.length; y > 0; y-- ){
    //         if(x !== y){
    //             return false
    //         }
    //     }
    // }
    // return true;
    let cleanedWord = word.toLowerCase();
    let reversedWord = cleanedWord.split("").reverse().join("");
    return cleanedWord === reversedWord;
};
