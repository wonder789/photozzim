define( [ 'require' , 'text!templates/studentList.tmpl' ],
		function( require , template ){
//	학생목록 배열을 넘겨주면 뷰를 렌더링
	return Backbone.View.extend({
		 tagName : 'table'
	  , className : 'studentList'
	  ,  render : function(){
			  $(this.el).render({
				  template : template
				, context  : this.model.toJSON()
			  });
			  return this;
	  	}
	  , events  : {	
		  	'click tr:gt(0)' : 'findOne'
	  	}
	  , findOne : function (e){
		  var $target  = $( e.currentTarget )
		 , studentList = require( 'collections/StudentList' );
		  studentList
		  	.get( $target.attr( 'data-pk' ))
			   .fetch({
				   success : function ( student ){
				    $('#main').trigger('showForm' , [ 'true' , student.toJSON() ]);
				   }
			   });
		  	
	  	}
	});
});