let num = [2, 34, 4, 6];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
//forreach loop
num.forEach((element) => {
  console.log(element * element);
});

let name = "Harry";
let arr = Array.from(name);
console.log(arr);

//for of
for(let item of num){
  console.log(item)
}

// for in
for(let i in num){  
  console.log(num[i])}