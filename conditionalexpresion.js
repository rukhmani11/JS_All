//condition expresion
let a = prompt("hey whats your age?")
a = Number.parseInt(a)//converting the string to a number
if (a < 0) {
  alert("this is an invalid age")
}
else if (a < 9) {
  alert("you are a kid and you cannot even think of driving")
}
else if (a < 18 && a >= 9) {
  alert("you are a kid and you can think of driving after 18")
}
else {
  alert("you can now drive as you are above 18")
}
console.log("done")
console.log("you can", (a < 18 ? "not drive" : "drive"))
// homework - explore switch statement and write a basic program in the comments
// console.log("you can", (a < 18 ? "not drive" : "drive"))


