requirejs.config({
	 baseUrl : 'scripts'
   , appDir  : './'
   , paths   : {
	       views  : '../views'
	 , templates  : '../templates'
	 ,   models   : '../models'
	 ,collections : '../collections'
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
	require( [ 'views/mainView' ],
			function ( MainView ){
		window.MainView = new MainView();
	});
	
});

