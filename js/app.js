


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
			var options = {
				closeClass : 'simplemodal-close close icon-cross',
				maxWidth : 420
			};
			$.modal($('#modal-template').html(), options);
		}
	};
	var modal;

	function addListners() {
		$('[data-action="aboutUs"]').click(fx.aboutUs);
		$('[data-action="registerInterest"]').click(fx.registerInterest);
		$(document).on('click', '.close', function() {
			$.modal.close();
		});
	}
	
	function slideShow() {
		var opts = {
			mode : 'fade'
		};
	}
	
	function initModal() {

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