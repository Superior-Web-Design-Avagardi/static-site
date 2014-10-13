/*
 * modal.js
 */

;(function($, window, document, undefined) {
	
	"use strict";
	
	function Modal(settings) {
		
		
		settings = settings || {};
		var closeOnClick = null;
		var isActive = false;
		
		if(settings.closeOnClick === false || settings.closeOnClick === true) {
			closeOnClick = settings.closeOnClick;
		} else {
			closeOnClick = true;
		}
		if(!ifExists('.modal') && !ifExists('.blanket')) {
			$('body').after('<div class="blanket"><div class="modal"></div></div>');
		}
		
		$('.blanket').click(function() {
			if(closeOnClick) {
				unstage();
			}
		});
		
		function ifExists(selector) {
			if($(selector).length < 1) {
				return false;
			} else {
				return true;
			}
		}
		
		
		/* ---- public functions ---- */
		function transition(data, opts) {
			var isBig = opts.isBig || false;
			var modalClass = opts.modalClass || '';
			if(isActive) {
				$('.modal').removeClass('active');
				
				setTimeout(function() {
					$('.modal').replaceWith('<div class="modal"></div>');
					isActive = false;
					setTimeout(function() {
						if(isBig) {
							$('.modal').addClass('big').addClass(modalClass).html(data);
						} else {
							$('.modal').addClass(modalClass).html(data);
						}
						stage();
					}, 50);
				}, 200);
				
			}
		}
		
		function create(data, opts) {
			opts = opts || {};
			var isBig = opts.isBig || false;
			var modalClass = opts.modalClass || '';
			if (isActive) {
				transition(data, opts);
			} else {
				if(isBig) {
					$('.modal').addClass('big').addClass(modalClass).html(data);
				} else {
					$('.modal').addClass(modalClass).html(data).removeClass('big');
				}
				isActive = false;
				stage();
			}
		}
		
		function stage(isBig) {
			if(!isActive) {
				$('body').addClass('overflow-active');
				if(isBig) {
					$('.modal').addClass('big').addClass('active');
				} else {
					$('.modal').addClass('active');
				}
				$('.blanket').addClass('active');
				isActive = true;
			}
		}
		
		function unstage() {
			if(isActive) {
				$('body').removeClass('overflow-active');
				$('.modal').removeClass('active');
				$('.blanket').removeClass('active');
				isActive = false;
			}
		}
		
		function destroy() {
			if(isActive) {
				unstage();
				isActive = false;
			}
			$('.modal').append('');
		}
		
		return {
			create  : create,
			stage   : stage,
			unstage : unstage,
			destroy : destroy
		};
	}
	
	window.Modal = Modal;
	
})(jQuery, window, document);