function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	const image = document.querySelector(`div[data-image="${e.keyCode}"]`);

	if (!audio) {
		return ;
	}
	key.classList.add('playing');
	image.classList.add('playing');
	audio.currentTime = 0;
	audio.play();

	let timeId = setTimeout((repeat) => {
		if (repeat) {
			return ;
		}
		key.classList.remove('playing');
		image.classList.remove('playing');
	}, audio.duration * 1000);

	if (timeout.has(key)) {
		clearTimeout(timeout.get(key));
		timeout.delete(key);
	}
	timeout.set(key, timeId);
}

var timeout = new Map();

window.addEventListener('keydown', playSound);
