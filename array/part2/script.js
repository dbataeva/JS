const people = [
	{ name: "Wes",	year: 1998 },
	{ name: "Kait", year: 1986 },
	{ name: "Irv",	year: 1970 },
	{ name: "Lux",	year: 2015 }
];

const comments = [
	{ text: "Love this!",					id: 523423 },
	{ text: "Super good",					id: 823423 },
	{ text: "You are th best",				id: 2039842 },
	{ text: "Ramen is my fav food ever",	id: 123523 },
	{ text: "Nice Nice Nice!",				id: 542328 }
];

const adult = people.some(person => {
	const date = new Date();

	if (date.getFullYear() - person.year >= 19) {
		return (true);
	}
});

console.log(adult);

const allAdult = people.every(person => {
	const date = new Date();

	if (date.getFullYear() - person.year >= 19) {
		return (true);
	}
});

console.log(allAdult);

const certainCommet = comments.find(comment => {
	if (comment.id === 823423) {
		return (comment);
	}
});

console.log(certainCommet);

 const index = comments.findIndex(comment => {
	 if (comment.id === 823423) {
		 return (comment);
	 }
 });

 console.log(index);
