define( [ 
          'backbone'
        , 'jquery'
        , 'views/headerView'
        , 'views/contentView'
        ] ,
		function ( Backbone , $ , HeaderView , ContentView) {
	return Backbone.View.extend({
		el : $('#app'),
		initialize : function (){
			this.header = new HeaderView();
			this.contnet = new ContentView();
		},
		render : function (){
			
		},
		events : {
			'click a' : 'anchorNavigate'
		},
		anchorNavigate : function ( e ){
			var $target = $( e.currentTarget );
			Backbone.history.navigate( $target.attr('href') );
			e.preventDefault();
		}
		
	});
});