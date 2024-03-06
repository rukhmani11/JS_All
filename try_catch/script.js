setTimeout(() => {
  console.log("hacking wifi... please wait...")
}, 1000)

try {
  setTimeout(() => {
    console.log(rahul)
  }, 100)
}
catch (error) {
  console.log("balle balle")
}

try {

  console.log(rahul)

}
catch (error) {
  console.log("balle balle")
}


setTimeout(() => {
  console.log("fetching username and password... please wait...")
}, 2000)


setTimeout(() => {
  console.log("Hacking rahul's facebook id... please wait...")
}, 3000)


setTimeout(() => {
  console.log("Useername and password of rahul (+919356700001) fetched... please wait...")
}, 4000)




try {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age > 150) {
    throw new ReferenceError("This is probably not true")
  }
}
catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}
console.log("The script is still running")


// finally

const f = () =>{
  try {
    let a = 0;
    console.log(program);
    console.log("Program ran successfully");
  }
  catch (err) {
    console.log("This is an error");
    console.log(p);
  }
  finally {
    console.log("I am a good boy");
    // Close the file
    // Exit the loop
    // Write to the log file
  }
