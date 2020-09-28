// 1. Write a program to construct the following pattern:
// *
// * *  
// * * *  
// * * * *  

let star = "";
for (let i=0;i<4;i++) {
     for (let j=0;j<1;j++) {
        star += "* "
    }
    console.log(star);
}

// 2. Write a program which prints the elements of the following array:

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i=0;i<arr.length;i++){
    console.log(`Row ${i}`);

    for(j=0;j<arr.length -1;j++)
    console.log(arr[i][j]);
}



// 3. Write a program that will output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 


arr1 = [];
function oneOneONe() {
for (let i=1; i<=4; i++) {
    for (let y = 1; y <= 3; y++) {   
         arr1.push(i);
    }
}
return arr1.join(' ');
}
console.log(oneOneONe());  // 111222333444


//////


function oneTwoThreeFour() {
    let result = " ";
    for(let i=0;i<3;i++) {
       for (let j=0;j<=4;j++) {
        result += j + " "
       }
    }
    return result;
}
console.log(oneTwoThreeFour());  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4