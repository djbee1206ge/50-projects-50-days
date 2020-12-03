console.log('hello');
const btn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
	console.log('clicked');
	search.classList.toggle('active');
	input.focus();
});
