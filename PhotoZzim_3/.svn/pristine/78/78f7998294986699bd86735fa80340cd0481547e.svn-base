define( [ 'jquery' , 'base' ]
	,function( $ , base ){
	return {
			load : function(){
				var _this = this;
				app.clear('mypage');
				require([ 'text!view/main_mypage.html', 'model/photo' ],
						function( template , $photo ){
					$photo.loadUserPhoto({ type : 'click' });
					base.loadTemplate('.main-container',template,{
							uId  : app.getUid()
						,	name : app.getuName()
					},'prev');
					_this.registerEvent();
					$('.main-container').selectable('destroy');
				});
			},
			registerEvent : function(){
				
				$('#myPage').on('click','.share-wrap .thumbnail' , function() {
					var $el     =  $(this),
					    $target = '.share';
					require([ 'model/photo' ],
						 function($photo){
						if( $el.parents('.share').size() === 1){
							$target = '.no-share';
						}
						$photo.changeZps({
							pPath : app.getOriginalPath( $el.find('img:nth-child(2)').attr('src') )
						});
						$el.parents('li').fadeOut('slow',function(){
							$(this).prependTo($target + ' .thumbnails').fadeIn('slow');
						});
					});
				}).on('click','.nav [href=#m-page-share]',function(e){
					var _dragOption = {
							helper: function(){
								return $('<div/>').attr('id','dragContainer').append($('li.ui-selected').clone(true)
												.removeClass('ui-selected'));
						}};
					require([ 'model/photo' ],
							function( $photo ){
								app.preventScroll('.share,.no-share');
								$photo.loadMyPhoto({ 
													zPs : 0
											,	callback: function(){
													$photo.loadMyPhoto({
														zPs : 1
													,callback : function(){
														$('.share,.no-share').
														find('li').draggable(_dragOption).end().selectable({
															filter : 'li'
														}).droppable({
															drop : function(event,ui){
											 					var $el     = $(this)
											 					,   $target =  '';
											 					require(['model/photo'],
											 						function($p){
											 						$target = !$el.hasClass('share') ?  '.no-share .thumbnails' : '.share .thumbnails';
											 						$(ui.helper).find('li').each(function(){
											 							$p.changeZps({
											 								pPath : app.getOriginalPath($(this).find('img:nth-child(2)').attr('src'))
											 							});
											 							$(this).prependTo($target).draggable(_dragOption);
											 						});
											 						$('.share-wrap .thumbnails li.ui-selected').remove();
											 					});
											 				}
														});
													}
												});
											}});
								
						});
					
				}).on('click','.nav [href=#m-page-group]',function(e){
					require([ 'model/group', 'model/photo' ,'text!view/main_groupround.html'],
							function( $g, $photo, template ){
						$('.share-group .thumbnails').empty();
						app.preventScroll('.photo-wrap,.group-wrap');
						$photo.loadMyPhoto({ zPs : 1
										, target : '.share-group .thumbnails'
										, callback : function(){
											$('.photo-wrap .thumbnails').find('li').draggable({
												helper: function(){
													var _dragContainer = $('<div/>').attr('id','dragContainer');
													$('.photo-wrap li.ui-selected').each(function(i){
														_dragContainer.append($(this).clone().css({
													      top      :   (i * 8) + 'px'
														 ,left     :  '-' +(i * 80) + 'px'
														 ,position :'relative'
														}).removeClass('ui-selected'));
													});
													return _dragContainer;
												}
											}).end().selectable({
												filter : 'li'
											});
										}});
						$g.loadGroupList({ type 	: 'prepare'
								,    	   callback : function(){
												 $('.group-wrap').empty();
												 base.loadTemplate('.group-wrap' , template , $g.getGroupList());
												 $('.group-wrap').find('.groupbox')
										 			.droppable({
										 				drop : function(event,ui){
										 					var $el = $(this);
										 					require(['model/group'],
										 						function($g){
										 						console.log($(ui));
										 						$(ui.helper).find('li').each(function(){
										 							$g.groupPhotoAdd({
										 								gId : $g.getGid($el.find('.gName').text())
										 							,	pPath : app.getOriginalPath($(this).find('img:nth-child(2)').attr('src'))
										 							});
										 						});
										 					});
										 					app.toast('success','그룹에올림 ');
										 				},
										 				over : function(){
										 					$(this).find('.round-wrap').addClass('over');
										 				},
										 				out : function(){
										 					$(this).find('.round-wrap').removeClass('over');
										 				}
										 			});
											}
										 });
							
						
					});
					e.preventDefault();
				}).on('click','[data-type=m-page]',function(){
					if($(this).hasClass('active'))
						return true;
					$('#myPage .row').removeClass('active');
					$($(this).attr('href')).addClass('active');
				});
			}
	};		
});