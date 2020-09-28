//1. Write a program to construct the following pattern:
function stars() {
  let anarr = [];
  for (k = 1; k <= 4; k++) {
    anarr.push("* ");
    console.log(anarr.join(""));
  }
}
stars();

//2. Write a program which prints the elements of the following array:

let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

function printingArrRows(arr) {
  for (array of arr) {
    console.log("row", arr.indexOf(array));
    for (item of array) {
      console.log(item);
    }
  }
}
printingArrRows(arr);

//3. Write a program that will output the following using loops:
function thirdfunc() {
  let arr = [];
  let arr2 = [];
  //first part of the question:
  for (let i = 1; i <= 4; i++) {
    for (let k = 1; k <= 3; k++) {
      arr.push(i);
    }
  }
  //second part of the question:
  for (let i = 1; i <= 3; i++) {
    for (let k = 0; k <= 4; k++) {
      arr2.push(k);
    }
  }
  return arr.join(" ") + "\n" + arr2.join(" ");
}
console.log(thirdfunc());
