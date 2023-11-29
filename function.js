//function in js
// supraction  of logic

function oneplusavg(x, y) {
    console.log("done")
    return 1 + (x + y) / 2
  }
  let a = 1;
  let b = 2;
  let c = 3;
  console.log("one plus average of a and b is ", oneplusavg(a, b))
  console.log("one plus average of b and c is ", oneplusavg(b, c))
  console.log("one plus average of a and c is ", oneplusavg(a, c))
  
  //arrow function
  const sum = (p, q) => {
    return p + q
  }
  console.log(sum(9, 7))
  // arrow function with no parameter
  const hello = () => {
    console.log("hey how are you. i am toh fine yaar")
    return "hi"
  }
  let v = hello();
  console.log(v)
  