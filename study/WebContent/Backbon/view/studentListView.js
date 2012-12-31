define( [ 'jquery' , 'text!template/studentList.tmpl' ],
		function( $ , template ){
	return Backbone.View.extend({
		 tagName : 'tr'
	  ,  render : function(){
			  $(this.el).render({
				  template : template
				, context  : this.model.toJSON()
			  });
		  return this;
	  	}
	});
});