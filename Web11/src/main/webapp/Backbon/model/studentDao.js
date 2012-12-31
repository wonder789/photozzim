define( [ 'jquery', 'vo/Student' ],
		function( $ , Student ){
	var StudentList =  Backbone.Collection.extend({
		 model : Student
	})
	,students = new StudentList();
	
	return students;
});