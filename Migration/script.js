// Menu Burger
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Phone number

$(function(){
	$("#formTel").mask("+38 (099) 999 - 99 - 99");
});

// Form

document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelectorAll('#form');

	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let formData = new FormData(form);

		form.classList.add('_sending');
		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});
		if(response.ok) {
			let result = await response.json();
			alert(result.message);
			form.reset();
			form.classList.remove('_sending');
		} else {
			alert("Помилка");
			form.classList.remove('_sending');
		};
	};
});

// Popup Open

const popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true;
const timeout = 400;

if (popupLinks.length > 0){
	for (let i = 0; i < popupLinks.length; i++){
		const popupLink = popupLinks[i];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	};
};

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++){
		const el = popupCloseIcon[i];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	};
};

function popupOpen(currentPopup) {
	if (currentPopup && unlock){
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		};
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function(e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			};
		});
	};
};

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let i = 0; i < lockPadding.length; i++){
			const el = lockPadding[i];
			el.style.paddingRight = lockPaddingValue;
		};
	};

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
};

function bodyUnLock() {
	setTimeout(function() {
		if (lockPadding.length > 0) {
			for (let i = 0; i < lockPadding.length; i++){
				const el = lockPadding[i];
				el.style.paddingRight = '0px'
			};
		};
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
};

document.addEventListener('keydown', function(e){
	if (e.which === 27){
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	};
});

// For EI

(function () {
	if (!Element.prototype.closest){
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	};
})();
(function () {
	if (!Element.prototype.matches){
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// Spollers
$(document).ready(function(){
	$('.question__title').click(function(event){
		if($('.questions__question').hasClass('one')){
			$('.question__title').not($(this)).removeClass('active');
			$('.question__text').not($(this).next()).slideUp(300)
		}

		$(this).toggleClass('active').next().slideToggle(300)
	})
});

// Smooth Scroll

$("[data-scroll]").on("click", function(event){
	event.preventDefault();
	let blockId = $(this).data("scroll");
	let blockOffset = $(blockId).offset().top;
	if (iconMenu.classList.contains('_active')){
		document.body.classList.remove('lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	};
	$("html, body").animate({
		scrollTop: blockOffset
	}, 500);
});

// Animation

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0){
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll(){
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add("_anim");
			} else {
				animItem.classList.remove("_anim");
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 200);
}