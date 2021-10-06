$(function () {
	$("#btn-hamburger").on("click", function () {
		$(".menu-aside-page").toggleClass("show");
		$("body").addClass("overflow-hidden");
	});

	$(".backdrop , .menu-aside-close").on("click", function () {
		$(".menu-aside-page").removeClass("show");
		$("body").removeClass("overflow-hidden");
	});

	$(".list-slick").slick({
		mobileFirst: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});

	$(".js-product-range__sp").select2({
		minimumResultsForSearch: -1,
	});

	$(
		".titan-call-request .badge-titan .top, .titan-call-request .badge-titan .bottom"
	).lettering();
});

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 10) {
		$(".header-top-bar").addClass("d-none");
		$(".header-page .content").addClass("header-scroll");
		$(".header-page").addClass("bg-titan-primary box-shadow");
	} else {
		$(".header-page").removeClass("bg-titan-primary box-shadow");
		$(".header-top-bar").removeClass("d-none");
		$(".header-page .content").removeClass("header-scroll");
	}
});
