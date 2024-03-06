// first.class = "text-black red"
// first.classList.remove("red")
// first.classList.add("red")
// first.classList.toggle("red")
// first.classList.contains("red")


//setInterval and setTimeout
document.write("hello")

const sum = (a, b, c) => {
  console.log("yes I am walking" + (a + b + c))
  a + b
}
setTimeout(sum, 1000, 1, 2, 7)
setInterval(function() {
  alert("setInterval")

}, 3000)
// let a = setTimeout(function() {
//   alert("I am inside of settimeout")
// }, 5000)

// let b = prompt("Do you want to run the settimeout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)