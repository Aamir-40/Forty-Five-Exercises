"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple");
console.log("apple" != "apple");
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple");
console.log("mango".toLowerCase() == "mango");
// Numerical tests
console.log("Numerical tests:");
console.log(100 > 70);
console.log(90 < 81);
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
