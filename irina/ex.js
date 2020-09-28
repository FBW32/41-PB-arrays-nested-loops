// Programming Basics: Nested Loops (Using Arrays)
// Use NESTED LOOPS in each instance

// Write a program to construct the following pattern:
// *
// * *  
// * * *  
// * * * *  


let pattern;
for (let i = 0; i < 4; i++) {
    pattern = '';
    for (let j = 0; j <= i; j++) {
     pattern += ' *'
    }
    console.log(pattern);
}
// Write a program which prints the elements of the following array:
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
   // console.log(`row ${i}`);
const map1 = arr[i].map(x => x);
//console.log(map1);
}
//OR
for(let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
   // console.log(`row ${[i]}`); 
    for(var j = 0; j < subArr.length; j++) {
    // console.log(subArr[j])
    }
   };

// row 0 
//  1 
//  2 
//  1
//  24
// row 1.....

// Write a program that will output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4

let num1 = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        num1 += i + ' ';
    }
  }
console.log(num1);

//OR

function sequence() {
    const boxArr = [];
    for(let i = 1; i <= 4; i++) {
        for (let j = 0; j < 3; j++) 
        boxArr.push(i)  
    }
    return boxArr.join(" ")
}

console.log(sequence()); 

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
function sequence2(number) {
    const boxArr = [];
    for(let i = 1; i <= 3; i++) {
        for (let j = 0; j < 5; j++) 
        boxArr.push(j)  
    }
    return boxArr.join(" ")
}

console.log(sequence2());