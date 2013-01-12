requirejs.config({
	baseUrl : 'lib',
	path    : {
		all       : '//tabletr.herokuapp.com/js/all.js',
		photo     : '../'
	}
});
	
require(['jquery','application','../model/user'],function($,app,User){
	$(function() {
		var jmpressOpts	= {
				animation		: { transitionDuration : '0.8s' }
		};
		
		$( '#jms-slideshow' ).jmslideshow( $.extend( true, { jmpressOpts : jmpressOpts }, {
			autoplay	: true,
			bgColorSpeed: '0.8s',
			arrows		: false
		}));
		
	});
	$('[href=#fb_login]').click(function(){
		User.login();
	});
});
