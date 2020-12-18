const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
// so we know whic slide we're on
let activeSLide = 0

rightBtn.addEventListener('click', () => {
  activeSLide++ 
  if(activeSLide > slides.length -1) {
    activeSLide = 0
  }
  setBgToBody()
  setActiveSlide ()
})
leftBtn.addEventListener('click', () => {
  activeSLide--
  if(activeSLide < 0) {
    activeSLide = slides.length -1
  }
  setBgToBody()
  setActiveSlide ()
})

setBgToBody()
setActiveSlide ()
function setBgToBody () {
  body.style.backgroundImage = slides[activeSLide].style.backgroundImage
  }

function setActiveSlide () {
  slides.forEach(slide => slide.classList.remove('active')) // you don't need {} if it's just one irem

  slides[activeSLide].classList.add('active')
}