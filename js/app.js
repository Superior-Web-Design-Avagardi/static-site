


(function(window, document, undefined) {
	
	'use strict';
	var utils = {
		getFormData : function(el) {
			jQuery = jQuery || null;
			if(el instanceof jQuery) {
			} else {
				el = $(el);
			}
			var data = $(el).serializeArray();
			var result = {};
			for (var key in data) {
				result[data[key].name] = data[key].value;
			}
			return result;
		}
	};
	
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
		
		$('#npv').submit(function(e) {
			e.preventDefault();
			var data = utils.getFormData(this);
			console.log(data);
			var npv = data.rn/Math.pow((1+data.coc), data.year);
			var scrap = data.scrap/Math.pow(1+data.coc, data.year);
			console.log(npv);
			console.log(data.rn + '/ Math.pow((' + 1 + ' + ' + data.coc + '), ' + data.year+' )');
			console.log(scrap);
			console.log(-data.ii);
			var est = -data.ii + npv + scrap;
			$(this).append('<span class="textual">' + est + '</span><br>');
		});
		
		$(document).on('click', '[data-action="modalClose"]', fx.closeModal);
	}
	
	function slideShow() {
		var opts = {
			mode : 'fade'
		};
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