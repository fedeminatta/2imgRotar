const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const agregar = document.querySelector('#agregar');
const contenido = document.querySelector('.contenido');

const img = document.querySelector('#img');

agregar.addEventListener('click', agregarImg);
function agregarImg() {
	let width = input1.value;
	let heigth = input2.value;
	img.setAttribute('src', `https://source.unsplash.com/random/${width}x${heigth}`);
	contenido.appendChild(img);
}

btn1.addEventListener('click', function () {
	img.style.animationPlayState = 'paused';
});

btn2.addEventListener('click', function () {
	img.style.animationPlayState = 'running';
});

btn3.addEventListener('click', function () {
	if (img.style.visibility == 'hidden') {
		img.style.visibility = 'visible';
	} else {
		img.style.visibility = 'hidden';
	}
});
