function changeToChecked(currentCheckbox) {
	let isBetween = false;

	checkboxes.forEach(checkbox => {
		if (checkbox === currentCheckbox || checkbox === lastCheckedObject) {
			isBetween = !isBetween;
		}
		if (isBetween || checkbox === currentCheckbox || checkbox === lastCheckedObject) {
			checkbox.nextElementSibling.classList.add("done");
			checkbox.checked = true;
		}

		return ;
	});

	return;
}

function changeToUnchecked(currentCheckbox) {
	let isBetween = false;

	checkboxes.forEach(checkbox => {
		if (checkbox === currentCheckbox || checkbox === lastCheckedObject) {
			isBetween = !isBetween;
		}
		if (isBetween || checkbox === currentCheckbox || checkbox === lastCheckedObject) {
			checkbox.nextElementSibling.classList.remove("done");
			checkbox.checked = false;
		}

		return;
	});

	return;
}

function changeDisplay(event) {

	if (lastCheckedObject === undefined || !event.shiftKey) {
		if (this.checked) {
			this.nextElementSibling.classList.add("done");
		} else {
			this.nextElementSibling.classList.remove("done");
		}
	} else {
		if (this.checked && lastCheckedObject.checked) {
			changeToChecked(this);
		} else {
			changeToUnchecked(this);
		}
	}
	lastCheckedObject = this;

	return ;
}

const checkboxes = Array.from(document.querySelectorAll(".inbox input[type='checkbox']"));
let lastCheckedObject;

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('click', changeDisplay);
});
