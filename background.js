const body = document.querySelector('body');

function init() {
	loadImage();
}

const loadImage = () => {
	const img = document.createElement('img');
	img.src = 'https://picsum.photos/1600/900';
	img.addEventListener('load', () => {
		console.log('image loaded');
		img.classList.add('bg');
		body.appendChild(img);
	});
};

init();
