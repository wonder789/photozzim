define(['jquery','base','text!view/main_nav.html','model/friend','model/group']
	,function($,base,template,$f,$g){
	
	return {
		loadProfile : function(id){
			FB.api(id,function(result){
				result.picture = 'https://graph.facebook.com/' + result.id + '/picture';
				result.flength = $f.getFpsCount();
				result.glength = $g.getGpsCount();
				base.loadTemplate('.nav-collapse',template,result);
				$f.loadFpsList(function(){
					$g.loadGroupInvite();
				});
			});
			return this;
		},
		registerEvent : function(){
			var	_this;
			$('.navbar-inner').on('click','[href*=invite]',function(){
				 _this = this;
				Messi.ask('수락하시겠습니까 ?', function(val) { 
					if(val === 'Y'){
						if($(_this).attr('href') === '#f_invite'){
							$f.updateFps({
								fId : $f.getFid({
									fName :  $(_this).text()
								,  type : 'invite'
								})
							  , callback : function(){
									app.toast('success','친구요청을 수락하셨습니다.');
									$f.loadFriendList({
										type : 'create'
									,callback : $f.loadFpsList
									});
								}
							});
						}else if($(_this).attr('href') === '#g_invite'){
							console.log($(_this).text().match(/\((.*)\)/)[1]);
							$g.groupUserPermit({
								gId : $g.getGid({
											type : 'invite'
									,		gName:  $(_this).text().match(/\((.*)\)/)[1]
											}),
								callback : function(){
									if($('#carousel').size() === 0){
										app.toast('success','그룹에 참가하셨습니다.');
									}else{
										$g.loadGroupUser({
											gId : $g.getGid({
															type : 'invite'
													,		gName:  $(_this).text().match(/\((.*)\)/)[1]
															})
										,	callback : function(){
												app.toast('success','그룹에 참가하셨습니다.');
											}
										});
									}
									$g.loadGroupInvite()
										.loadGroupList();
								}
							});
						}
					}
				},{ btnYesText : 'Yes'} );
			}).on('click', '[href=#logout]',function(){
				require(['facebook'],function($fb){
					$fb.logout();
				});
			}).on('click','[href=#myphoto]',function(){
				require(['main/main_mypage'] , function ( $m ){
					$m.load();
				});
			}).on('click','[href=#album]',function(){
				require(['main/main_album'] , function( $a ){
					$a.load()
						.registerEvent();
				});
			});
			return this;
		}
	}.registerEvent();
});