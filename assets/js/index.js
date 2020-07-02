$(document).ready(() => 
{
	// Back to top button
	$(window).scroll(function() 
	{
		if ($(this).scrollTop() > 400)
			$('#back-to-top').fadeIn();
		else
			$('#back-to-top').fadeOut();
	});
	$('#back-to-top').click(function() 
	{
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});

	// Responsive slick carousel
	$('.carousel').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});
});
				  