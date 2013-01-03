requirejs.config({
	 baseUrl : 'scripts'
   , appDir  : './'
   , paths   : {
	   		  async: 'async'
	 ,	    view   : '../View'
	 , template   : '../template'
	 ,       vo   : '../Models/vo'
	 , collection : '../Models/Collection'
	}
});
require( [ 
           'jquery'
         , 'handlebars'
         , 'handlebars.helper'
         , 'underscore'
         , 'backbone'
         , 'backbone.customSync'
         ]
	,function ( $ ){
	
	require( [ 'view/mainView' ],
			function ( MainView ){
		window.MainView = new MainView();
	});
	
});

