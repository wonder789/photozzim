requirejs.config({
	 baseUrl : 'scripts'
   , appDir  : './'
   , paths   : {
	       views  : '../views'
	 , templates  : '../templates'
	 ,   models   : '../models'
	 ,collections : '../collections'
	 ,router      : '../router'
	}
	, shim  : {
					'backbone' : [ 'underscore' , 'jquery' ]
	 ,   'handlebars.helper' : [ 'handlebars' ]
	 , 'backbone.customSync' : [ 'backbone' ]
	}
});
require( [ 
          'handlebars.helper'
         , 'backbone.customSync'
         ]	
	,function ( ){
	require( [ 'views/mainView' , 'router/studentRouter' ],
			function ( MainView  , StudentRouter ){
			window.appView = new MainView;
		var studentRouter = new StudentRouter();
	});
	
});

