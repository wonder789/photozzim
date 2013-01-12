define( [ 
          'backbone'
        , 'jquery'
        , 'facebook'
        , 'views/appView'
        ] ,
		function ( Backbone , $ , fb , AppView ) {
	return Backbone.Router.extend({
		routes : {
			"" : 'index',
			"!/photo" : 'showAlbum',
			'!/login' : 'login',
		},
		index : function(){
			
		},
		initialize : function (){
			var appView = new AppView();
			Backbone.history.start();
		},
		login : function(){
			
		}
	});
});