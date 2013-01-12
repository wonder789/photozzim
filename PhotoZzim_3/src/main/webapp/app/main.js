requirejs.config({
	 baseUrl : 'js/lib'
   , paths   : {
	       views  : '../views'
	 , templates  : '../../templates'
	 ,   models   : '../models'
	 ,  routers   : '../routers'
	}
	, shim  : {
			'backbone' : {
				deps    : [ 'underscore' , 'jquery' ]
			,	exports : 'Backbone'
			} 
	 ,   'handlebars.helper' : [ 'handlebars' ]
	 , 'backbone.customSync' : [ 'backbone' ]
	 , 'facebook' 			 : [ 'all' ]
	}
});
require( [ 'jquery' , 'routers/appRouter' ] ,
		function ( $ , AppRouter) { 
	var appRouter = new AppRouter();
});

