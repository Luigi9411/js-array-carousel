const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleButtonUp = document.querySelector('.button-up');
const eleButtonDown = document.querySelector('.button-down');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}


const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;


eleButtonDown.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

	
	activeIndex++;
    if (activeIndex === listEleImg.length - 1) {
		activeIndex = 0;
	} else {
        activeIndex++;
    }
	
	listEleImg[activeIndex].classList.add('active');

	
	
});

eleButtonUp.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');
    if (activeIndex === 0) {
		activeIndex = listEleImg.length - 1
	} else {

        activeIndex--;
    }
	

	
	listEleImg[activeIndex].classList.add('active');

	
	
});