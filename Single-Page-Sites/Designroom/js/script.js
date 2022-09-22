const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}


} else {
	document.body.classList.add('_pc');
};

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

// JQuery
$(function(){

	let header = $('.header');
	let hiHeight = $('.hi').innerHeight();
	let scrollOffset = $(window).scrollTop();

	// Fixed Header
	checkScroll(scrollOffset)

	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset)
	});
	function checkScroll(scrollOfset){
		if (scrollOfset >= hiHeight){
			header.addClass("fixed");
		} else {
			header.removeClass("fixed")
		}
		
	};

	// Smooth Scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		let blockId = $(this).data("scroll");
		let blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});
});

// Slider
const swiperOne = new Swiper('.procces__slider', {
	loop: true,
 
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
	autoHeight: true,
});

// Slider for Mobile
const swiperTwo = new Swiper('.procces-touch__slider', {
	simulateTouch: true,
	autoHeight: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
});