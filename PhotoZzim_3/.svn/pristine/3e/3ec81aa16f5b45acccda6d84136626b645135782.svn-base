var $file= (function(){
	var __files = $([]);	//업로드할 파일배열 
	return {
			getFiles : function(){
				return __files;
			},
			read : function(fileList,callback){
			var _reader =null;
			$.each(fileList,function(index,file){
				_reader = new FileReader();
				var imageType = /image.*/;
				if (file.type.match(imageType)) {
					_reader.onload = function(e){
						if(e.target.readyState == FileReader.DONE){
							callback({
									url  : e.target.result,
									name : file.name
								});
							delete _reader;
						};
					};
				};
				_reader.readAsDataURL(file);
			});	
		},
		
		createThumbNail : function(data){
			return $('<li/>').addClass('span2')
					 .append(
						$('<a/>').attr('href','#').addClass('thumbnail')
							.append(
								$('<img/>').attr({ alt : data.name , src : data.url }).addClass('img-rounded')
							)
						);
		},
		
		
		checkFile : function(e,uid,callback){
			$p.eventCancel(e);
			var inputFiles = null,
				_event = e.originalEvent;
			inputFiles = _event.dataTransfer.files;
			var tempFiles = (inputFiles.constructor == FileList && inputFiles.length > 0 )
														? inputFiles : [inputFiles],
				imageType = /image.*/,
				_fileList = $([]);
			$.each(tempFiles,function(index,file){
				if(file.type){
					if (file.type.match(imageType)) {
						_fileList.push(file);
					}
				}
			});
			if(_fileList.length == 0){
				alert('이미지만 업로드 가능합니다.');
				return true;
			}
				this.read(_fileList,function(data){
					$('.dropbox').find('.thumbnails').append($file.createThumbNail(data));
				});
				
				$.each( _fileList , function(){
					__files.push(this);
				});
		},
		
		
		sendFile : function(fileList,uid,callback) {
			var formData = new FormData();
			console.log(fileList);
			$.each(fileList,function(index,file){
				formData.append('file', file);
			});
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
				url         : 'upload.do',
				data        : formData,
				processData : false,
				contentType : false,          
				success     : function(result) {
					if(result.status == 200){
						alert('업로드가 완료되었습니다.');
						$('.upload-container .progress').find('.bar').addClass('unactive').width(0);
						__files = $([]);
					}else{
						alert(result.message);
						console.log(result.data);
						__files = $([]);
					}
				},
				error       : function(r) { alert('jQuery Error'); }
			});
		},
	
	};
	
})();
$(document).ready(function(){
 $('[href=#upload]').click(function(){
	 $('.main-container').empty();
	 $('.main-container').load('main_upload.html .upload-container',function(){
		 $('.dropbox').bind({
			 drop : function(e){
				 $(this).children('span').fadeOut('slow');
				 $file.checkFile(e,$p.uid);
			 },
			 click     : function(e){
				 $('#fileElem').trigger("click");
			 },
			 dragenter : function(e){ $p.eventCancel(e);	},
			 dragover  : function(e){ $p.eventCancel(e);	}
		 });
		 
		 $('#fileElem').bind({
			 change : function(e){
				 $file.checkFile(this.files,user_id);
			 }
		 });
		 
		 $('#uploadButton').click(function(){
			 $file.sendFile($file.getFiles(),$p.uid);
		 });
		 $('#resetButton').click(function(){
			 files = $([]);
			 $('.thumbnail').remove();
		 });
	 });
 });
	
});
	
