const contents = document.querySelectorAll('.content')
const navItems = document.querySelectorAll('.phone ul li')

navItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  navItems.forEach(item => item.classList.remove('active'))
}

