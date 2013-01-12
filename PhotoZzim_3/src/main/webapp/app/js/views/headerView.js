define( [ 'backbone' , 'jquery' , 'facebook' ] ,
		function ( Backbone , $ , $fb) {
	return Backbone.View.extend({
		el : $('#header'),
		initialize : function (){
			
		},
		events : {
			'click .nav a[href*=login]' : 'login'
		},
		login : function (){
			$fb.login( function ( user ){
				console.log(user);
			});
		}
	});
});