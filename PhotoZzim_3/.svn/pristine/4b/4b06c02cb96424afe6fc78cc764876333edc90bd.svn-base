define(['base']
,function(base){
	var __friendList = []
	,	__fInviteList = []
	,   __pfriendList = []
	,   __rfriendList = [];
	return {
		getFid : function(obj){
			var _fid = ''
				,	_tempArr = [];

			if( typeof(obj) === 'string' )
				obj = { fName : obj};

			obj.type   = obj.type || 'normal';
			obj.column = obj.column || 'name';

			if(obj.type === 'normal')
				_tempArr = __friendList;
			else if (obj.type === 'invite')
				_tempArr = __fInviteList;
			else if( obj.type === 'posible')
				_tempArr = __pfriendList;

			$.each(_tempArr,function(){
				if(this[obj.column] === obj.fName)
					_fid = this.fId || this.uId;
			});
			return _fid;
		},
		getFriendList : function(){
			return __friendList;
		},
		getInviteList : function(){
			return __fInviteList;
		},
		getPfriendList : function(){
			return __pfriendList;
		},
		getrFriendList : function(){
			return __rfriendList;
		},
		requestFriend : function(){
			$.ajax({
				url : '../friend/requestFriend.do'
			,  data : { uId : app.getUid() }
			,success: function(result){
				if(result.status === 200){
					__rFriendList = result.data;
					require([ 'text!view/main_friend.html' ]
					, function(template){
						base.loadTemplate('#t-friend .friend-wrap',template, __rFriendList);
					});
				}else{
					console.log(result.data);
				}
			}
			});
			return this;
		},
		loadFriendList : function(obj){
			obj.async = obj.async || false;	
			$.ajax({
				url   : '../friend/list.do'
			,	data  : { uId : app.getUid()}
			,  async  : obj.async 
			, success : function(result){
				if( result.status === 200 ){
					__friendList = result.data;
					if( obj.type === 'create'){
						require([ 'text!view/main_friend.html' ]
						, function(template){
							$('#t-friend .friend-wrap').empty();
							base.loadTemplate('#t-friend .friend-wrap',template, __friendList);
						});
					}
					!obj.callback || obj.callback();
				}else{
					console.log(result.data);
				}
			}
			});
			return this;
		},
		loadFpsList : function(callback){
			$.ajax({
				url : '../friend/loadFpsList.do'
					,  data : { uId : app.getUid() }
			, success : function(result){
				if(result.status === 200){
					__fInviteList = [];
					$.each(result.data,function(i,friend){
						friend.picture = 'https://graph.facebook.com/' + friend.fId + '/picture';
						__fInviteList.push(friend);
					});
					require(['text!view/main_navfinvite.html'],function(template){
						$('.f_invite').empty();
						base.loadTemplate('.f_invite',template,__fInviteList);
					});
					!callback || callback();
				}else{
					console.log(result.data);
				}
			}
			});
		},
		updateFps : function(obj){
			$.ajax({
				url  : '../friend/updateFps.do'
					,	data : { uId : app.getUid(), fId : obj.fId }
			,	success : function(result){
				if(result.status === 200){
					!obj.callback || obj.callback();
				}else{
					console.log(result.data);
				}
			}
			});
		},

		loadFriendAddList : function(){
			__pfriendList = [];
			$('.namebox').empty();
			$('.pfriendList').empty().addClass('loading');
			$('#f_add').modal('show');
			$.ajax({
				url : '../user/list.do',
				data : { uId : app.getUid() },
				success : function(result){
					if( result.status === 200){
						$.each(result.data,function(i,user){
							FB.api('me/friends?access_token=' + app.getToken(),function(friends){
								$.each(friends.data,function(index,friend){
									if(friend.id == user.uId){
										__pfriendList.push(user);
										if(result.data.length -1 === i){
											require(['text!view/main_friendmodal.html'],function(template){
												$('.pfriendList').removeClass('loading');
												base.loadTemplate('.pfriendList',template,__pfriendList);
											});
										}
									}
								});
							});
						});
					}else{
						console.log(result.data);
					}
				}
			});
		},
		addFriend : function(obj){
			$.ajax({
				url : '../friend/add.do',
				data : {
					uId : app.getUid(),
					fId : obj.fId,
					fPs : false
				},
				success : function(result){
					if( result.status === 200 ){
						!obj.callback || obj.callback();
					}else{
						console.log(result.data);
					}
				}
			});
		},
		removeFriend : function(fId){
			$.ajax({
				url : '../friend/remove.do'
					,  data : { uId : app.getUid() , fId : fId }
			, async : false
			});
		},
		getFpsCount  : function(){
			var count = 0;
			$.ajax({
					url : '../friend/fpsCount.do'
				,data   : { uId : app.getUid() }
				, async : false
				, success : function(result){
					if(result.status === 200 ){
						count = result.data;
					}else{
						console.log(result.data);
					}
				}
			});
			return count;
		}
	};
});