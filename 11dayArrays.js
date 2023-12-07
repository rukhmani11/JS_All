// array .. collection of item
let marks = [23, 47, 45, false, "hhh"];
console.log(marks[0]);
console.log(marks[3]);
console.log(marks[4]);
console.log("the lenght of marks is ", marks.length)
marks[4] = 6
console.log(marks)
consle.log(typeof marks)

//array methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array
let r = num.unshift(78)
console.log(r, num)
