// # Programming Basics: Nested Loops (Using Arrays)

// **Use NESTED LOOPS in each instance**

console.log("")
console.log("QUESTION 1. Write a program to construct the following pattern: ")
// ```
// *
// * *  
// * * *  
// * * * *  
// ```

let stars = ""; // need to have something or returns undefined in front of output
function makeStars() {
    for (i = 0; i < 4; i++) {
        stars += "* ";
        console.log(stars)
    }
}
makeStars();



console.log("")
console.log("QUESTION 2. Write a program which prints the elements of the following array: ")

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// And creates the following output: 
// ```
// row 0 
//  1 
//  2 
//  1
//  24
// row 1
// ```

let createRows = () => {
    for (i = 0; i < arr.length; i++) {
        console.log("row", i)
        for (j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}
createRows()


console.log("")
console.log("QUESTION 3. Write a program that will output the following using loops: ")

// ```
// 1.  1 1 1 2 2 2 3 3 3 4 4 4
// 2.  0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// ```
console.log("")
console.log("loop tripled numbers")

let triple = "";
for (let i = 1; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        triple += i + " ";
    }
}
console.log(triple)

console.log("")
console.log("loop increasing value")

let increase = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        // increase += i + " ";
        increase += j + " ";
    }
}
console.log(increase)
