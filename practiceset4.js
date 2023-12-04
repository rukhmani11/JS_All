// practice set 3
// write a program to print the marks of a stident in an object for loop
// let marks={
//   harry:90,
//   anuj:20,
//   ashok:30,
//   roshni:80,
// }
// for(let i=0;i<Object.keys(marks).length;i++){
// //   console.log("the marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
// }

// q.2 write the program in q.1 using loops
// for (let key in marks){
//   console.log("The marks of"+ key + "are"+ marks[key])
// }
// q.3 write a program to print "try again" until the user enters the correct number
// let cn=4
// let i
// while(i!=cn){
//   console.log("try again")
//   i=prompt("enter a number")
// }
// console.log("you have entered a correct number")
// q.4 write a function to find mean of 5 numbers
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
  }
  console.log(mean(4,5,6,7))
  
  
  