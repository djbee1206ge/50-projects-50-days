# WORKING WITH APIs
```
const API_KEY = 'bef321ba53a66a67a8fbb3c0a9cb99f2'
const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=bef321ba53a66a67a8fbb3c0a9cb99f2&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=bef321ba53a66a67a8fbb3c0a9cb99f2&query="'


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


// GET INITIAL MOVIES
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach(movie => {
    const {title, poster_path, release_date, vote_average, overview} = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title} movie poster">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview"><h3>overview</h3>
      <small>Released: ${release_date}</small>
      <p>${overview}</p>
      </div>

    `
    main.appendChild(movieEl)


  });

}


function getClassByRate(vote) {
  if(vote >=8) {
    return 'green'
  }else if(vote >=5) {
      return 'orange'
  }else{
    return 'red'
  }
}

form. addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value 

  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''

  }else{
    window.location.reload()
  }
})


// https://api.themoviedb.org/3/search/movie?api_key=bef321ba53a66a67a8fbb3c0a9cb99f2&language=en-US&query="potter"&page=1&include_adult=false
// https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="Hard"

```





