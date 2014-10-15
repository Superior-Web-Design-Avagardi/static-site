


(function(window, document, undefined) {
	
	'use strict';
	
	var fx = {
		aboutUs : function(e) {
			$('html, body').animate({
				scrollTop: $("#about-us").offset().top
			}, 500);
		},
		registerInterest : function(e) {
			var str = '<article class="modal-inner"><h2 class="center">Hi there</h2><span class="close icon-cross" data-action="modalClose"></span>';
			str += '<p class="center">Please enter your email to stay up to date with our latest products</p>';
			str += '<form><label for="email">Your email</label><br><input type="email" class="full" placeholder="name@provider.com" id="email">';
			str += '<input type="submit" value="Subscribe" class="full"></form>';
			str += '</article>';
			modal.create(str);
		},
		closeModal : function() {
			console.log('fawf');
			modal.unstage();
		}
	};
	var modal;

	function addListners() {
		$('[data-action="aboutUs"]').click(fx.aboutUs);
		$('[data-action="registerInterest"]').click(fx.registerInterest);
		$(document).on('click', '[data-action="modalClose"]', fx.closeModal);
	}
	
	function slideShow() {
		var opts = {
			mode : 'fade'
		};
		
		$('.slider').bxSlider(opts);
	}
	
	function initModal() {
		modal = new Modal({
			closeOnClick : false
		});
	}
	
	function init() {
		initModal();
		addListners();
		slideShow();
	}
	
	$(document).ready(function() {
		init();
	});
})(window, document);