define(['jquery' , 'base'],function($ , base){
	var __userAlbumList   = [];
	var __friendAlbumList = [];
	return {
		type : 'add',
		getAlbum : function(title){
			var album = {};
			if(__userAlbumList.length > 0){
				$.each(__userAlbumList,function(){
					if(this.TITLE === title)
						album = this;
				});
			}
			return album;
		},
		getUserAlbumList : function(){
			return __userAlbumList;
		},
		getFriendAlbumList : function(){
			return __friendAlbumList;
		},
		loadUserAlbum : function(obj){
			obj = obj || {};
			obj.type = obj.type || 'create';
			obj.target = obj.target || '.album-list';
			$.ajax({
				url     : '../album/loadUserAlbum.do'
			,	data    : { uId : app.getUid() }
			,	success : function(result){
				if(result.status === 200){
					__userAlbumList = result.data;
					if(obj.type === 'create'){
						require(['text!view/main_albumlist.html'],
								function(template){
									base.loadTemplate(obj.target, template, __userAlbumList, 'prev');
									!obj.callback || obj.callback();
						});
					}
				}else {
					console.log(result.data);
				}
			}
			});
		},
		loadAlbumPhoto : function(obj){
			$.ajax({
				url     : '../album/loadAlbumPhoto.do'
			,	data    : { aId : this.getAid(obj.title) }
			,	success : function(result){
				if(result.status === 200){
					!obj.callback || obj.callback();
				}else {
					console.log(result.data);
				}
			}
			});
		},
		loadFriendAlbum : function(obj){
			obj = obj || {};
			obj.type = obj.type || 'create';
			obj.target = obj.target || '.album-list';
			$.ajax({
				url     : '../album/loadFriendAlbum.do'
			,	data    : { uId : app.getUid() }
			,	success : function(result){
				if(result.status ===200){
					__friendAlbumList = result.data;
					if(obj.type === 'create'){
						require(['text!view/main_albumlist.html'], function(template){
							base.loadTemplate(obj.target, template, __friendAlbumList);
							!obj.callback || obj.callback();
						});
					}
				}else {
					console.log(result.data);
				}
			}
			});
		},
		removeAlbum : function(obj){
			$.ajax({
				url   : '../album/removeAlbum.do'
			,	data  : { aId : obj.aId } 
			, 	async : false
			});
		},
		addAlbumPhoto : function(obj){
			$.ajax({
				url   : '../album/addAlbumPhoto.do'
			, 	data  : { aId : obj.aId , pPath : obj.pPath }
			, 	async : false
			});
		},
		removeAlbumPhoto : function(obj){
			$.ajax({
				url   : '../album/removeAlbumPhoto.do'
			,	data  : { aId : obj.aId , pPath : obj.pPath }
			, 	async : false
			});
		},
		updateAps : function(obj){
			$.ajax({
				url   : '../album/updateAps.do'
			, 	data  : { aId : obj.aId , aPs : obj.aPs }
			, 	async : false
			});
		},
		createAlbum : function(obj){
			var _this = this;
			 $.ajax({
	    		  	url : '../uploadAlbum.do'
	    	   ,   type : 'POST'
	    	   ,   data : { 
	    		   			title 	   : obj.title	 
	    		   		  , aId		   : obj.aId || 0
	    		   		  , canvasData : obj.canvasData
	    		   		  , uId		   : app.getUid()
	    		   		  , apData     : obj.apData 
	    		   		  , type       : _this.type
	    		   		  }
	    	   , success: function(result){
	    		   if(result.status === 200 ){
	    			   !obj.callback || obj.callback();
	    		   }else {
	    			   console.log(result.data);
	    		   }
	    	   }
			 });
		}
	};
});