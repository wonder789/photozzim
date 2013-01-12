define( [ 'jquery' , 'backbone' ] ,
		function ( $ , Backbone ) {
	var user = Backbone.Model.extend({
		url : 'user',
		idAttribute : 'uId'
	});
	var users = Backbone.Model.extend({
		url : 'user',
		model : user
	});
	return {
		Model : user,
		Collection : users
	};
});