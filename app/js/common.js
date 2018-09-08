$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="logo smitler">'
		}
	});

	//
	var api = $("#my-menu").data( "mmenu" );
	api.bind( "open:finish", function() { $('.hamburger').addClass('is-active');}).bind('close:finish', function() {$('.hamburger').removeClass('is-active');});﻿
	//


	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselServices();
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});


	function carouselServices() {
		$('.carousel-services-item').each(function() {
			var ths = $(this);
			var thsHeight = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-img').css('min-height', thsHeight);
		})
	}

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	//resize window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();

	window.onresize = function() {onResize()}

	$('.fotorama__thumb').click(function() {
	$('.fotorama__thumb').removeClass('tog');
		if ($(this).hasClass('tog')) {
			$(this).removeClass('tog');
		} else {
			$(this).addClass('tog');
		}
	})

	//

	$('select').selectize();

	$('.callback button').click(function(event) {
		event.preventDefault();
		$('.success').addClass('active').css('display', 'flex');
		setTimeout(function() {
			$('.success').removeClass('active').fadeOut();
		}, 3000);
	})

// owl

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});

		$('.partners').owlCarousel({
			loop: true,
			items: 4,
			smartSpeed: 700,
			nav: true,
			dots: false,
			navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				}, 
				992: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > $(this).height()) {
				$('.top').addClass('active');
			} else {
				$('.top').removeClass('active');
			}
		});

		$('.top').click(function() {
			$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
		});


});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})
