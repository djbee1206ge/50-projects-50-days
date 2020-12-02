const openTilt = document.getElementById('open');
const closeTilt = document.getElementById('close');
const tiltArticle = document.querySelector('.day03');

openTilt.addEventListener('click', () => {
	tiltArticle.classList.add('show-nav');
});
closeTilt.addEventListener('click', () => {
	tiltArticle.classList.remove('show-nav');
});
