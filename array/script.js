const inventors = [
	{first: "Albert", last: "Einstein", year: 1879, passed: 1955},
	{first: "Isaac", last: "Newton", year: 1643, passed: 1727},
	{first: "Galileo", last: "Galilei", year: 1564, passed: 1642},
	{first: "Marie", last: "Curie", year: 1867, passed: 1934},
	{first: "Johannes", last: "Kepler", year: 1571, passed: 1630},
	{first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543},
	{first: "Max", last: "Planc", year: 1858, passed: 1947},
];

const people = ["Beck, Glenn",			"Backer, Carl",
				"Beckett, Samuel",		"Beddoes, Mick",
				"Beecher, Henry",		"Beethoven, Ludwig",
				"Begin, Menachem",		"Belloc, Hilarie",
				"Bellow, Saul",			"Benchley, Robert",
				"Benenson, Peter",		"Ben-Gurion, David",
				"Benjamin, Walter",		"Benn, Tony",
				"Bennington, Chester",	"Benson, Leana",
				"Bent, Silas",			"Bensten, Lloyd",
				"Berger, Ric",			"Bergman, Ingmar",
				"Berio, Luciano",		"Berle, Milton",
				"Berlin, Irving",		"Berne, Eric",
				"Bernhard, Sandra",		"Berra, Yogi",
				"Berry, Halle",			"Berry, Wendell",
				"Bethea, Erin",			"Bevan, Aneurin",
				"Bevel, Ken",			"Biden, Joseph",
				"Bierce, Ambrose",		"Biko, Steve",
				"Billings, Josh",		"Biondo, Frank",
				"Birrell, Augustine",	"Black, Elk",
				"Blair, Robert",		"Blair, Tony",
				"Blake, William"];

const fifteen = inventors.filter(inventor => {
	if (inventor.year >= 1500 && inventor.year < 1600) {
		return (true);
	}
	return (false);
});

console.table(fifteen);

const firstAndLastInventoryNames = inventors.map(inventor => {
	return (inventor.first + ' ' + inventor.last);
});

console.log(firstAndLastInventoryNames);

inventors.sort((a, b) => {
	return (a.year - b.year);
});

console.table(inventors);

const years = inventors.reduce((sum, inventor) => {
	return (sum + (inventor.passed - inventor.year));
}, 0);

console.log(years);

inventors.sort((a, b) => {
	return ((a.passed - a.year) - (b.passed - b.year));
});

console.table(inventors);

const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll('a'));
const de = links.map(link => {
	return (link.outerText);
}).filter(name => {
	return name.includes("de");
});

console.table(de);

people.sort((a, b) => {
	let lastA = a.slice(0, a.search(','));
	let lastB = b.slice(0, b.search(','));

	return (lastA > lastB ? 1 : -1);
});

console.table(people);

const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van",
			"bike", "walk", "van", "car", "truck"];

const sumOfInstances = data.reduce((obj, elem) => {
	if (obj[elem]) {
		++obj[elem];
	} else {
		obj[elem] = 1;
	}
	return (obj);
}, {});

console.log(sumOfInstances);


