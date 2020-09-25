//**Use NESTED LOOPS in each instance**

//1. Write a program to construct the following pattern: 


for (let i = 0; i < 4; i++) {
    let star = "*";

    for (let j = 0; j < i; j++) {
        star += '*';
        
    }
     console.log(star);
}


//*
//**
//***
//****  

// 2. Write a program which prints the elements of the following array: 

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function printArrays(par) {
    for (let i = 0; i < par.length; i++) {
         console.log("row ==>", i);
         for (let j = 0; j < par[i].length; j++) {
            
             console.log(par[i][j]);
         } 
    } 
}
       printArrays(arr); 

/*
row ==> 0
1
2
1
24
row ==> 1
8
11
9
4
row ==> 2
7
0
7
27
row ==> 3
7
4
28
14
row ==> 4
3
10
26
7

*/

//3. Write a program that will output the following using loops: 

let iArr = [];

for (let i = 1; i <= 4; i++) {
   
    
    //console.log(item); 
    for (let j = 0; j < 3; j++) {
       
        iArr.push(i);
    }
}

console.log(iArr.join(" ")); // 000111222333444


let iArr2 = [];

for (let i = 1; i <= 4; i++) {
   
    
    //console.log(item); 
    for (let j = 0; j < 5; j++) {
       
        iArr2.push(j);
    }
}

console.log(iArr2.join(" "));