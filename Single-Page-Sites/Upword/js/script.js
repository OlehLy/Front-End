// Slider
const swiper = new Swiper('.comments__slider', {
	loop: true,
 
	navigation: {
	  nextEl: '.comments-next',
	  prevEl: '.comments-prev',
	},

	simulateTouch: false,
	autoHeight: true,
});

// Mobile Slider
const swiperMobile = new Swiper('.comments-touch__slider', {
	loop: false,

	simulateTouch: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	autoHeight: true,
});

// Burger menu
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};