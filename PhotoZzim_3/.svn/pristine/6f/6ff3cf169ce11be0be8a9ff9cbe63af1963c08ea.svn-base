define(['jquery','model/photo','base','jquery.fancybox']
	,function($,$p,base){
	return {
		load : function(uid){
			$('.nav.pull-left').find('.status,.entypo').addClass('none');
				$('.main-container').empty();
			$p.init()
				.loadDay({
					pDate : '',
					type  : 'click'
				});
			$('[data-rel=r-menu]').removeClass('active');
			$('.p-menu').addClass('active');
			

		},
		registerEvent : (function(){
			
			$('.main-container').on('mousedown','.photo-container li',function(e){
				if(!(e.metaKey || e.ctrlKey))  e.stopImmediatePropagation();
			});
			$('.p-menu [href=#day]').click(function(){
				$p.loadDay({
					pDate : '',
					type  : 'click'
				});
			});
			$('.p-menu [href=#spread]').click(function(){
				$p.loadSpread({
					pPath : ''
				});
			});
			$('.p-menu [href=#slide]').click(function(){
				var _imgArr = new Array();
				console.log($p.__photoType);
				if($p.getType() =='day'){
					$('.thumbnail.ui-selected').each(function(){
						$p.loadDetailAll({
							 pDate : $(this).find('p').text()
						, callback : function(data){
								$.each(data,function(){
									console.log(this.pPath);
									_imgArr.push(app.UPLOAD_PATH + this.pPath);
								});
								$.fancybox(_imgArr);
							}
						});
					});
				} else if($p.getType() === 'detail'){
					$('.thumbnail.ui-selected').each(function(){
						_imgArr.push( app.UPLOAD_PATH + 
								app.getOriginalPath(
										$(this).find('img:nth-child(2)').attr('src')	));
						
					});}
					$.fancybox(_imgArr);
			});
			
			$('.p-menu [href=#zzim]').click(function(){
				$(".ui-selected").each(function(){
					$p.photoZzim({
						pPath : app.getOriginalPath($(this).find('img:nth-child(2)').attr('src')),
						pDate : $p.currentDate
					});
				});
				require([ 'model/photo' ]
					,function($p){
					$p.loadDetail({
						pDate : $p.currentDate,
						type : 'click',
						pPath : ''
					});
				});
			});
			$('.p-menu [href=#delete]').click(function(){
				console.log($p.getType());
				if($p.getType() === 'day'){
					$('.ui-selected').each(function(index){
						var callback; 
						if( $('.ui-selected').size() - 1  === index){
							callback  = function(){
								$p.loadDay({
									type : 'click',
									pDate : ''
								});
							};
						}
							$p.deleteDay({
								pDate : $(this).find('p').text(),
							  callback : callback
							});
						
					});
				}else if($p.getType() === 'detail'){
					$('.ui-selected').each(function(index){
						var _callback; 
						if( $('.ui-selected').size() - 1  === index){
							_callback  = function(){
								$p.loadDetail({
									type : 'click',
									pDate : $p.currentDate,
									pPath : ''
								});
							};
						}
							$p.deletePhoto({
								pPath : app.getOriginalPath($(this).find('img:nth-child(2)').attr('src')),
							  callback : _callback
							});
						
					});
				}
			});
			$(window).bind('scroll',function(){
				if($p.isScrollArea()){
					var _lastImg = $('.thumbnail').last();
					if( $p.getType() === 'day'
							&& !$p.scrollEnd.day){
						if(_lastImg.find('p').text().match(/^[0-9]/g)){
							$p.loadDay({
								pDate : _lastImg.find('p').text()
								,   type  : 'scroll'
							});
						}
					}else if( $p.getType() === 'detail'
						 	&& !$p.scrollEnd.detail){
						$p.loadDetail({
							pDate : $('.status').text()
						,   pPath : _lastImg.find('img:nth-child(2)').attr('src')
						,   type  : 'scroll'
						});
					}else if( $p.getType() === 'spread'
						 	&& !$p.scrollEnd.spread){
						$p.loadSpread({
							type : 'scroll',
							pPath : app.getOriginalPath(_lastImg.find('img:nth-child(2)').attr('src'))
						});
					}
				}
			});
			return this;
		})(),
		addDayEvent : (function(){
			var obj = {},
				_arr = new Array(),
				date = '';
			$('.main-container').on('click','.photo-container .thumbnail',function(){
				console.log($p.getPhotoList());
//				console.log($p.getPhotoList()[$(this).find('p').text()][0].pPath );
				if( $p.getType() !== 'day' )
					return true;
				$p.loadDetail({
							pDate : $(this).find('p').text()
						  , pPath : $p.getPhotoList()[$(this).find('p').text()][0].pPath 	
						  , type  : 'click'
				});
				$p.currentDate = $(this).find('p').text();
			}).on('mousemove','.photo-container .thumbnail',function(e){
				if( $p.getType() !== 'day' )
					return true;
				date = $(this).find('p').text();
				_arr=  $p.getPhotoList()[date];
				if( _arr.length == 1 ) return true;
					obj[date + '_distance'] = Math.round(($(this).width() + 10) / _arr.length) 
												> (($(this).width() + 10) / 7) ?
														(($(this).width() + 10) / 7)  
															: Math.round(($(this).width() + 10) / _arr.length);
					obj[date + '_pageX'] = obj[date + '_pageX'] || e.pageX;
					obj[date + '_index'] = obj[date + '_index'] || 0 ;
					
				console.log(obj);
				if(Math.abs(e.pageX - obj[date + '_pageX']) >= obj[date + '_distance'] ){
					$(this).find('img:nth-child(2)').attr('src',(app.getThumbPath($(_arr)
							.get(obj[date + '_index']).pPath)));
					
					if(obj[date + '_index'] === _arr.length -1)
						obj[date + '_index'] = 0;
					else
						obj[date + '_index'] +=1;
					
					obj[date + '_pageX'] = e.pageX;
				}
			});
			return this;
		})(),
		addDetailEvent : (function(){
			$('.main-container').on('click','.photo-container .thumbnail',function(){
				if($p.getType() == 'day')
					return true;
					$.fancybox(app.UPLOAD_PATH + 
							app.getOriginalPath(
									$(this).find('img:nth-child(2)').attr('src')));
			});
			return this;
		})()
	};
});