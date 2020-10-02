/* Use NESTED LOOPS in each instance

Write a program to construct the following pattern:
*
* *  
* * *  
* * * *   */

for (let i = 0; i <=4; i ++) { 
    let star = '';
    for (let j = 0; j <=i; j++)
    star += '*';
    console.log(star);
};
// *
// **
// ***
// ****
// *****

/* 2. 
Write a program which prints the elements of the following array: 
And creates the following output:
row 0 
 1 
 2 
 1
 24
row 1
*/

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

 function array1(name) {
     for (let i = 0; i <name.length; i++) {
         console.log(`row ${i}`);
         for (let j= 0; j<name.length; j++) {
        console.log(`${name[j]}`);
         }
     }
 }
 console.log(array1(arr)); 
 // row 0
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// row 1
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// row 2
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// row 3
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// row 4
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// row 5
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7

/* 3 .
Write a program that will output the following using loops: */

// 1 1 1 2 2 2 3 3 3 4 4 4


let z = 0;
function name(params) {
    let f = '';
  for (let i = 0; i < 4; i++) {
    for (let y = 0; y <= 3; y++) {
    f += i + ' ';
        //console.log(i);
        //params.push(i);
    }
}  
return f;
}

console.log("firs Loop",name(z)); // firs Loop 0 0 0 0 1 1 1 1 2 2 2 2 3 3 3 3  

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let y = 0;
function name2(params) {
    let x = '';
for (let i = 0; i < 3; i++) {
    for(let y=0; y<=4;y++) {
        x += y + ' '; 
        }
    }  
    return x;
}
console.log("second loop",name2(y)); // second loop 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4  



