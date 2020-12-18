const jokeBtn = document.querySelector('#joke-btn');
const jokeEl = document.querySelector('#joke');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const res = await fetch('https://icanhazdadjoke.com/', config);

	const data = await res.json();

	jokeEl.innerText = data.joke;
}
// ++++++++++++++WEATHER API+++++++++++++++

const searchTerm = document.getElementById('searchInput').value;
const weatherContainer = document.getElementById('weatherContainer');
const weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
const temperatureElem = document.getElementById('temperature');
const humidityElem = document.getElementById('humidity');
const windSpeedElem = document.getElementById('windSpeed');
const cityHeader = document.getElementById('cityHeader');
const weatherIcon = document.getElementById('weatherIconImg');
const weatherData = document.getElementById('weatherData');

const API_KEY = '686107215cf67f7bc1d7b8ffb03fcf4d';
const SEARCH_API = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric`
searchWeather(SEARCH_API)
async function searchWeather(url) {
	const res = await fetch(url)
	const data = await res.json()
	resultFromServer = data
	console.log(data)
	}



function init(resultFromServer) {
		switch (resultFromServer.weather[0].main) {
		case 'Clear':
			weatherContainer.style.backgroundImage = 'url("../assets/img/clear.jpg")';
			break;
		case 'Clouds':
			weatherContainer.style.backgroundImage = 'url("../assets/img/cloudy.jpg")';
			break;
		case 'Rain':
		case 'Drizzle':
			weatherContainer.style.backgroundImage = 'url("../assets/img/rain.jpg")';
			break;
		case 'Thunderstorm':
			weatherContainer.style.backgroundImage = 'url("../assets/img/storm.jpg")';
			break;
		case 'Snow':
			weatherContainer.style.backgroundImage = 'url("../assets/img/snow.jpg")';
			break;
		case 'Mist':
		case 'Fog':
			weatherContainer.style.backgroundImage = 'url("../assets/img/fog.jpg")';
			break;

		default:
			weatherContainer.style.backgroundImage = 'url("../assets/img/default.jpg")';
			break;
	}
	weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.weather[0].icon + '.png';
	let resultDescription = resultFromServer.weather[0].description;
	weatherDescriptionHeader.innerText = resultDescription;
	temperatureElem.innerText = Math.floor(resultFromServer.main.temp) + '°C';
	windSpeedElem.innerText = `Wind Speed: ${Math.floor(resultFromServer.wind.speed * 3.6)}km/h`;
	humidityElem.innerText = `Humidity: ${Math.floor(resultFromServer.main.humidity)}%`;
	cityHeader.innerText = resultFromServer.name;
}

document.getElementById('searchBtn').addEventListener('click', () => {
	if (searchTerm) {
		searchWeather(searchTerm);
	} else {
		alert('Please enter the name of a city');
	}
	weatherData.style.visibility = 'visible';
});
