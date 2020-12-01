const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let activeCount = 1;

next.addEventListener('click', () => {
	activeCount++;

	if (activeCount > circles.length) {
		activeCount = circles.length;
	}
	update();
});

prev.addEventListener('click', () => {
	activeCount--;

	if (activeCount < 1) {
		activeCount = 1;
	}
	update();
});

function update() {
	circles.forEach((circle, id) => {
		if (id < activeCount) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');
	progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	if (activeCount === 1) {
		prev.disabled = true;
	} else if (activeCount === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
