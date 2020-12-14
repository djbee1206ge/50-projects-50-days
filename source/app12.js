const toggles = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('active');
	});
});
