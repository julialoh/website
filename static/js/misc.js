(function($){
	
	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {
		
		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 50
		});

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').vide({
		    mp4: 'static/images/lanterns.mp4',
		    // webm: 'assets/images/NYC-Traffic/WEBM/NYC-Traffic.webm',
		    // poster: 'assets/images/NYC-Traffic/snapshots/NYC-Traffic.jpg',
      //       posterType: 'jpg'
		}, {
		    volume: 0,
		    loop: true,
		    autoplay: true
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});
		
		

		/* ---------------------------------------------- /*
		 * Count to
		/* ---------------------------------------------- */

		$('#profile').waypoint(function() {
			$('.timer').each(function() {
				counter = $(this).attr('data-count'),
				$(this).delay(6000).countTo({
					from: 0,
					to: counter,
					speed: 3000,// Stats Counter Speed
					refreshInterval: 50,
				});
			});
		 }, { offset: '70%', triggerOnce: true });

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Owl slider
		/* ---------------------------------------------- */

		// $("#owl-clients").owlCarousel({
		// 	items : 4,
		// 	slideSpeed : 900,
		// 	paginationSpeed : 400,
		// 	autoPlay: 5000
		// });

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

		/* ---------------------------------------------- /*
		 * Portfolio pop up
		/* ---------------------------------------------- */

		// $('#portfolio').magnificPopup({
		// 	delegate: 'a.pop-up',
		// 	type: 'image',
		// 	gallery: {
		// 		enabled: true,
		// 		navigateByImgClick: true,
		// 		preload: [0,1]
		// 	},
		// 	image: {
		// 		titleSrc: 'title',
		// 		tError: 'The image could not be loaded.',
		// 	}
		// });

		// $('.video-pop-up').magnificPopup({
		// 	type: 'iframe'
		// });

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

// 		$(".video").fitVids();

// 	});

// })(jQuery);