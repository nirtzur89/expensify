console.log('app.js is running');

class Person {
	constructor(name = 'annon', age = '0') {
		this.name = name;
		this.age = age;
	}
	sayHey() {
		return `hey there ${this.name}`;
	}
	allMsg() {
		return `${this.name} is ${this.age} years old.`;
	}
}

class Traveler extends Person {
	constructor(name, age, homeTown, whereAt) {
		super(name, age);
		this.homeTown = homeTown;
		this.whereAt = whereAt;
	}
	isTraveling() {
		if (this.homeTown === this.whereAt) {
			return false;
		} else {
			return true;
		}
	}
	allMsg() {
		let msg = super.allMsg();
		if (this.isTraveling()) {
			msg += ` ${this.name} is traveling from ${this.homeTown}`;
		}
		return msg;
	}
}

const me = new Traveler('nir', undefined, 'berlin', 'new york');
console.log(me.allMsg());

const renderApp = () => {
	const template = (
		<div>
			<h1>hey</h1>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

// const heading = {
// 	title: 'This is gonna be a cool app',
// 	subtitle: 'You will be able to make decisions',
// 	options: []
// };

// const submitForm = (e) => {
// 	e.preventDefault();
// 	const option = e.target.elements.addOption.value;

// 	if (option) {
// 		heading.options.push(option);
// 		e.target.elements.addOption.value = '';
// 	}
// 	renderApp();
// };

// const removeOptions = () => {
// 	heading.options = [];
// 	renderApp();
// };

// const decider = () => {
// 	const random = Math.floor(Math.random() * heading.options.length);
// 	const desision = heading.options[random];
// 	alert('you need to do: ' + desision);
// };

// //jsx
// const renderApp = () => {
// 	const template = (
// 		<div>
// 			<h1>{heading.title}</h1>
// 			{heading.subtitle && <p>{heading.subtitle}</p>}
// 			<button disabled={heading.options.length === 0} onClick={decider}>
// 				Tell me what to do!
// 			</button>
// 			<p>{heading.options.length > 0 ? 'here are your options:' : 'no options!'}</p>

// 			<ol>
// 				{heading.options.map((option) => {
// 					return <li key={option}>{option}</li>;
// 				})}
// 			</ol>

// 			<p>Total Options: {heading.options.length}</p>

// 			<form onSubmit={submitForm}>
// 				<input type="text" name="addOption" />
// 				<button>Add</button>
// 			</form>
// 			<button onClick={removeOptions}>remove options</button>
// 		</div>
// 	);

// 	ReactDOM.render(template, appRoot);
// };

const appRoot = document.getElementById('app');

renderApp();
