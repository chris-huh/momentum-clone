const form = document.querySelector('.js-form');
const greeting = document.querySelector('.js-greeting');
const input = form.querySelector('input');
const forgetButton = document.querySelector('.forget-button');

function init() {
	loadName();
	form.addEventListener('submit', e => {
		e.preventDefault();
		localStorage.setItem('user', input.value);
		sayGreeting(input.value);
		input.value = '';
	});
	forgetButton.addEventListener('click', e => {
		forgetName();
	});
}

const sayGreeting = name => {
	const hour = new Date().getHours();
	const timeOfDay =
		hour > 6 && hour < 12 ? 'morning' : hour >= 12 && hour < 17 ? 'afternoon' : 'evening';
	form.classList.remove('visible');
	greeting.classList.add('visible');
	forgetButton.classList.add('visible');
	greeting.innerHTML = `Good ${timeOfDay}, ${name}`;
};

const askName = () => {
	greeting.classList.remove('visible');
	forgetButton.classList.remove('visible');
	form.classList.add('visible');
};

const forgetName = () => {
	localStorage.removeItem('user');
	askName();
};

const loadName = () => {
	const user = localStorage.getItem('user');
	if (user === null) {
		askName();
	} else {
		sayGreeting(user);
	}
};

init();
