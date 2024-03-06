



// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows)
// console.log(t.caption)
// console.log(t.tHead.firstElementChild)
// console.log(t.tFoot)
// console.log(t.tBodies)
// console.log(t.rows[0].rowIndex)
// console.log(t.rows)

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function() {
    alert('Nice, you triggered this alert message!', 'success')
  })
}


// card css
let cicites = document.querySelectorAll(".card-title")
cicites[0].style.color = "red"
cicites[1].style.color = "green"
cicites[2].style.color = "blue"
console.log(cicites)

document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "green"