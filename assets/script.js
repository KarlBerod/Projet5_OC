const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const left_arrow = document.getElementById("arrow_left");
const right_arrow = document.getElementById("arrow_right");
let index = 0;

right_arrow.addEventListener('click', () => {
	index++;
	index= index %slides.length;
	const slide = slides[index];
	const current_image = document.getElementById('image');
	const current_tagLine = document.getElementById('tagLine');
	current_image.src=slide.image;
	current_tagLine.innerHTML = slide.tagLine;


	const dot_selected = document.querySelector('.dot_selected');
    const new_dot_selected = document.getElementById(`dot${index}`);
    dot_selected.classList.remove('dot_selected');
    new_dot_selected.classList.add('dot_selected');
});

left_arrow.addEventListener('click', () => {
	index--;
	if (index < 0){
		index=3;
	}
	const slide=slides[index];
	const current_image = document.getElementById('image');
	const current_tagLine=document.getElementById('tagLine');
	current_image.src=slide.image;
	current_tagLine.innerHTML=slide.tagLine;


	const dot_selected = document.querySelector('.dot_selected');
    const new_dot_selected = document.getElementById(`dot${index}`);
    dot_selected.classList.remove('dot_selected');
    new_dot_selected.classList.add('dot_selected');
});