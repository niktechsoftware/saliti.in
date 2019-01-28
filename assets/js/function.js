$(document).ready(function(){
	$('ul.bxslider').bxSlider({
	controls:true,
	infiniteLoop:true,
	speed:1000,
	pause: 6000,
	auto:true,
	responsive:true,
	pager:false		
});
	 $('ul.gallery-slide').bxSlider({
		controls:true,
		infiniteLoop:true,
		speed:2000,
		pause: 6000,
		auto:true,
		responsive:true,
		pager:false,
		nextSelector: '#img-next',
		prevSelector: '#img-prev',
		nextText: '<i class="next2 fa fa-angle-right">',
		prevText: '<i class="prev2 fa fa-angle-left">'	
	});
	$('ul.news-slide').bxSlider({
		controls:false,
		infiniteLoop:true,
		speed:2000,
		pause: 5000,
		auto:true,
		responsive:true,
		pager:false
	});
	$('.gallery a').lightbox();
  });
 jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
$(".toggle").click(function(){
	$('.toggle').toggleClass('open');
	$('.menu').slideToggle(350);
});
$(".show-menu").click(function(){
	$('.menu-more').show();
	$(this).addClass('expand');
	$('.hide-menu').show();
});
$(".hide-menu").click(function(){
	$('.menu-more').hide();
	$(this).hide();
	$(this).addClass('expand');
	$('.show-menu').removeClass('expand');
});