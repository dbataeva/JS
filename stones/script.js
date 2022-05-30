function handleChange() {
	let suffix = this.dataset.sizing;

	if (!suffix) {
		suffix = '';
	}
	document.documentElement.style.setProperty(`--${this.name}`,
												this.value + suffix);
}

const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('pointermove', handleChange));
