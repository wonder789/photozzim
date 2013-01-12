(function($){
	"use strict";
	$.fn.pMenu = function(opts){
		$(this).addClass('pMenu');
		var localSettings = {
						titleColor : 'black'
					   };
		$.extend(localSettings,opts);
	//	$(this).find('li > span').css('background' , options.titleColor);
		$(this).find('li:first-child > a')
					.css({
					   top 	   		   : '10px'
					 , backgroundImage : function(){
						 return 'url(' + $(this).attr('data-url') + ')';
					 }
					    })
			  			.find('+ span')
			  				.css('top','60px');
		$(this).find('li:gt(0) > a').each(function(i){
			$(this).css({
				top 	   		: 90 + (80 * i) + 'px'
			 ,  backgroundImage : function(){
				 return 'url(' + $(this).attr('data-url') + ')';
			 }
			})
			.find('+ span')
				.css('top', 140 + (80 * i) + 'px');
		});
	};
})(jQuery);
