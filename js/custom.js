$(document).ready(function () {

	$('.related-products').slick({
		arrow: true,
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		adaptiveHeight: true,
		prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
			},
		  ],
	
	});


	$('.issues').slick({
		arrow: true,
		dots: false,
		loop:false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		adaptiveHeight: true,
		prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
			},
		  ],
	
	});



	$('.top-slider').slick({
		arrow: true,
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

	$('.event-slide').slick({
		// autoplay:true,
		// autoplaySpeed:1500,
		arrow: true,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
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

	$(window).scroll(function () {
		var navHeight = $('#custom-header').height();
		var sticky = $('#custom-header');
		if ($(window).scrollTop() > 0) {
			sticky.addClass("sticky")
			$('#dashboard-page').css('padding-top', navHeight + "px");
		} else {
			sticky.removeClass("sticky");
			$('#dashboard-page').css('padding-top', 0);
		}
	});
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

	$(document).on('click','.cart-btn', function(){
		$('.page-content').addClass('cart-show');
	});
	$(document).on('click','.btn-cart-close', function(){
		$('.page-content').removeClass('cart-show');
	});  



	$(document).on('click','.remove', function(){
		$('.empty-cart').addClass('no-cart');
	});
	// $(document).on('click','.btn-cart-close', function(){
	// 	$('.page-content').removeClass('empty-state');
	// });  



	var buttonPlus  = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  $n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
});


$(document).on('click','.nav-drop a', function(){
	$('.main-menu').addClass('drop-show');
});
$(document).on('click','.close', function(){
	$('.main-menu').removeClass('drop-show');
}); 


}); /*====================== all js end ====================== */