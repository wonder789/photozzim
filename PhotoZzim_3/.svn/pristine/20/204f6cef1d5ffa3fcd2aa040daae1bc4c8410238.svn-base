(function($){
	"use strict";
	$.fn.pMenu = function(opts){
		$(this).addClass('pMenu');
		var options = {
						titleColor : opts.titleColor || 'black'
				,		imgArr	   : $.map(opts.imgArr , function(elem,i){
										return 'url(' + elem + ')';
									  })	    
					   };
		$(this).find('li > span').css('background' , options.titleColor);
		$(this).find('li:first-child > a')
					.css({
					   top 	   		   : '10px'
					 , backgroundImage : options.imgArr[0] 
					    })
			  			.find('+ span')
			  				.css('top','60px');
		$(this).find('li:gt(0) > a').each(function(i){
			$(this).css({
				top 	   		: 90 + (80 * i) + 'px'
			 ,  backgroundImage : options.imgArr[i + 1] 
			})
			.find('+ span')
				.css('top', 140 + (80 * i) + 'px');
		});
	};
})(jQuery);
