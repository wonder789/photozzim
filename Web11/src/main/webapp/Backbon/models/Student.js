define( [ 'jquery' ]
	, function( $ ){
	var Student = Backbone.Model.extend({
		initialize : function () {
		},
		url : '../json/student',
		idAttribute : 'no'
	});
	
	return Student;
});