const toggles = document.querySelectorAll('.faq-toggle');
const faq = document.querySelector('.faq');

toggles.forEach((toggle) => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});
