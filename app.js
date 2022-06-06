// create an array of image sources;
let images = [
	'image1.png', 'image2.png', 'image3.png', 'image4.png'
]
let i = 0;

let canvas = document.getElementById('canvas')
canvas.style.background = 'url("./images/image1.png")'
let left = document.getElementById('left')
let right = document.getElementById('right')
right.addEventListener('click', () => {
	i++
	if (i >= images.length) {
		i = 0
	}
	canvas.style.background = `url("./images/${images[i]}")`
})
left.addEventListener('click', () => {
	i--
	if (i < 0) {
		i = images.length - 1
	}
	canvas.style.background = `url("./images/${images[i]}")`
})