function findMatches(data, wordToMatch) {
	let matches = data.filter(place => {
		wordToFind = new RegExp(wordToMatch, "gi");

		if (place.name.normalize().match(wordToFind)
			|| place.subject.normalize().match(wordToFind)) {
				return (place);
		}
	});

	matches.sort((a, b) => {
		return (b.population - a.population);
	})

	return (matches);
}

function numberWithSpaces(num) {
	return (num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
}

function displayMatches() {	
	if (!this.value) {
		suggestions.innerHTML = "";
		return ;
	}

	let matches = findMatches(data, this.value.normalize());
	const html = matches.map(place => {
		const regExp = new RegExp(this.value.normalize(), "g");
		const cityName = place.name.replace(regExp,
						`<span class="h1">${this.value.normalize()}</span>`);
		const subjectName = place.subject.replace(regExp,
							`<span class="h1">${this.value.normalize()}</span>`);

		return `<li>
					<span class="name">${cityName}, ${subjectName},</span>
					<span class="population">население: ${numberWithSpaces(place.population)}</span>
				</li>`
	});

	suggestions.innerHTML = html.join("");

	return ;
}

function cancelEnter(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
	}

	return ;
}

let searchInput = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('keydown', cancelEnter);
