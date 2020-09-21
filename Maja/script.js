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
     for (let i = 0; i <=name.length; i++) {
         console.log(`row ${i}`);
         for (let j= 0; j<=name.length; j++) {
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
// undefined
// row 1
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// undefined
// row 2
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// undefined
// row 3
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// undefined
// row 4
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// undefined
// row 5
// 1,2,1,24
// 8,11,9,4
// 7,0,7,27
// 7,4,28,14
// 3,10,26,7
// undefined

/* 3 .
Write a program that will output the following using loops: */

// 1 1 1 2 2 2 3 3 3 4 4 4


let oneoneone = [];
function name(params) {
  for (let i = 1; i <= 4; i++) {
    for (let y = 1; y <= 3; y++) {
        console.log(i);
        params.push(i);
    }
}  
}

console.log(name(oneoneone)); // 111222333444 

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let y = 0;
function name(params) {
    let x = '';
for (let i = 0; i < 3; i++) {
    for(let y=0; y<=3;y++) {
        x += y + '  '; 
        }
        
    }  
    return x;
}
console.log(name(y)); // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 



