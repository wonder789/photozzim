requirejs.config({
	 baseUrl : 'scripts'
   , appDir  : './'
   , paths   : {
	   	   view   : '../view'
	 , template   : '../template'
	 ,       vo   : '../Models/vo'
	 , collection : '../Models/Collection'
	}
});
require( [ 'jquery', 'handlebars', 'underscore', 'backbone' , 'backbone.customSync']
	,function ( $ , handlebar ){
	$.fn.render = function( opts ){
		$( this ).append( Handlebars.compile( opts.template ) ( opts.context ) );
	};
	
	
});
