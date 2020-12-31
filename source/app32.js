console.log('hello')

const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
  if (good.checked && fast.checked && cheap.checked) {
    if (good === theClickedOne) {
      fast.checked = false
    }
    if (cheap === theClickedOne) {
      good.checked = false
    }
    if (fast === theClickedOne) {
      cheap.checked = false
    }
  }
}
