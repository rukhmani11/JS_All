// // practice set 6
// // write a program usisng prompt function to take input of age as a value from the user and use alert to tell him if he can drrive

// // let age = prompt("Enter your age")
// // age = Number.parseInt(age)
// // const canDrive = (age) => {
// //   return age >= 18 ? true : false
// // }
// // if (canDrive(age)) {
// //   alert("Yes you can drive")
// // }
// // else {
// //   alert("You cannot drive")
// // }

// // q.2 in q.1 use confirm to ask the user if he wants to see the prompt again



// const canDrive = (age) => {
//   return age >= 18 ? true : false
// }
// let runAgain = true;
// while (runAgain) {
//   let age = prompt("Enter your age")
//   age = Number.parseInt(age)
//   if (age < 0) {
//     console.error("Please enter a valid age");
//     break;
//   }
//   if (canDrive(age)) {
//     alert("Yes you can drive")
//   }
//   else {
//     alert("You cannot drive")
//   }
//   runAgain = confirm("Do you want to play again?")
// }


// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// let runagain = true;

// while (runagain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
//   if (age < 0) {
//     console.error("Please enter a valid age");
//     break;
//   }
//   if (canDrive(age)) {
//     alert("Yes you can drive");
//   } else {
//     alert("You cannot drive");
//   }
//   runagain = confirm("Do you want to play again?");
// }

//write a program to change the url to google.com (redirection) if user enters a number greater than 4

// let number = prompt("Enter the number")
// number = Number.parseInt(number)
// if (number > 4) {
//   location.href = "https://www.google.com"
// }

//change the background of the page to yellow, red or any other color based on user input through prompt
let color = prompt("Enter the page background color")
document.body.style.background = color