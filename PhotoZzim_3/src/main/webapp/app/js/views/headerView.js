define( [
         'backbone'
       , 'jquery'
       , 'facebook'
       , 'models/user'
       ] ,
		function ( Backbone , $ , fb , User) {
	return Backbone.View.extend({
		el : $('#header'),
		initialize : function (){
			
		},
		events : {
			'click .nav a[href*=login]' : 'login'
		},
		login : function (){
			fb.login( function ( user ){
				new User.Model( { name : user.name , uId : user.id })
					.save( { success : function ( result ) {
						console.log( result );                                                                        
					} });
			});
		}
	});
});