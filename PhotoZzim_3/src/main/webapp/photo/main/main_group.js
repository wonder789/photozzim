define(['jquery','base','model/group',
        'model/photo','model/friend','text!view/main_grouppage.html'
        ,'text!view/main_groupmodal.html'],function($,base,$g,$p,$f,tmpl,m_tmpl){
	return {
		load : function(_gName){
			$p.loadGroupPhoto({
				gName : _gName,
				type  : 'click',
				pPath : '',
				callback : function(){
					$g.loadGroupUser({
						gId : $g.getGid(_gName)
					});
				}
			});
			return this;
		},
		registerEvent : (function(){
			$('.main-container').on('click','[href=#g_ban]',function(){
				var _uName = $(this).parents('.m_box').find('span').text()
				,	_gName = $('.group-container h3').text();
				Messi.ask(_uName + '님을 탈퇴시키겠습니까?', function(val) { 
					if(val === 'Y'){
						if($f.getFid(_uName)){
							$g.groupOut({
								uId : $f.getFid(_uName), 
								gId : $g.getGid(_gName), 
								callback : function(){
									app.toast('success', _uName + '님이 그룹에서 탈퇴되었습니다.');
									$g.loadGroupUser({gId : $g.getGid(_gName)});
								}
							});
						}else{
							$g.groupRemove({gId : $g.getGid(_gName)});
						}
					}
				},	{ btnYesText : 'Yes'});
			})
			.on('click','[href=#invite]',function(){
				$('#modals').empty();
				base.loadTemplate('#modals',m_tmpl,{
					title : '그룹 멤버 추가'
				,	gName : $('.group-container h3').text()
				,  btnLabel : '추가하기'
				}).find('[href=#g_add]').attr('href','#m_add');
				$('#g_add').modal('show');
			});
			
		})()
	};
});