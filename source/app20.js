const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
  const x = e.clientX
  const y = e.clientY
  const btnTop= e.target.offsetTop
  const btnLeft= e.target.offsetLeft

  const xInside = x - btnLeft
  const yInside = y - btnTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside+'px'
  circle.style.left = xInside+'px'
  
  this.appendChild(circle)
    // every time you click you add a new span 
    // — so we need to remove 'circle'
    // the setTimeout is to allow the animation enough time to coplete
  setTimeout(() => circle.remove(), 500)
  })
})