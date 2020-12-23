const nav = document.querySelector('.nav')
const hamburger = document.querySelector('.hamburger')
const iTag = document.querySelector('.fas.fa-bars')
const menu = document.getElementById('menu')
// listen to scroll event
window.addEventListener('scroll', fixNav)
hamburger.addEventListener('click', () => {
  if(iTag.classList.contains('fa-bars')) {
    iTag.classList.remove('fa-bars')
    iTag.classList.add('fa-times')   
    menu.style.display = 'flex'
     
  }else{
    iTag.classList.add('fa-bars')
    iTag.classList.remove('fa-times') 
    menu.style.display = 'none'
  }
})

function fixNav() {
  //find scrollY value and height of nav
  
  if(window.scrollY > nav.offsetHeight * 2) {
    nav.classList.add('sticky')
  }else{
        nav.classList.remove('sticky')
  }
}