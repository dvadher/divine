$(document).ready(function () {



	$('.top-slider').slick({
		arrow: false,
		dots: false,
		centerMode: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,

	});
	$('.banner-slider').slick({
		arrow: true,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
	});

	$(function () {
		$('*[draggable!=true]', '.slick-track').unbind('dragstart');
		$(".draggable-element").draggable();
	});

	$(".draggable-element").on("draggable mouseenter mousedown", function (event) {
		event.stopPropagation();
	});

	/*====================== js for sticky and mobile menu ====================== */
	var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
	$(".main_page").css('min-height', min_height + 'px');
	$(window).resize(function () {
		var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
		$(".main_page").css('min-height', min_height + 'px');
	});

	// $(window).scroll(function () {
	// 	var navHeight = $('#custom-header').height();
	// 	var sticky = $('#custom-header');
	// 	if ($(window).scrollTop() > 0) {
	// 		sticky.addClass("sticky")
	// 		$('#dashboard-page').css('padding-top', navHeight + "px");
	// 	} else {
	// 		sticky.removeClass("sticky");
	// 		$('#dashboard-page').css('padding-top', 0);
	// 	}
	// });
	$('.jb_front_nav_close button').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});

	var kursorx = new kursor({
		type: 4,
		color: 'rgba(0,0,0,0)',
	})


	/*====================== js for scrollTop ====================== */
	var btn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
	});


	$(document).on('click','.search-btn', function(){
		$('.navbar').addClass('search-show');
	});
	$(document).on('click','.btn-close', function(){
		$('.navbar').removeClass('search-show');
	});  



}); /*====================== all js end ====================== */