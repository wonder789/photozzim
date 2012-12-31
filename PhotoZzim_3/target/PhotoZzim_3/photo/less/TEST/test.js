$(document).ready(function(){
	
  $('#canvid1').cAlbum({
	  bgImage : 'images/background-3.jpg',
	  itemSelector : '.normal'
  });
  $.ajax({
	  url : '../../loadSpread.do'
	,data : { uId : '100003640606804' , pPath : '' , nailNum : 9999 }
    , success : function(result){
    	if(result.status === 200){
    		$.each(result.data,function(){
    			$('<img/>',{ id : this.pId , src : getThumbPath(this.pPath) }).addClass('normal').appendTo('#sungae2');
    		});
    	}else{
    		console.log(result.data);
    	}
    }
  });
  function getThumbPath(path){
		return '../../../upload/photo/' +  path.substring(0,path.lastIndexOf('.')) + '_thumb' 
		+path.substring(path.lastIndexOf('.'));
	}
});