$(document).ready(function(){
	$('div').toggle(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});
	$('a').Lightbox();

});