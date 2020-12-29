const loveMe = document.getElementById('loveMe')
const times = document.getElementById('times')

let clickTime = 0
let timesCount = 0

loveMe.addEventListener('click', (e) => {
  // this code creates your own doubleclick check
  if (clickTime === 0) {
    clickTime = new Date().getTime()
    console.log('hello')
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0

    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  //create heart icon
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  heart.style.color = 'red'


  // get position of cursor
  const x = e.clientX
  const y = e.clientY
  // get bounding position of image
  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop
  // now calculate cursor position inside image
  const xInside = x - leftOffset
  const yInside = y - topOffset

  console.log(xInside, yInside)

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)
  timesCount++
  times.innerText = `${timesCount}`

  // hearts will now acccuoulate, so we need to remove them

  setTimeout(() => heart.remove(), 1000)  // one item no {} needed

}