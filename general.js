(function( $ ){

	var versionActual;
	var hoverActivo;

    function actions() {


		// SCROLL TRIGGER
        gsap.registerPlugin(ScrollTrigger);

		// AOS
		AOS.init();

		// FANCYBOX
		Fancybox.bind('[data-fancybox]');

		// VÍDEOS RESPONSIVE
        $('iframe[data-src*="youtube"]').each(function() {
            $(this).wrap('<div class="video-responsive"></div>');
        });

		// SELECTION
		if ($('.fondo-oscuro').length) {
            // Apply selection style for .fondo-oscuro
            var style = '<style>::selection { background: var(--clr-light); color: var(--clr-dark); }</style>'; // Change to desired colors
            $('head').append(style);
        } else {
            // Apply default selection style
            var style = '<style>::selection { background: var(--clr-dark); color: var(--clr-light); }</style>'; // Change to desired colors
            $('head').append(style);
        }

		// MENÚ HOVER
		if (hoverActivo == 'activo') {
			$('header#masthead li a').addClass('ripple-button');
		  
			$(document).on('mouseenter', '.ripple-button', function (event) {
				const button = event.currentTarget;
			
				const ripple = $("<span class='ripple'></span>");
				$(button).append(ripple);
			
				const buttonRect = button.getBoundingClientRect();
				const x = event.clientX - buttonRect.left;
				const y = event.clientY - buttonRect.top;
				ripple.css({
					left: x + "px",
					top: y + "px",
					zIndex: -1,
				});
		  
				gsap.to(ripple, {
					duration: 0.5,
					width: buttonRect.width * 3,
					height: buttonRect.width * 3,
					ease: "power1.out",
					onComplete: () => {
					},
				});
			});
		  
			$(document).on('mouseleave', '.ripple-button', function (event) {
				const button = event.currentTarget;
				const ripple = $(button).find(".ripple");
			
				if (ripple.length) {
					gsap.to(ripple, {
					duration: 0.5,
					width: 0,
					height: 0,
					ease: "power1.out",
					onComplete: () => {
						ripple.remove();
						$(button).css('background', ''); // Reset the button background
					},
					});
				}
			});
		}

		// ANIMACIONES ENTRADA MENÚ
		if (versionActual == 'ordenador') {
			gsap.from($('header#masthead li.home a, header#masthead li.contact a'), {
				opacity: 0,
				x: -25,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .25,
				stagger: {
					each: 0.15,
				}
			});	
	
			gsap.from($('header#masthead li.design a, header#masthead li.photo a'), {
				opacity: 0,
				x: 25,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .25,
				stagger: {
					each: 0.15,
				}
			});	
		} else {
			gsap.from($('header#masthead li.home a'), {
				opacity: 0,
				y: -25,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .25,
			});	
			gsap.from($('header#masthead li.design a, header#masthead li.contact a, header#masthead li.photo a'), {
				opacity: 0,
				y: 25,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .5,
				stagger: {
					each: 0.15,
				}
			});	
		}

		if ($('body').hasClass('page-template-template-home')) {
			// LOTTIE
			// Get the lottie players
			const lottieEntrada = document.getElementById('lottie-entrada').getLottie();
			const lottieEstatico = document.getElementById('lottie-estatico').getLottie();
			const lottieSalidaRandom = document.getElementById('lottie-salida-random').getLottie();
			const lottieSalidaHola = document.getElementById('lottie-salida-hola').getLottie();

			// State variable for lottie-estatico
			var estaticoState = 'hola';

			// Function to initialize Lottie Interactivity
			function initializeLottieInteractivity() {
				//console.log("Lottie Interactivity Initialized");

				LottieInteractivity.create({
					player: "#lottie-estatico",
					mode: "cursor",
					actions: [
						{
							type: "toggle",
							forceFlag: false,
						}
					]
				});
			};

			// Function to handle state changes and play animation
			function handleEstaticoClick() {
				if (estaticoState === 'hola') {
					//console.log('hola a random');
					estaticoState = 'random';
				} else {
					//console.log('random a hola');
					estaticoState = 'hola';
				}
			};

			// Initialize interactivity when lottie-entrada completes
			lottieEntrada.addEventListener('complete', function() {
				$('#lottie-entrada').removeClass('on');
				$('#lottie-estatico').addClass('on');

				if ($('#lottie-estatico').hasClass('on')) {
					//console.log('estatico on');
					initializeLottieInteractivity();
					$('#lottie-estatico').on('click', handleEstaticoClick);
				}

				// Add click event listeners to the anchor elements
				$('header#masthead li a').on('click', function(event) {
					event.preventDefault(); // Prevent the default action

					const url = $(this).attr('href');
					$('#lottie-estatico').removeClass('on');

					if (estaticoState === 'hola') {
						//console.log('click hola');
						$('#lottie-salida-hola').addClass('on');

						// Play the animation forward
						lottieSalidaHola.setDirection(1);
						lottieSalidaHola.play();

						// Add an event listener to navigate after the animation completes
						lottieSalidaHola.addEventListener('complete', function() {
							window.location.href = url;
						}, { once: true }); // Use { once: true } to ensure the event is handled only once
					} else {
						//console.log('click random');
						$('#lottie-salida-random').addClass('on');

						// Play the animation forward
						lottieSalidaRandom.setDirection(1);
						lottieSalidaRandom.play();

						// Add an event listener to navigate after the animation completes
						lottieSalidaRandom.addEventListener('complete', function() {
							window.location.href = url;
						}, { once: true }); // Use { once: true } to ensure the event is handled only once
					}
				});
				
			});

			// BAILECITO DESIGN
			function animateHeader() {
			  	var tl = gsap.timeline();
		  
			  	tl.to('header#masthead li.design a', { scale: 1.1, duration: 0.15, ease: 'power1.inOut', })
					.to('header#masthead li.design a', { rotate: 5, duration: 0.1, ease: 'power1.inOut', })
					.to('header#masthead li.design a', { rotate: -5, duration: 0.1,ease: 'power1.inOut', })
					.to('header#masthead li.design a', { rotate: 5, duration: 0.1, ease: 'power1.inOut', })
					.to('header#masthead li.design a', { rotate: -5, duration: 0.1, ease: 'power1.inOut', })
					.to('header#masthead li.design a', { rotate: 5, duration: 0.1, ease: 'power1.inOut', })
					.to('header#masthead li.design a', { rotate: -5, duration: 0.1, ease: 'power1.inOut', })
					.to('header#masthead li.design a', { rotate: 0, duration: 0.1, ease: 'power1.inOut', })
					.to('header#masthead li.design a', { scale: 1, duration: 0.1, ease: 'power1.inOut', });
		
			}
		  
			gsap.to({}, {
			  duration: 3, 
			  repeat: -1,
			  onRepeat: function () {
				animateHeader();
			  },
			});
		}
		
		if($('body').is('.page-template-template-design, .page-template-template-photo')){
			// ANIMACIONES ENTRADA
			gsap.from($('#menu-proyectos li'), {
				opacity: 0,
				x: -10,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .25,
				stagger: {
					each: 0.15,
				}
			});	

			// MENÚ ACTIVO
			function activarProyectoActual() {
				var scrollTop = $(window).scrollTop();
				var windowHeight = $(window).height();
			
				$('.caja-proyecto').each(function() {
					var proyectoPosition = $(this).offset().top;
					if (proyectoPosition < scrollTop + windowHeight / 2 && proyectoPosition + $(this).height() > scrollTop + windowHeight / 2) {
						var proyectoActual = $(this).attr('id');
						//console.log(proyectoActual);
						$('#menu-proyectos li').removeClass('on');
						$('#menu-proyectos li.' + proyectoActual).addClass('on');
					};
				}); 
			}

			activarProyectoActual();

			$(window).on('scroll', function() {
				activarProyectoActual();
			});
		}

		if($('body').hasClass('single-design')){
			$('footer#colophon[data-aos="fade-up"]').removeAttr('data-aos');

			// ANIMACIONES ENTRADA
			gsap.from($('#sec-galeria'), {
				opacity: 0,
				x: -25,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .25,
			});

			gsap.from($('#sec-contenido > *'), {
				opacity: 0,
				x: 25,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .25,
				stagger: {
					each: 0.25,
				}
			});	

		}

		if($('body').hasClass('single-photo')){

			$('#sec-galeria iframe, #sec-galeria video').each(function () {
				$(this).attr('data-aos', 'fade-up');
			});
		}

		if($('body').hasClass('page-template-template-contact')){
			// ANIMACIONES ENTRADA
			gsap.from($('#contact .listado-fotos .foto'), {
				opacity: 0,
				y: -50,
				filter: 'blur(6px)',
				ease: 'power1.inOut',
				duration: .5,
				delay: .25,
				stagger: {
					each: 0.25,
				}
			});	

			gsap.to($('#contact .listado-fotos .foto a'), {
				opacity: 1,
				ease: 'power1.inOut',
				duration: .25,
				delay: .5,
				stagger: {
					each: 0.25,
				}
			});	
		};
    };

    $(document).ready(function(){
		checkMobileOrNot();
        actions();
        $('body').addClass('ready');
    });

    $(window).resize(function(){
		checkMobileOrNot();
	});

	$(window).scroll(function(){
	});

    $(window).load(function(){
		$("body").addClass("loaded");
	});

	function checkMobileOrNot() {

		// TAMAÑO
		var windowWidth = $(window).width();

		//console.log('window width:' + windowWidth);
		if(windowWidth >= 1200){
			versionActual = 'ordenador';
		} else {
			if(windowWidth >= 980) {
				versionActual = 'tablet';
			} else {
				versionActual = 'movil';
			}
		} 
		//console.log('versionActual: ' + versionActual);

		// HOVER
		const hoverMediaQuery = window.matchMedia("(hover: hover)");

		function supportsHover() {
			return hoverMediaQuery.matches;
		};
	
		if (supportsHover()) {
			if (hoverActivo=='desactivo' ) {
				window.scroll(0, 0);
				location.reload();
			} 
			hoverActivo = 'activo';
		} else {
			if (hoverActivo=='activo' ) {
				window.scroll(0, 0);
				location.reload();
			} 
			hoverActivo = 'desactivo';
		}; 
	};

})(jQuery);