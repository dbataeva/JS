function changeSpeedOrVolume() {
	document.documentElement.style.setProperty(`--${this.name}`, this.value);

	return ;
}

function skipScene(event) {
	if (event.target.dataset.skip == "-10") {

	} else {

	}
}

const volumeAndSpeed = document.querySelectorAll("input[type='range']");
const skips = document.querySelectorAll("button[data-skip]");
const video = 

volumeAndSpeed.forEach(control => {
	control.addEventListener("change", changeSpeedOrVolume);
	control.addEventListener("piontermove", changeSpeedOrVolume);
});
skips.forEach(skip => {
	skip.addEventListener("click", skipScene);
})

console.log(skips);