requirejs.config({
	 baseUrl : 'scripts'
   , appDir  : './'
   , paths   : {
	   	   view : '../view'
	 , template : '../template'
	 ,       vo : '../vo'
     ,    model : '../model'
	}
});
require( [ 'jquery', 'handlebars', 'underscore', 'backbone' , 'backbone.localStorage']
	,function ( $ , handlebar ){
	$.fn.render = function( opts ){
		$( this ).append( Handlebars.compile( opts.template ) ( opts.context ) );
	};
	require( [ 'vo/Student' ],
			function( Student ){
		var student = new Student();
		student.save();
	});
	require( [ 'model/studentDao' , 'view/studentListView' ] ,
			function( studentList , ListView ){

	});
});
