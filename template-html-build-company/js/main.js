$(document).ready(function() {
	var menubtn = $('.top-nav_btn');
	var sidebarbtn = $('.left-sidebar_btn');
	var menu = $('.top-nav_menu');
	var sidebarmenu = $('.left-sidebar_menu');

	menubtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('top-nav_menu__active');
	});
	sidebarbtn.on('click', function(event) {
		event.preventDefault();
		sidebarmenu.toggleClass('left-sidebar_menu__active');
	});

	$('.directions-blocks').slick({
	arrows: false,	
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		}
	}
  ]
});

});