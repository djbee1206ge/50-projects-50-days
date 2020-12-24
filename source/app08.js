const labels = document.querySelectorAll('.form-control label');
const inputs = document.querySelectorAll('.input');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="transition-delay: ${idx * 75}ms">${letter}</span>`)
		.join('');
});
inputs.forEach(input => input.addEventListener('click', () => {
	input.style.backgroundColor = 'white'
	input.style.color = 'black'

}))