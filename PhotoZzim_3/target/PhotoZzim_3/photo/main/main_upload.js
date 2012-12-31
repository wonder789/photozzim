define(['jquery','base','file','model/group','text!view/main_upload.html','text!view/main_uploadmodal.html'],
		function($,base,$file,$g,template,modal_temple){
	//base.loadTemplate('.main-container'˙,template,$file.checkFile());
	return {
		load : function(){
			$('.main-container').empty();
			if($('.main-container').hasClass('ui-selectable'))
				$('.main-container').selectable('destroy');
			$('.main-container').append(template)
				.find('.dropbox').bind({
					drop : function(e){
						$(this).find('span').fadeOut('slow');
						$file.checkFile(e,app.getUid());
					},
					click : function(e){
						$('#fileElem').trigger('click');
					},
					dragenter : function(e){ app.eventCancel(e);}
					,
					dragover  : function(e){ app.eventCancel(e);}
				})
					.find('#fileElem').bind({
						change : function(e){
							$(this).parent().find('span').fadeOut('slow');
							 $file.checkFile(this.files,app.getUid());
						},
						click : function(e){
							e.stopPropagation();
						}
					});
			 $('#uploadButton').click(function(){
				 if($('.thumbnails').children().length > 0){
					 $file.sendFile($file.getFiles(),app.getUid());
				 }else{
					 app.toast('warning','파일 지정 후 가능합니다.');
				 }
			 });
			 
			 
			 //업로드 및 그룹공유
			 var createMspan = function(target){
					$('.namebox').append(
							$('<span/>').addClass('label entypo').text($(target).text())
							.append($('<a/>',{href : '#m_del'}).html(function(i,html){
								return html +  '&#10060';
							})
						)
					);
				};
			 $('#g_photoadd').on('click','[href=#group]',function(){
				 $(this).addClass('exist').removeAttr('href');
				 createMspan(this);
			 }).on('click','[href=#m_del]',function(e){
					var _this = $(this).parents('span');
					if($(this).parents('#g_photoadd').size())
						$('.groupList a').each(function(){
							if($(this).text() === $(_this).text().substr(0,$(_this).text().length - 1)){
								$(this).attr('href','#group').removeClass('exist');
							}
						});

					$(this).parents('span').remove();
					e.preventDefault();
				}).on('click','[href=#g_photoadd]',function(e){
					var spanArr = $('.modal-body').find('.namebox span');
					var gidArr = new Array();
					
					spanArr.each(function(){
						gidArr.push($g.getGid($(this).val().substr(0,$(this).text().length - 1) || $(this).text().substr(0,$(this).text().length - 1)));
					});
					console.log(gidArr);
					$file.sendFile($file.getFiles(),app.getUid(),gidArr);
					$('#g_photoadd').hide();
					e.preventDefault();
				}).on('click','[href=#g_photoclose]',function(){
					$('#g_photoadd').modal('hide');
				});
			 
			 
			 $('#uploadGroupButton').click(function(){
				 if($('.thumbnails').children().length > 0){
					 $('.groupList').empty();
					 $('.namebox').empty();
					 $g.loadGroupList({type:'storage'});
					 base.loadTemplate('.groupList',modal_temple,$g.getGroupList);
					 $('#g_photoadd').modal('show');
				 }else{
					 app.toast('warning','파일 지정 후 가능합니다.');
				 }
			 });
			 $('#resetButton').click(function(){
				 $file.clearFiles();
				 $('.thumbnails').empty();
			 });
				
		}
	};
});
