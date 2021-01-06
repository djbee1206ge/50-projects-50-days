const poke_container = document.getElementById('poke-container')
const pokemon_count = 898
const colors = {
  normal: '#A8A878',
  fire: '#FDDFDF',
  water: '#DEF3FD',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  ice: '#98D8D8',
  fighting: '#E6E0D4',
  poison: '#98d7a5',
  ground: '#f4e7da',
  flying: '#A890F0',
  psychic: '#eaeda1',
  bug: '#f8d5a3',
  rock: '#d5d5d4',
  ghost: '#705898',
  dark: '#705848',
  dragon: '#97b3e6',
  steel: '#B8B8D0',
  fairy: '#fceaff',
}
// this is to add an index to the color types 
// try console.log(main_types)
const main_types = Object.keys(colors)


const fetchPokemons = async () => {
  for (i = 1;i <= pokemon_count;i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()

  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  // to uppercase first letter
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  // to pad with zeros
  const id = pokemon.id.toString().padStart(3, '0')
  // get data from an array
  const poke_types = pokemon.types.map(type => type.type.name)
  // I don't really understand the next line
  const type = main_types.find(type => poke_types.indexOf(type) > -1)
  // now align card color with type
  const color = colors[type]
  pokemonEl.style.backgroundColor = color


  const pokemoninnerHTML = `
  <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="Bulbasaur">
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span>
    </small>
  </div>
  `
  pokemonEl.innerHTML = pokemoninnerHTML
  poke_container.appendChild(pokemonEl)
}


fetchPokemons()