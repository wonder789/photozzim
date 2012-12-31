define(['jquery','model/group','base']
,function($,$g,base){
		var __photoList = {}
		,	__myPhotoList = []
		,	__photoType = '';
		
		return {
			PHOTO_SIZE : 80,
			currentDate : '',
			scrollEnd  : {
				day : false,
				detail : false,
				spread : false,
				group : false,
				user  : false
			},
			getType : function(){
				return __photoType;
			},
			getPhotoList  : function(){
				return __photoList;
			},
			getPath : function(pId){
				var _path ='';
				$.each(__photoList , function(){
					if(this.pId = pId)
						_path = this.pPath;
				});
				return _path;
			},
			init : function(){
				$('[href=#zzim]').addClass('none');
				__photoType = 'day';
				for(var type in this.scrollEnd){
					this.scrollEnd[type] = false;
				}
				return this;
			},
			isScrollEnd  : function(result){
				if(result.data.length === 0){
					this.scrollEnd[result.type] = true;
					console.log(this.scrollEnd[result.type]);
				}
			},
			isScrollArea : function(){
				return $(window).scrollTop() == $(document).height() - $(window).height();
			},
			getNailNum : function(){
				return parseInt($('.main-container').width()/this.PHOTO_SIZE)
				* parseInt($('.main-container').height()/this.PHOTO_SIZE) + 5;
			},
			loadDetail : function(photo){
				var reflect = this;
				photo.type === 'scroll' ||  app.clear('photo');
				$.ajax({
					url : '../loadDetail.do',
					data : { uId   : app.getUid()
						,	 pDate : photo.pDate + '%'
						,	 pPath : app.getOriginalPath(photo.pPath)
						,  nailNum : this.getNailNum()
					},
					success : function(result){
						if(result.status === 200 ){
							result.type ='detail';
							reflect.isScrollEnd(result);
							__photoType = 'detail';
							require([ 'text!view/main_photothumb.html' ]
								,function(template){
								base.loadTemplate('.thumbnails',template,result);
							});
						}
					}
				});
			},
			loadSpread  :function(photo){
				var reflect = this;
				photo.type === 'scroll' ||  app.clear('photo');
				$.ajax({
					url : '../loadSpread.do'
						, data  : { uId : app.getUid() ,
							pPath : photo.pPath,
							nailNum : this.getNailNum() }
				, success : function(result){
					if(result.status === 200 ){
						result.type ='spread';
						reflect.isScrollEnd(result);
						__photoType = 'spread';
						require([ 'text!view/main_photothumb.html' ]
						,function(template){
							base.loadTemplate('.thumbnails',template,result);
						});
					}else{
						console.log(result.data);
					}
				}
				});
			},
			loadDetailAll : function(photo){
				$.ajax({
					url : '../loadDetail.do'
						, data : { uId   : app.getUid()
							, pDate   : photo.pDate
							, nailNum : 0 }
				, success : function(result){
					if(result.status === 200){
						photo.callback(result.data);
					}else{
						console.log(result.data);
					}
				}
				});
			},
			loadGroupPhoto : function(obj){
				obj.type === 'scroll' ||  app.clear('group');
				reflect = this;
				$.ajax({
					url : '../group/loadGroupPhoto.do',
					data : { pPath  : obj.pPath
						,  gId    : $g.getGid(obj.gName) 
						, nailNum : this.getNailNum()},
						success : function(result){
							if(result.status === 200 ){
								result.type ='group';
								reflect.isScrollEnd(result);
								__photoType = 'group';
								require( [ 'text!view/main_photothumb.html' ],
										function(template){
									base.loadTemplate('.thumbnails',template,result);
								});
								!obj.callback || obj.callback();
							}else{
								console.log(result.data);
							}
						}
				});
			},
			loadDay :  function(photo){
				photo.type === 'scroll' ||  app.clear('photo');
				var data    = new Array(),
				reflect = this;
				app.setDistance(50);
				$.ajax({
					url : '../loadDay.do',
					data : { uId : app.getUid() 
						,  pDate : photo.pDate 
						,nailNum : this.getNailNum()
					},
					success : function(result){
						if(result.status === 200){
							result.type = 'day';
							reflect.isScrollEnd(result);

							if(photo.type === 'click')
								__photoList = {};

							$.each(result.data,function(index,dayPhoto){
								__photoList[$(dayPhoto).get(0).pDate] = dayPhoto;
								data.push($(dayPhoto).get(0));
							});
							
							__photoType = 'day';
							require([ 'text!view/main_photothumb.html' , 'text!view/main_photo.html']
								,function( template ,pConatiner){
								$('.main-container').load('../view/main_photo.html',function(){
									base.loadTemplate(
											'.thumbnails'
											,	 template
											,	{
												type : "day"
													,  data : data
											}
									);
									$('.main-container').selectable({
										filter : '.photo-container .thumbnail'
									});
								});
								});
						}else{
							console.log(result.data);
						}
					}
				});
				return this;
			},
			deletePhoto : function (photo){ 
				$.ajax({
					url 	: '../zzim/remove.do',
					data 	: { uid : app.getUid() ,pPath : photo.pPath },
					success : function(result){
						if(result.status === 200){
							!photo.callback || photo.callback();
						}else{
							console.log(result.data);
						}
					}
				});
			},
			deleteDay	:function(photo){
				var reflect = this;
				photo.pDate = photo.pDate.match(/^[0-9]/) ? photo.pDate : 'null';
				this.loadDetailAll({
					pDate  : photo.pDate + '%'
					, 	callback : function(data){
						$.each(data,function(i){
							if(data.length -1 === i){
								reflect.deletePhoto({ pPath : this.pPath , callback : photo.callback });
								return false;
							}
							reflect.deletePhoto({ pPath : this.pPath });
						});
					} 
				});
			},
			photoZzim : function(photo){
				$.ajax({
					url : '../zzim/add.do',
					data : {
						uId : app.getUid(),
						pPath : photo.pPath,
					},
					async  : false
				});
			},
			loadUserPhoto : function(obj){
				
				obj.type === 'scroll' ||  app.clear('photo');
				obj.tType = obj.tType || 'create';
				obj.pPath = obj.pPath || '';
				obj.uId   = obj.uId	  || app.getUid();
				
					$.ajax({
						url : '../loadUserPhoto.do'
					,  data : {
								 uId   : obj.uId
							 ,  pPath  : obj.pPath 
							 , nailNum : this.getNailNum()
							   }
					,success : function(result){
						if( result.status === 200 ){
							require([ 'text!view/main_photothumb.html' ] ,
									function( template ){
								
								__photoType = 'user';
								if(obj.tType === 'create')
								base.loadTemplate(
										'.photo-container .thumbnails'
									,   template
									,	{
											data : result.data
										 ,  type : 'user'
										});
								
								!obj.callback || obj.callback(result.data);
							});
						}else{
							console.log(result.data);
						}
					}
				});
			},
			loadMyPhoto : function(obj){
				
				var target = (obj.zPs == 1  ? '.share' : '.no-share' ) + ' .thumbnails'; 
				obj.target = obj.target || target;
						$.ajax({
							url : '../loadMyPhoto.do'
						, data  : { 
									uId : app.getUid() 
								,   zPs : obj.zPs	
								 }
						,success : function(result){
							if(result.status === 200){
								require([ 'text!view/main_photothumb.html' ]
									, function(template){
									$(obj.target).empty();
									$.each(result.data ,  function(){
										this.uid = app.getUid();
									});
									base.loadTemplate( 
											obj.target 
										 ,  template
										 , {
												type : 'detail'
											,	data : result.data 
										   });
									!obj.callback || obj.callback();
								});
							}else{
								console.log(result.data);
							}
						}
					});
						return this;
			},
			changeZps : function(obj){
				$.ajax({
					url     : '../changeZps.do'
				,	data    :  {
								uid 	: app.getUid()
							 ,  pPath   : obj.pPath 
							  }
				,   async   : false
				});
			}
		};
});