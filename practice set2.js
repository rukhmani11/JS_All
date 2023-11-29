//practice 2
//q.1 use logical operator to find whether the age of a person lies between 10 and 20
//let age = prompt("whats your  age?"/)
// if (age>10 && age<=20){
//   console.log("your age lies between 10 and 20")
  
// }
// else{
//   console.log("your age doesnt lies between 10 and 20")
// }

//q.2 demostrate the use of switch case statement in javascript
// let age = prompt("what is your age")
// switch(age){
//   case '12':
//     console.log("your age is 12")
//     break
//   case '13':
//     console.log("your age is 13")
//     break
//     case '14':
//     console.log("your age is 14")
//     break
//     case '15':
//     console.log("your age is 15")
//     break
//     case '16':
//     console.log("your age is 16")
//     break
//     defult:
//     console.log("your age is not special")
// }

//q.3 write a program to find whether a number is divisible by 2 and 3
let num = prompt("what is your age?")

if(num % 2 == 0 && num % 3 ==0){
  console.log("your number is divisible by 2 and 3")
}
else{
  console.log("your nubmer is not divisible by 2 and 3")
}

//q.5 print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
let age = 19
let a = age > 18 ? "you can drive" : "you cannot drive"
console.log(a)