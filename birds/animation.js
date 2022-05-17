function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	const image = document.querySelector(`div[data-image="${e.keyCode}"]`);

	if (!audio)
		return ;
	key.classList.add('playing');
	image.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
	setTimeout(() => {
		key.classList.remove('playing');
		image.classList.remove('playing');
	}, audio.duration * 1000);
}

const keys = document.querySelectorAll('.key');
const images = document.querySelectorAll('.image');

window.addEventListener('keydown', playSound);
