/// practice set 5
// creat an array of number and take input from the user to add number to this array
// let arr = [1, 2, 3, 4, 5, 6, 7, 83];
// let a = prompt("Enter a number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// keep adding number to the array in 1 until 0 is added to the array
// let arr = [1, 2, 3, 4, 5, 6, 7, 83];
// do {
//   let a = prompt("Enter a number");
//   a = Number.parseInt(a);
//   arr.push(a);
// } while (a != 0);
// console.log(arr);

//filter for number divisible by 10 from a given array
// let arr2 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
// let n = arr2.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(n);

// create an array of square of given number
// let arr = [1, 2, 3, 4, 5, 6, 7, 83];
// let n = arr.map((x) => {
//   return x * x;
// });

// use reduce to calculate factorial of a given number from an array of first n natural number (n being the number whose
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
