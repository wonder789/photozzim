define( [ 'jquery', 'vo/Student' ],
		function( $ , Student ){
	var StudentList =  Backbone.Collection.extend({
		 model : Student
      ,  url  : '../json/student'
	})
	,students = new StudentList();
	
	return students;
});