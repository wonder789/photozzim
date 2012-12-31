define([ 'jquery' , 'base' , 'marsony' ],
		function( $ , base ) {
	var isEvent = true;
	var _bgNum = 0;
	return {
		load : function(){
			var _this = this;
			$('.main-container').appendHTML(
					{ url : '../view/main_album.html',
						cancel   : '.photo-container > *',
						filter   : '.photo-container .thumbnails',
						callback : function(){
							_this.refreshList();
							if($('.main-container').hasClass('ui-selectable'))
								$('.main-container').selectable('destroy');
						}});
			return this;
		},
		init : function(){
			$('[data-rel=r-menu]').removeClass('active');
			$('.a-menu').addClass('active');
		
		},
		loadBackground : function(search,callback){
					$.ajax({
						url : 'https://ajax.googleapis.com/ajax/services/search/images'
					  , data  : {
						    v : '1.0',
						    q : search ,
						  start : _bgNum,
						  rsz  : 8
					  }
					  ,dataType : 'jsonp'
					  , success : function(result){
							  !callback || callback(result.responseData.results);
							  _bgNum += 4;
					  }
				});
		},
		refreshList : function(){
			require([ 'model/album'  ],
					function( $a ){
				$('.album-list').empty();
				$('#a-title').val('');
				$a.loadUserAlbum();
				$a.loadFriendAlbum({
					callback : function(){
						$('.album-list').masonry({
							itemSelector : '.item'
						});
						$('#img-root').empty();
					}
				});
			});	
			return this;
		},
		loadCanvas : function(callback){
			var $this = this;
			$('.album-list').empty()
			.append(
					$('<canvas/>',{ id : 'albumCanvas'})
			);
			require([ 'model/photo', 'canvasElement' , 'canvasImg' , 'canvasUtil' , 'utilities' ]
			,function($p){
				$('.album-container').find('label').removeClass('none')
				.end().find('.a-nav').addClass('none');
				var canvas = $('#albumCanvas').cAlbum({
							 itemSelector : '.a-photo'
							, canvasWidth  : 800
							, canvasHeight : 500
				});
				$p.loadUserPhoto({
							tType 	 : 'prepare'
						, 	callback : function(result){
							require([ 'text!view/main_albumthumb.html' , 'text!view/main_backgroundthumb.html' ] 
							,function(template,bgTemplate){
								base.loadTemplate('.album-list',template,result);
								base.loadTemplate('.album-list',bgTemplate);
								$('#bgthumb').css('top',$('#albumCanvas').height() + 15);
								$('#albumthumb').css('left',$('#albumCanvas').width() + 20);
								app.preventScroll('#albumthumb');
								
							});
						}
				});
				!callback || callback(canvas);
			});
		},
		registerEvent : function(){
			var _this = this;
			if(!isEvent)
				return true;
			$('.main-container').on('click','[href=#album-delete]',function(){
				if( $('.item.ui-selected').size() === 0 )
					return true;

				require([ 'model/album' ],
						function($a){
					$('.item.ui-selected').each(function(){
						$a.removeAlbum({
							aId : $a.getAid($(this).find('p').text())
						});
					});
					app.toast('success','삭제 완료');
					_this.refreshList();
				});
			}).on('click','.item',function(e){
				var _this = this;
				$('#img-root').attr('data-pk',$(_this).attr('data-pk'));
				$.fancybox({
					href  : $(_this).find('img').attr('src'),
					beforeShow : function(){
						this.title += '<p>' +  $(_this).find('p').text() +  '</p>';
						this.title +='<button id="modifyAlbum" class="btn btn-info" type="button">수정</button>';
					},
					helpers : {
						title : {
							type: 'inside'
						}
					}  

				});
			}).on('click','[href=#album-add]',function(){
				_this.init();
				_this.loadCanvas();
				require(['model/album'],function($a){
					$a.type = 'add';
				});
				
			});
			$(document).on('click','#modifyAlbum',function(){
				   var $el = $(this),
				   	   $target = $(this);
				   		$this = {};
				   	_this.init();
				   _this.loadCanvas(function(canvas){
					   console.log(canvas);	
					   $('#a-title').val($target.parents('.fancybox-title').find('p').text());
					   $.fancybox.close(true);
					   require([ 'model/album' ],
							   function($a){
						   canvas._aImages = [];	
						   var _arr = JSON.parse($a.getAlbum($el.parents('.fancybox-title').find('p').text()).apData);
						   $.each(_arr
								   ,function(i){
							   $this = JSON.parse(this);
							   $('<img/>',$this.dom).addClass('a-photo').appendTo('#img-root');
							   if(_arr.length -1 === i){
								   canvas.setCanvasBackground($.extend(new Canvas.Img($this.dom.id,{}),$this.value));
							   }else{
								   canvas._aImages.push($.extend(new Canvas.Img($this.dom.id,{}),$this.value));
							   }
							   $a.type = 'modify';
						   });
						   canvas.renderAll();
					   });
				   });
			});
			isEvent = false;
			return this;
		}
	};
});