
$(document).ready(function() {
	$('#fullpage').pagepiling({
		navigation:false,
	});
});

$(document).ready(function(){
	$('.nav__btn').on('click',function(){
		$('.nav__menu').toggleClass('open');
		$('.nav__btn').toggleClass('open');
		$('.btn__burger').toggleClass('open');
		$('.menu__text').toggleClass('open');
		$('.menu').toggleClass('open');
		$('.soc__icon').toggleClass('openned');
		$('.icon__text-you').toggleClass('openned');
		$('.icon__text-inst').toggleClass('openned');
		$('.icon__text-vk').toggleClass('openned');
	});
})

$(document).ready(function(){
	$('.th').on('click',function(){
		$('.th').toggleClass('active');
	});
    $('.moon').on('click',function(){
        $('.nav__menu, .sect, .work__slink-ico').removeClass('sunth');
		$('.nav__menu, .sect, .work__slink-ico').addClass('moonth');

		$('.btn__burger,.btn__burger::after, .work__section, .footer').removeClass('light');
		$('.btn__burger,.btn__burger::after, .work__section, .footer').addClass('dark');

		$('.section__title, .section__subtitle, .cause__text, .sale__title, .section__tit, .btn__sect, .sale__text, .work__title, body,a').removeClass('su');
		$('.section__title, .section__subtitle, .cause__text, .sale__title, .section__tit, .btn__sect, .sale__text, .work__title, body, a').addClass('mo');


		$('.menu__link, .menu__text, .soc__icon, .icon__text-inst, .icon__text-you, .icon__text-vk, .work__slink-ico').removeClass('mo');
		$('.menu__link, .menu__text, .soc__icon, .icon__text-inst, .icon__text-you, .icon__text-vk, .work__slink-ico').addClass('su');
	});
    $('.sun').on('click',function(){
        $('.nav__menu').removeClass('moonth');
		$('.nav__menu').addClass('sunth');
		$('.sect, .btn__burger, .work__slink-ico').removeClass('moonth');
		$('.sect, .btn__burger, .work__slink-ico').addClass('sunth');

		$('.btn__burger,.btn__burger::after, .work__section, .footer').removeClass('dark');
		$('.btn__burger,.btn__burger::after, .work__section, .footer').addClass('light');

		$('.section__title, .section__subtitle, .cause__text, .sale__title, .section__tit, .btn__sect, .sale__text, .work__title, body, a').removeClass('mo');
		$('.section__title, .section__subtitle, .cause__text, .sale__title, .section__tit, .btn__sect, .sale__text, .work__title, body, a').addClass('su');

		$('.menu__link, .menu__text, .soc__icon, .icon__text-inst, .icon__text-you, .icon__text-vk, .work__slink-ico').removeClass('su');
		$('.menu__link, .menu__text, .soc__icon, .icon__text-inst, .icon__text-you, .icon__text-vk, .work__slink-ico').addClass('mo');
	});
})

$(document).ready(function(){
	$('.slick-vertical').slick({
		vertical: true,
		verticalSwiping: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows:false,

		pauseOnHover: false,
		pauseOnFocus: false,
		slickPlay: false,
		speed: 800,
		centerMode: true,
		centerPadding: '60px',
		infinite: true,
	});

  });

  $(document).ready(function(){
	$('.cont__inp').on('click',function(){
        $('.input__ico').toggleClass('active');
	});

	$('.btn__sect').on('click',function(){
        $('.cont__modal, .modal__circle').addClass('active');
		$('.modal__circle').addClass('active');
	});

  })

