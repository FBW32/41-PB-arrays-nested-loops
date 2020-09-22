// Programming Basics: Nested Loops (Using Arrays)

/* 1. Write a program to construct the following pattern:
    *
    * *  
    * * *  
    * * * * 
*/
for (let i = 0; i < 4; i++) {           // for rows
    let asterikStr = '';
    for (let y = 0; y <= i; y++) {      // for columns
        asterikStr += '*';
    }
    console.log(asterikStr);
}
/*
    *
    **
    ***
    ****
*/
// OR
let design = "";
for ( let i = 1; i <= 5; i++) {
   
    for (let j = 1; j < i; j++) {
         design = design + " " + ("*");
    }
    console.log(design);
    design = " ";
}
/*
    *
    * *
    * * *
    * * * *
    * * * * *
*/

/* 2. Write a program which prints the elements of the following array:
    let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    And creates the following output:

    row 0 
    1 
    2 
    1
    24
    row 1
*/
let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; 
for (let i = 0; i < array.length; i++) {
    console.log(`"row ${i}"`);
     for(var j = 0; j < array[i].length; j++){
            console.log(`${array[i][j]}"`);
        }
}
/*
    "row 0"
    1"
    2"
    1"
    24"
    "row 1"
    8"
    11"
    9"
    4"
    "row 2"
    7"
    0"
    7"
    27"
    "row 3"
    7"
    4"
    28"
    14"
    "row 4"
    3"
    10"
    26"
    7"
*/

/* 3. Write a program that will output the following using loops:
    1 1 1 2 2 2 3 3 3 4 4 4
    0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/
arr = [];
for (let i = 1; i <= 4; i++) {
    for (let y = 1; y <= 3; y++) {
        let strNums = i.toString() + " ";
        arr.push(strNums)
    }
}
console.log(arr.join('')); // 1 1 1 2 2 2 3 3 3 4 4 4 

let arr1 = "";
for (let i = 0; i < 3; i++) {
    for(let j = 0; j <= 4; j++) {
        arr1 += j + " "; 
    }
}  
console.log(arr1); // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 
