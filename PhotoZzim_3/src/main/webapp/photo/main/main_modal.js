define([
        'jquery'
        ,'base'
        ,'text!view/main_groupmodal.html'
        ]
,function($,base,g_tmpl){
	return {
		load : function(obj){
			var _template = obj.type === 'group' ? g_tmpl : f_tmpl
					,	_mSelector = obj.type === 'group' ? '#g_add' : '#f_add';
			$('#modals').empty();
			base.loadTemplate('#modals',_template,obj);
			$(_mSelector).modal('show');
			$('.namebox').empty();
		},
		registerEvent : function(){
			app.preventScroll('.pfriendList,.namebox');
			require(['model/friend','model/group'],function($f,$g){
				$f.loadFriendList({ async : false });
				var createMspan = function(target){
					$('.namebox').append(
							$('<span/>').addClass('label entypo').text($(target).text())
							.append($('<a/>',{href : '#m_del'}).html(function(i,html){
								return html +  '&#10060';
							})
						)
					);
				};
				$(document).on('keyup','.search-query',function(){
					var reflect = $(this)
					,	strArr = new Array()
					,	regExp = /^[가-힣]/g
						,	regExp2 = /^[a-z]/gi;

							var friendArr = $f.getFriendList();
							$.each( friendArr , function( i , friend ){
								if( reflect.val().match( regExp )){
									if( friend.name.indexOf(reflect.val()) !== -1){
										strArr.push( {
											name    : friend.name 
										  , fId 	: friend.fId
										} );
									}
								}else if(reflect.val().match(regExp2)){
									if(friend.name.toLowerCase().indexOf(reflect.val().toLowerCase())!=-1){
										strArr.push( { 
											name 	: friend.name 
										 ,  fId 	: friend.fId
										} );
									}
								}
							});
							
							if( strArr.length > 0 ){
								$(this).popover('show');
								$('.popover').css('top',$('.popover').position().top + 51);
								var _spanArr = $(this).parents('.modal-body').find('.namebox span');
								
								for(var i = strArr.length - 1 ; i >= 0 ; i--){	
									_spanArr.each(function(){
										if($(this).text().substr(0,$(this).text().length - 1) == strArr[i].name)
											strArr.remove(i);
									});
								}	
								
								console.log(strArr.length);
								$(this).find('+ .popover').find('p').html($.map(strArr,function(friend,i){
									return $('<a/>').attr('href','#f_name').append(
											$('<img/>').attr('src','https://graph.facebook.com/' + 
															friend.fId + '/picture')
											,friend.name
									).get(0).outerHTML;
								}).join('<br>'));
							}  else {
								if($(this).find('+ .popover').hasClass('in')){
									$(this).popover('hide');
								}
							}
				}).on('click','[href=#f_name]',function(e){
					createMspan(this);
					$('input.search-query').trigger('focus').popover('hide');
					e.preventDefault();
				}).on('click','[href=#m_del]',function(e){
					var _this = $(this).parents('span');
					if($(this).parents('#f_add').size())
						$('.pfriendList a').each(function(){
							if($(this).text() === $(_this).text().substr(0,$(_this).text().length - 1)){
								$(this).attr('href','#pfriend').removeClass('exist');
							}
						});

					$(this).parents('span').remove();
					e.preventDefault();
				}).on('click','.search-query',function(e){
					$(this).popover('hide');
				}).on('click','[href*=_close]',function(e){
					$('#g_add').modal('hide');
					$('#f_add').modal('hide');
				}).on('click','[href=#m_add],[href=#g_add]',function(e){
					var message =''
						,   href 	= $(this).attr('href')
						,	spanArr = $('#g_add .modal-body').find('.namebox span');

					if( href === '#g_add'){
						$g.groupCreate($('#g_name').val());
						message = '그룹 생성 완료';
					}else if( href === '#m_add'){
						message = '멤버 추가 완료';
					}
					$g.loadGroupList({type : 'prepare'
									, async : false});
					spanArr.each(function(){
						$g.groupAddUser({
							gId : $g.getGid($('#g_name').val() || $('#g_name').text())
							, uId : $f.getFid($(this).text().substr(0,$(this).text().length - 1)
							)});
					});
					$g.loadGroupList();
					app.toast('success',message);
					$('#g_add').hide();
					e.preventDefault();
				}).on('click','[href=#pfriend]',function(){
					$(this).addClass('exist').removeAttr('href');
					createMspan(this);
				}).on('click','[href=#f_add]',function(){
					$('.modal-body').find('.namebox span').each(function(){
						$f.addFriend({
							fId : $f.getFid({
								fName : $(this).text().substr( 0 , $(this).text().length -1 )
							, 	type  : 'posible'
							,	column: 'uName'
							})
						});
					}).parents('.namebox').empty();
					app.toast('success','친구 요청을 발송하였습니다.');
					$('#f_add').modal('hide');
				});
			});
			return this;
		}
	}.registerEvent();
});