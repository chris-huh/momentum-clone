const container = document.querySelector('.js-clock');

function init() {
	let timeDiv = document.createElement('div');
	timeDiv.classList.add('clock');
	timeDiv.addEventListener('dblclick', toggleFormat);
	container.appendChild(timeDiv);
	getTime();
	setInterval(getTime, 1000);
}

const getTime = () => {
	const time = localStorage.getItem('format24h') == 'true' ? get24hTime() : get12hTime();
	const timeDiv = document.querySelector('.clock');
	timeDiv.innerHTML = time;
};

const get12hTime = () => {
	const hours = new Date().getHours();
	const newHours = hours == 0 ? 12 : hours > 12 ? hours % 12 : hours;
	const minutes = ('0' + new Date().getMinutes()).slice(-2);
	return hours > 12 ? `${newHours}:${minutes} PM` : `${newHours}:${minutes} AM`;
};

const get24hTime = () => {
	const minutes = ('0' + new Date().getMinutes()).slice(-2);
	return `${new Date().getHours()}:${minutes}`;
};

const toggleFormat = () => {
	console.log('toggling');
	if (localStorage.getItem('format24h') == 'true') {
		localStorage.setItem('format24h', 'false');
	} else {
		localStorage.setItem('format24h', 'true');
	}
};

init();
