define(['jquery'
       ,'base'
       ,'text!view/main_friend.html'
       ,'main/main_group'
       ,'text!view/main_grouppage.html'
       ,'main/main_modal']
	,function($,base,f_template,$gc,tmpl,$m){
	console.log(this);
	return {
		registerEvent : function(){
			app.preventScroll('.sub-container');
			$('.sub-container').on('click','[href=#g_name],[href=#g_image]',function(){
			  var _gName = $(this).text() || $(this).parents('div:not(.sub-container)')
			  									.find('[href=#g_name]').text();
				if($('.group-container').size() != 0)
					$('.group-container').remove();
				
				$('.main-container').children(':not(.photo-container)').remove();
				base.loadTemplate('.main-container',tmpl,_gName,'prev');
			  
				$gc.load(_gName);
			}).on('click','[href=#add_group]',function(){
				$m.load({
					title   : '그룹 추가' 
				,  btnLabel : '만들기'
				,	type    : 'group' 
				});
			}).on('click','[href=#add_friend]',function(){
				require([ 'model/friend' ],function($f){
					$f.loadFriendAddList();
				});
			}).on('mouseenter','.box.friend',function(){
				$(this).find('[href=#f_ban]').addClass('active');
			}).on('mouseleave','.box.friend',function(){
				$(this).find('[href=#f_ban]').removeClass('active');
			}).on('click','[href=#f_ban]',function(){
				banf_name = $.trim($(this).parents('.box').find('[href=#f_name]').text());
				Messi.ask(banf_name + '님을 목록에서 삭제하시겠습니까?', function(val) { 
					if(val === 'Y'){
						require(['model/friend'],
								function($f){
							$f.removeFriend($f.getFid(banf_name));
							app.toast('success',banf_name + "님께서 목록에서 삭제되었습니다.");
							$f.loadFriendList({type : 'create'});
						});
					}
				},	{ btnYesText : 'Yes'});
			}).on('shown','[href=#t-group]',function(){
				require(['model/group'],function($g){
					$g.loadGroupList();
				});
			}).on('click',' [href=#f_name],[href=#f_image] ',function(e){
				var $el = $(this);
				require([ 
				          'model/photo' 
				        , 'model/friend'
				        ]
					,function( $p , $f ){
						$p.loadUserPhoto(
								{
									type : 'click'
								,	uId  : $f.getFid( $.trim($el.text()) 
									|| $.trim(
											$el.parents('.box').find('[href=#f_name]').text()
											)
										)
								}
						);
				});
			});
				
		},
		toggleSub : function(obj){
			$(obj.target).toggle(function(){
				var _cssInterval = window.setInterval(function(){
					$(obj.target).css('left',$('.sub-container').position().left + $('.sub-container').width());
				},1);
				$('.sub-container').addClass('active',300,function(){
					window.clearInterval(_cssInterval);
					!obj.subenter || obj.subenter();
				});
			},function(){
				var _cssInterval = window.setInterval(function(){
					$(obj.target).css('left',$('.sub-container').position().left + $('.sub-container').width());
				},1);
				$('.sub-container').removeClass('active',300,function(){
					window.clearInterval(_cssInterval);
					!obj.subleave || obj.subleave();
				});
			});
			return this;
		}
	};
});	