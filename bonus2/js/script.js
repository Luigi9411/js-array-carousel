const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider-viewer');
const eleButtonUp = document.querySelector('.button-up');
const eleButtonDown = document.querySelector('.button-down');
const eleSliderThumbs = document.querySelector('.thumbs');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);

	const eleThumb = document.createElement('img');
	eleThumb.src = arrImages[i];
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}


const listEleImg = document.querySelectorAll('.slider-img'); 
const listThumbs = document.querySelectorAll('.thumb-img');

let activeIndex = 0;



eleButtonDown.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');
    listThumbs[activeIndex].classList.remove('active');
	
	activeIndex++;
    if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}
	
	listEleImg[activeIndex].classList.add('active');
    listThumbs[activeIndex].classList.add('active');
    ;
});

eleButtonUp.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');
    listThumbs[activeIndex].classList.remove('active');
	
	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	
	listEleImg[activeIndex].classList.add('active');
    listThumbs[activeIndex].classList.add('active');
	
	
});