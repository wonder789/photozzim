define(['jquery','base','text!view/main_uploadthumb.html'],function($,base,template){
	var __files = $([]);	//업로드할 파일배열 
	return {
			getFiles : function(){
				return __files;
			},
			clearFiles : function(){
				__files = $([]);
				return this;
			},
			read : function(fileList,callback){
				var _reader =null
				 ,  _imageList = [];
				$.each( fileList,function(index,file){
					_reader = new FileReader();
					var imageType = /image.*/;
					if (file.type.match(imageType)) {
						_reader.onload = function(e){
							if(e.target.readyState == FileReader.DONE){
								_imageList.push({
									url  : e.target.result,
									name : file.name
								});
							delete _reader;
							if(index === fileList.length -1 )
								callback(_imageList);
							};
						};
					};
				_reader.readAsDataURL(file);
				});	   
		},
		checkFile : function(e,uid){
			if(e.constructor == FileList){
				inputFiles = e;
			}else{
				app.eventCancel(e);
				var inputFiles = null,
					_event = e.originalEvent;
				inputFiles = _event.dataTransfer.files;
			}
			var tempFiles = (inputFiles.constructor == FileList && inputFiles.length > 0 )
														? inputFiles : [inputFiles],
				imageType = /image.*/,
				_imageList = [],
				_fileList = $([]);
			$.each(tempFiles,function(index,file){
				if(file.type){
					if (file.type.match(imageType)) {
						_fileList.push(file);
					}
				}                                                                      
			}); 
			if(_fileList.length == 0){
				app.toast('error','이미지만 업로드 가능합니다.');
				return true;
			}
			$.each( _fileList , function(){
				__files.push(this);
			});
				this.read(_fileList,function(imageList){
					base.loadTemplate('.dropbox .thumbnails',template,{data : imageList});
				});
		},
				
		
		
		sendFile : function(fileList,uid,gids,callback) {
			var formData = new FormData();
			console.log(fileList);
			$.each(fileList,function(index,file){
				formData.append('file', file);
			});
			if(gids){
				$.each(gids,function(index,gid){
					formData.append('gid', gid);
				});
			}
			formData.append('uid',uid);
			$('.upload-container .progress').find('.bar').addClass('unactive').width(0);
			$.ajax({
				xhr : function(){
					var xhr = jQuery.ajaxSettings.xhr();
					xhr.upload.addEventListener('progress',function(event){
						if(event.lengthComputable){
							var percent = Math.round((event.loaded * 100) /event.total);
							$('.upload-container .progress').find('.bar').removeClass('unactive').width(percent + '%');
						}
					},false);
					return xhr;
				},	
				type        : 'POST',
				url         : '../upload.do',
				data        : formData,
				processData : false,
				contentType : false,          
				success     : function(result) {
					if(result.status == 200){
						app.toast('success','업로드가 완료되었습니다.');
						$('.upload-container .progress').find('.bar').addClass('unactive').width(0);
						__files = $([]);
					}else{
						alert(result.message);
						console.log(result.data);
						__files = $([]);
					}
				},
				error       : function(r) { app.toast('error','jQuery Error'); }
			});
		},
	
	};

});