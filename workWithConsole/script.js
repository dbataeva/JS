const dogs = [
	{ name: "Snickers",	age: 2 },
	{ name: "Hugo",		age: 8 }
]

function makeGreen() {
	p.style.color = "#BADA55";
	p.style.fontSize = "50px";
	
	return ;
}

const p = document.querySelector("p");

console.log("%cHello!", "font-size: 20px; text-shadow: 0 0 4px green");
console.warn("Shit!");
console.error("Error!");
console.info("Sharps don't eat people!");
console.assert("Москва" === "москва", "It's wrong!");
console.clear();
console.log(p);
console.dir(p);
dogs.forEach(dog => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}.`);
	console.log(`${dog.name} is ${dog.age} years old.`);
	console.log(`It's ${dog.age * 7} dog years!`);
	console.groupEnd(`${dog.name}`);
});
console.count("1");
console.count("2");
console.count("1");
console.time("fetching");
fetch("https://api.github.com/users/dbataeva").then(data => data.json()).then(data => {
	console.timeEnd("fetching");
	console.log(data);
});
console.table(dogs);
