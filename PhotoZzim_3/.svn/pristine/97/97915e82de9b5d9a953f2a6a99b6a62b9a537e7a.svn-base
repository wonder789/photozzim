define(['jquery','base','text!template/photo.html'],function($,base,html){
	return {
		load : function(){
			$.ajax({
				url : 'listall.do',
				data : { 
					uId : '100001847904111',
					pPath : '1354166359572.JPG',
					nailNum : 80
				},
				success : function(result){
					base.loadTemplate('#photo',html,result);
				}
			});
		}
	};
});