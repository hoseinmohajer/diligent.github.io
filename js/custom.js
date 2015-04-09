$(document).ready(function (){

	/*** START top scroll button ****/
	$(window).scroll(function() {
		var topScroll = $('.top-scroll-button');
		if(topScroll.offset() && $(window).scrollTop()){
			if(topScroll.offset().top <= $(window).scrollTop()){
				topScroll.show();
			}
			if($(window).scrollTop() <= 305) {
				topScroll.hide();
			}
		}
	});
	$('.top-scroll-button').click(function (){
		$("html, body").animate({ scrollTop: 0 }, 2000);
	});
	/**** END top scroll button ***/

});