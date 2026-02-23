//arry loop (for...of ) eta bebohar kora hoy array er protita element power jonno 

const numbers = [1,2,54,1,3,9];

for(const num of numbers){
    console.log(num);

    //output: 1 2 54 1 3 9
    //num protita element dey
    
}

/**
 * Problem:

You have an array of numbers: [3, 7, 2, 9, 5].

Loop through each number using for...of.

For each number, calculate its square (number × number).

Print each square to the console.

Extra challenge: After that, print the sum of all numbers in the array using the same loop.
 */

const nums = [3, 7, 2, 9, 5];

for(const num of nums){
    const square = num * num;
    console.log(square);
}