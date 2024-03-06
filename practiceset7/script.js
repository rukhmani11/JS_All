// Create Snake water and gun game in javascript.
// The game should ask you to enter S, W or G. The computer should be able to randomly generate S,
// w og G and declear win or loss using alert
// Use alert, prompt and confirm whereever required!


let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]
const match = (cpu, user) => {
  if (cpu === user) {
    return 0
  }
  else if (cpu === "S" && user === "W") {
    return "cpu"
  }

  else if (cpu === "S" && user === "G") {
    return "user"
  }

  else if (cpu === "G" && user === "W") {
    return "user"
  }
  else if (cpu === "G" && user === "S") {
    return "cpu"
  }

  else if (cpu === "w" && user === "S") {
    return "user"
  }
  else if (cpu === "W" && user === "G") {
    return "cpu"
  }

}
let result = match(cpu, user)
document.write(`Cpu:${cpu} and User: ${user} \nThe winner is: ' + result`)


