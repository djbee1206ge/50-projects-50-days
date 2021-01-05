const container = document.getElementById('container')
const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
const SQUARES = 600


for (let i = 0;i < SQUARES;i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))
  container.appendChild(square)
}

function setColor(el) {
  const color = getRandomColor()
  el.style.backgroundColor = color
  el.style.boxShadow = `0 0 0.1rem ${color}, 0 0 0.5rem ${color}`
}
function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = 'none'
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}