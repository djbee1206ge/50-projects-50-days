const container = document.querySelector('.container')
const unsplash_URL = 'https://source.unsplash.com/random/'
const rows = 10

for (let i = 0;i < rows * 3;i++) {
  const img = document.createElement('img')
  img.src = `${unsplash_URL}${getRandomSize()}`
  console.log(img.src)
  container.appendChild(img)
}
function getRandomSize() {
  return `${getRandomNbr()}x${getRandomNbr()}`
}

function getRandomNbr() {
  return Math.floor(Math.random() * 10) + 300
}
