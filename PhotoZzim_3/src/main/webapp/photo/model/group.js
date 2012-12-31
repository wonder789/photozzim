define(['base','text!view/main_grouppage.html'
        ,'text!view/main_groupuser.html'],
	function(base,g_template,gu_tmpl){
		var __groupList = []
		,	__gInviteList = [];
		return {
			getGid : function(obj){
				var _searchArr = []
					, _gid     = '';
				
				if( typeof(obj) === 'string' )
					obj = { gName : obj };
				
				obj.type = obj.type || 'normal';
				
				if(obj.type === 'normal')
					_searchArr = __groupList;
				else if(obj.type === 'invite')
					_searchArr = __gInviteList;
				
				if(_searchArr.length > 0){
					$.each(_searchArr,function(){
						if(this.gName === obj.gName)
							_gid = this.gId;
					});
				}
				return _gid;
			},
			getGroupList : function(){
				return __groupList;
			},
			getInviteList : function(){
				return __gInviteList;
			},
			groupCreate : function(_gcName){
				$.ajax({
						url     : '../group/groupCreate.do'
					,	data    : { gName : _gcName , uId : app.getUid() }
					,   async   : false
				});
				return this;
			},
			groupAddUser : function(obj){
				$.ajax({
					   url : '../group/groupEnter.do'
				,     data : { gId : obj.gId , uId : obj.uId }
				,    async : false
				});
				return this;
			},
			groupOut : function(obj){
				$.ajax({
					  url : '../group/groupOut.do'
				,  	 data : { uId : obj.uId ,gId : obj.gId}
				, success : function(result){
					if(result.status === 200){
						//app.toast('success','그룹 탈퇴 완료');
						//reflect.loadGroupList();
						!obj.callback || obj.callback(); 
					}else{
						app.toast('error','그룹 탈퇴 실패');
					}
				}
				});
			},
			loadGroupList : function(obj){
				obj = obj || {};
				obj.type = obj.type || 'create';
				$.ajax({
					url : '../group/loadGroup.do'
				,  data : { uId : app.getUid() }
				, async : obj.async == true ? true : false
				, success : function(result){
					if(result.status === 200){
					//	sessionStorage.setItem('group',JSON.stringify(result.data));
						$.each(result.data , function(){
							this.picture = app.getThumbPath(this.pPath);
						});
						__groupList = result.data;
						if( obj.type === 'create' ){
							require(['text!view/main_grouplist.html'],function(template){
								$('#t-group').empty();
								base.loadTemplate('#t-group',template,result);
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
			loadGroupUser : function(obj){
				var _result = new Array();
				$.ajax({
							url : '../group/loadGroupUser.do'
					,	   data : {gId : obj.gId}
					,	success : function(result){
						if(result.status === 200){
							$.each(result.data , function( i , gUser ){
								gUser.picture = 'https://graph.facebook.com/' + gUser.uId + '/picture?type=normal';
								_result.push(gUser);
							});
							$('#m-container').empty();
							base.loadTemplate('#m-container',gu_tmpl,_result);
							
							$('#carousel').rcarousel({
								visible : 10 < result.data.length ? 10 : result.data.length
							  , step    : 3 < result.data.length ? 3 : result.data.length
							  , start   : app.generatePages
							  , pageLoaded : app.pageLoaded
							  });
							app.setDistance($('.group-container').height() + 20);
							!obj.callback || obj.callback();
						}else{
							console.log(result.data);
						}
					}
				});
			},
			loadGroupInvite : function(callback){
				$.ajax({
						url     :  '../group/loadGroupInvite.do'
					,	data    : { uId : app.getUid() }
					, success   : function(result){
						if(result.status === 200){
							__gInviteList = result.data;
							require([
							         'model/friend'
							        ,'text!view/main_navginvite.html'
							        ],
									function( $f , gi_tmpl ){
								
								$.each(__gInviteList , function (i){
									this.picture = 'https://graph.facebook.com/' + this.uId + '/picture';
									this.name = this.name + '(' + this.gName + ')';
								});
							
								$('.g_invite').empty();
								base.loadTemplate('.g_invite',gi_tmpl,__gInviteList);
							});
							
							!callback || callback();
						}else{
							console.log(result.data);
						}
					}
				});
				return this;
		},
		groupUserPermit : function(obj){
			$.ajax({
				   url    : '../group/groupUserPermit.do'
				,  data   : { gId : obj.gId , uId : app.getUid() }
				, success : function(result){
					if(result.status === 200){
						!obj.callback || obj.callback();
					}else{
						app.toast('error','그룹 참가 실패');
						console.log(result.data);
					}
				}
			});
		},
		groupRemove : function(obj){
			var reflect = this;
			$.ajax({
					url : '../group/groupRemove.do'
			,    data	: {gId : obj.gId}
			,   success : function(result){
				if(result.status === 200){
					app.toast('success','그룹이 삭제 되었습니다.');
					obj.callback ? obj.callback() : reflect.loadGroupList();			
				}else {
					app.toast('error','그룹 삭제 실패');
					console.log(result.data);
				}
			}
			});
		},
		groupPhotoAdd : function(obj){
			$.ajax({
				url     : '../group/groupPhotoAdd.do'
			,	data    : {gId : obj.gId, pPath : obj.pPath}
			,   async   : false
			});
		},
		getGpsCount : function(){
			var count = 0;
			$.ajax({
				url     : '../group/gpsCount.do'
			,  data     : { uId : app.getUid() }
			, async     : false
			,success    : function(result){
				if(result.status === 200){
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