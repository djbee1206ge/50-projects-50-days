const API_URL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.querySelector('.git-main')

getUser('djbee1206ge')

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username)

    createUserCard(data)
    getRepos(username)

  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('No profile with this username found.')
    }
  }
}
async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created')

    addReposToCard(data)

  } catch (err) {
    createErrorCard('Problem fetching repos.')
  }
}

function createUserCard(user) {
  const userCard = `
   <div class="user-card">
   <div>
     <img class="avatar" src="${user.avatar_url}" alt="${user.name} avatar">
   </div>
   <div class="user-info">
     <h2>${user.login}</h2>
     <p>${user.bio}</p>

     <ul>
       <li>${user.followers} <strong>Followers</strong></li>
       <li>${user.following} <strong>Following</strong></li>
       <li>${user.public_repos} <strong>Repos</strong></li>
     </ul>

     <div id="repos"></div>
   </div>
 </div>
   `
  main.innerHTML = userCard
}

function createErrorCard(msg) {
  const cardHTML = `
      <div class="user-card">
        <h2>${msg}</h2>
      <div>
    `
  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos
    .slice(0, 10)
    .forEach(repo => {
      const repoEl = document.createElement('a')
      repoEl.classList.add('repo')
      repoEl.href = repo.html_url
      repoEl.target = '_blank'
      repoEl.innerText = repo.name

      reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  if (user) {
    getUser(user)
    search.value = ''
  }
})