jQuery(document).ready( function($){
	$(document).on('touchstart click', '#mobile-nav ul li', function(){

		$('#mobile-nav ul li').removeClass('nav-selected');
		$(this).addClass('nav-selected');

		var id = $(this).attr('id'); // element i just clicked on
		$('section div').hide(); // hide everything else
		$('section div[class*="' + id + '"]').show(); // clicking 'portfolio' shows the portfolio section below
	});
});