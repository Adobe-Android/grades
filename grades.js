// Requirements:

// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// * A score of 50-60 is an F
// * A score of 61-70 is a D
// * A score of 71-80 is a C
// * A score of 81-90 is a B
// * A score of 91-100 is an A

// Start with array of random scores in your JavaScript


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;

for (var counter = 0; counter < scores.length; counter++) {
    var value = scores[counter];
    if (value >= 91) {
        A++;
    } else if (value >= 81) {
        B++;
    } else if (value >= 71) {
        C++;
    } else if (value >= 61) {
        D++;
    } else {
        F++
    }
};

console.log(`There are ${A} A's, ${B} B's, ${C} C's, ${D} D's, and ${F} F's.`);
console.log("The highest grade is", Math.max(...scores));
console.log("The highest grade is", Math.min(...scores));

// Use console.log() to output the following criteria:

// 1. How many of each grade?
// 2. What is the lowest grade?
// 3. What is the highest grade?