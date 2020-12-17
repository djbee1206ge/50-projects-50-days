const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  // allows toggling of last full cup
  if(smallCups[idx].classList.contains('full') 
    &&!smallCups[idx].nextElementSibling.classList.contains('full')){
      idx--
    }
  // adds full cups
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full')
    }else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length
console.log( `fullCups = ${fullCups}`)
console.log( `totalCups = ${totalCups}`)
    if(fullCups === 0)  {
      percentage.style.visibility = 'hidden'      
      percentage.style.height = 0          
    }else{
      percentage.style.visibility = 'visible'      
      percentage.style.height = `${fullCups / totalCups * 330}px` 
      percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    if(fullCups === totalCups) {
      remaining.style.visiblity = 'hidden' 
      remaining.style.height = 0
    }else{
      remaining.style.visiblity = 'visible' 
      liters.innerText= `${2 - (fullCups*250/1000)} L`
    }

}