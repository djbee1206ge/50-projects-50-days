const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'We just love to create pages like this!'
speedEl.value = 5
let idx = 1
let speed = 100

writeText()

speedEl.addEventListener('input', (e) => speed = 500 / e.target.value)
console.log(speed)
function writeText() {
  textEl.innerText = text.slice(0, idx)
  idx++
  if (idx > text.length) {
    setTimeout(() => idx = 1, 500)

  }
  setTimeout(writeText, speed)
}
