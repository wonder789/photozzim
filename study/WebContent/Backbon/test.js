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
require( [ 'jquery', 'handlebars', 'underscore', 'backbone' ]
	,function ( $ , handlebar ){
	$.fn.render = function( opts ){
		$( this ).append( Handlebars.compile( opts.template ) ( opts.context ) );
	};
	require( [ 'model/studentDao' , 'view/studentListView' ] ,
			function( studentList , tr ){
		studentList.add( [ 
		           { name : 'aaa' , tel : '222-2222' , address : '서울시' }
		         , { name : 'bab' , tel : '333-3333' , address : '전라도' }
		         , { name : 'cca' , tel : '444-4444' , address : 'qewf' }
		         , { name : 'zcx' , tel : '555-5555' , address : 'zcv' }
		          ]);
		_.each( studentList.toArray() , function ( student , index , list ) {
			$('.studentList').append(new tr( { model : student } ).render().el);
		} );
	});
});
