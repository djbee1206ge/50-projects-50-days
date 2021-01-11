const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = [] //for the API data
const URL = 'https://randomuser.me/api?results=100'

filter.addEventListener('input', (e) => filterData(e.target.value))

getData()

async function getData() {
  const res = await fetch(URL)

  const { results } = await res.json()

  //cleaqr results first
  result.innerHTML = ''

  results.forEach(user => {
    const li = document.createElement('li')

    listItems.push(li) // add each user to list
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `
    result.appendChild(li)
  });
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
