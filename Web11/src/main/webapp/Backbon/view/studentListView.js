define( [ 'jquery' , 'text!template/studentList.tmpl' ],
		function( $ , template ){
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
	});
});