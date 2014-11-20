


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
			var html = $('#modal-template').html();
			Modal.open({
				content : html,
				draggable : false,
				hideClose : true,
				openCallback : function() {
					$('input[type="email"]').focus();
				}
			});
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