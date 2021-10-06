$(function () {
	("use strict");
	// Preloader
	$(window).on("load", function (event) {
		$("#preLoader").delay(500).fadeOut(500);
	});
	//Sticky Menu
	$(window).on("scroll", function (event) {
		var scroll = $(window).scrollTop();
		if (scroll < 250) {
			$(".header-menu-area").removeClass("sticky");
			$(".header-two").removeClass("sticky");
		} else {
			$(".header-menu-area").addClass("sticky");
			$(".header-two").addClass("sticky");
		}
	});
	// Search Icon
	$(".search-icon").on("click", function (e) {
		$(".search-wrap").toggleClass("search-active");
		e.preventDefault();
	});
	// Mobile Menu
	$("header .main-menu").meanmenu({
		meanMenuContainer: ".mobilemenu",
		meanScreenWidth: "991",
		meanRevealPosition: "none",
		meanMenuOpen: '<i class="far fa-bars"/>',
		meanMenuClose: '<i class="far fa-times"/>',
		meanMenuCloseSize: "25px",
	});
	//Date time picker
	$("#arrive-date, #depart-date").datepicker({
		format: "d-m-yyyy",
		autoclose: true,
	});
	// Counter UP init
	$(".counter-number").counterUp({
		delay: 100,
		time: 3000,
	});

	// Grid and list option
	$(".toggle-list").on("click", function (event) {
		event.preventDefault();
		$(".toggle-list").addClass("active");
		$(".item-list").addClass("active");
		// Opposite
		$(".toggle-grid").removeClass("active");
		$(".item-grid").removeClass("active");
	});

	$(".toggle-grid").on("click", function (event) {
		event.preventDefault();
		$(".toggle-grid").addClass("active");
		$(".item-grid").addClass("active");
		// Opposite
		$(".toggle-list").removeClass("active");
		$(".item-list").removeClass("active");
	});

	// Toggle chat
	$(".popup-chat").click(function (e) {
		e.preventDefault();
		$(".chat-popup").toggle();
	});

	$(".remove-popup").click(function (e) {
		e.preventDefault();
		$(".chat-popup").toggle();
	});

	$(".count-down").click(function () {
		let value = $(".count").val();
		if (value - 1 == 0) {
			$(".count").val(1);
		} else {
			$(".count").val(parseInt(value) - 1);
		}
	});

	$(".count-up").click(function () {
		let value = $(".count").val();
		$(".count").val(parseInt(value) + 1);
	});

	// Date Picker
	$(function () {
		$("#date-picker").daterangepicker({
			timePicker: true,
			startDate: moment().startOf("hour"),
			endDate: moment().startOf("hour").add(32, "hour"),
			locale: {
				format: "M/DD hh:mm A",
			},
		});
	});

	// Contact GG Map
	// 21.046571907695437, 105.78343945608991;
	function myMap() {
		var mapProp = {
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			scrollwheel: false,

			center: new google.maps.LatLng(
				21.046571907695437,
				105.78343945608991
			),
			zoom: 15,
		};
		var map = new google.maps.Map(
			document.getElementById("contactMap"),
			mapProp
		);

		var iconBase = "../img/icons/03.png";

		var marker = new google.maps.Marker({
			map: map,
			position: map.getCenter(),
			// position: myCenter,
			title: "Click to zoom",
			icon: iconBase,
			animation: google.maps.Animation.BOUNCE,
		});

		marker.setMap(map);

		var infowindow = new google.maps.InfoWindow({
			content: "Welcome to BachKhoa-Aptech !",
		});

		infowindow.open(map, marker);
	}

	// Height default element
	// var heightDefault = 0;

	// Set height element
	// $(".single-blog-wrap").each(function () {
	// 	const currentHeight = $(this).height();
	// 	if (parseInt(heightDefault) < parseInt(currentHeight)) {
	// 		heightDefault = currentHeight;
	// 		console.log(heightDefault);
	// 	}
	// });

	// $(".single-blog-wrap").css("height", heightDefault + "px");

	// Latest room slider
	var roomArrow = $(".room-arrows");
	var $status = $(".pagingInfo");
	var roomSlider = $("#roomSliderActive");
	roomSlider.on(
		"init reInit afterChange",
		function (event, slick, currentSlide, nextSlide) {
			if (!slick.$dots) {
				return;
			}
			var i = (currentSlide ? currentSlide : 0) + 1;
			var statusText = i > 10 ? i : "0" + i;
			$status.html(
				'<span class="big-num">' +
					statusText +
					'<span class="small">' +
					slick.$dots[0].children.length +
					"</span>" +
					"</span> "
			);
		}
	);
	roomSlider.slick({
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: roomArrow,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-right"></i></span>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
	// feature slider active
	$("#featureSlideActive").slick({
		dots: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
	});
	// Feedback slider ome
	$("#feedbackSlideActive").slick({
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
		responsive: [
			{
				breakpoint: 1599,
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	});
	// Feedback slider two
	$("#feedSliderTWo").slick({
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
				},
			},
		],
	});
	// Brand Slider Active
	$("#brandsSlideActive").slick({
		dots: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
		speed: 1500,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
	// Bootstrap Accordion Icon
	$(".feature-accordion .card-header button").on("click", function (e) {
		$(".feature-accordion .card-header button").removeClass(
			"active-accordion"
		);
		$(this).addClass("active-accordion");
	});
	// Wow js and nice select init
	$("select").niceSelect();
	new WOW().init();
	$(".video-popup").magnificPopup({
		type: "iframe",
	});
	// Get value option language
	$("#lang").change(function (e) {
		// Get current language
		let lang = this.value;
		$("#flag-country").attr("src", `assets/img/icons/flag-${lang}.png`);
	});
	// Isotop Active
	$(".gallery-filter li").on("click", function () {
		$(".gallery-filter li").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr("data-filter");
		$(".gallery-filter-items").isotope({
			filter: selector,
		});
	});
	$(window).load(function () {
		$(".gallery-filter-items").isotope();
	});
	// Back to Top
	$(".back-to-top").fadeOut();

	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 300) {
			$(".back-to-top").fadeOut(500);
		} else {
			$(".back-to-top").fadeIn(500);
		}
	});

	$(".back-to-top").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			1500
		);
	});
	// Price Range Slider
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 1000,
		values: [0, 1000],
		slide: function (event, ui) {
			$("#amount").val(
				"Price : " + "$" + ui.values[0] + " - $" + ui.values[1]
			);
		},
	});
	$("#amount").val(
		"Price : " +
			"$" +
			$("#slider-range").slider("values", 0) +
			" - $" +
			$("#slider-range").slider("values", 1)
	);
	// Room details Slider
	$(".main-slider").slick({
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: ".dots-slider",
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
	});
	$(".dots-slider").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		speed: 1500,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".main-slider",
		dots: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});
	// Room Details Slider Image Popup
	$(".main-slider").each(function () {
		// the containers for all your galleries
		var additionalImages = $(".single-img a.main-img").not(
			".slick-slide.slick-cloned a.main-img"
		);
		additionalImages.magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
			mainClass: "mfp-fade",
		});
	});
	// Review bars
	$(".reviews-bars").bind(
		"inview",
		function (event, visible, visiblePartX, visiblePartY) {
			$(".bar").each(function () {
				$(this)
					.find(".bar-inner")
					.animate({
						width: $(this).attr("data-width"),
					});
			});
		}
	);
	// Slider One
	function sliderOne() {
		var slider = $("#heroSlideActive");
		slider.on("init", function (e, slick) {
			var $firstAnimatingElements = $(
				".single-hero-slide:first-child"
			).find("[data-animation]");
			doAnimations($firstAnimatingElements);
		});
		slider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $(
				'.single-hero-slide[data-slick-index="' + nextSlide + '"]'
			).find("[data-animation]");
			doAnimations($animatingElements);
		});
		slider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			infinite: true,
			speed: 1500,
			prevArrow:
				'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
			nextArrow:
				'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					},
				},
			],
		});

		function doAnimations(elements) {
			var animationEndEvents =
				"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data("delay");
				var $animationType = "animated " + $this.data("animation");
				$this.css({
					"animation-delay": $animationDelay,
					"-webkit-animation-delay": $animationDelay,
				});
				$this
					.addClass($animationType)
					.one(animationEndEvents, function () {
						$this.removeClass($animationType);
					});
			});
		}
	}
	sliderOne();
	// Slider Two
	function sliderTwo() {
		var slider = $("#secondSlider");
		slider.on("init", function (e, slick) {
			var $firstAnimatingElements = $(
				".single-hero-slide:first-child"
			).find("[data-animation]");
			doAnimations($firstAnimatingElements);
		});
		slider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $(
				'.single-hero-slide[data-slick-index="' + nextSlide + '"]'
			).find("[data-animation]");
			doAnimations($animatingElements);
		});
		slider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: true,
			infinite: true,
			speed: 1500,
			prevArrow:
				'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
			nextArrow:
				'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					},
				},
			],
		});

		function doAnimations(elements) {
			var animationEndEvents =
				"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data("delay");
				var $animationType = "animated " + $this.data("animation");
				$this.css({
					"animation-delay": $animationDelay,
					"-webkit-animation-delay": $animationDelay,
				});
				$this
					.addClass($animationType)
					.one(animationEndEvents, function () {
						$this.removeClass($animationType);
					});
			});
		}
	}
	sliderTwo();
});
