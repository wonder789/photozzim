define(['jquery','all','bootstrap','facebook','messi'
        ,'jquery.toastmessage','jquery.ui.rcarousel.min','jquery.pMenu'
        ,'jquery.jmslideshow','modernizr.custom.48780','jmpress.min']
	,function($,all,boot,$fb,less,messi){
	var _distance = 50;
	$(window).bind('scroll',function(){
		if($(this).scrollTop() >= _distance){
			$('.main-container .nav-wrap').addClass('subnav-fixed');
		}else if($(this).scrollTop() < _distance){
			$('.main-container .nav-wrap').removeClass('subnav-fixed')
					.width( $('.main-container').width() - 100 );
		}
	});
	$.fn.appendHTML = function(option){
		var $el = $(this);
		$(this).find(':not(' + option.cancel + ')').remove();
		$(option.filter).empty();
		$.ajax({
			url : option.url
		,	success : function(result){
				$el.append(result);
				option.callback();
			}
		});
	}; 
	Array.prototype.remove=function(i){this.splice(i,1);};
	return {
		UPLOAD_PATH : '../../upload/photo/',
		preventScroll : function(target){
			$(target).mouseenter(function(){
				$(document.body).css('overflow','hidden');
			}).mouseleave(function(){
				$(document.body).css('overflow','auto');
			});
		},
		getUid : function(){
			return sessionStorage.getItem('uid');
		},
		getToken : function(){
			return sessionStorage.getItem('token');
		},
		getuName : function(){
			return sessionStorage.getItem('uName');
		},
		eventCancel : function(e){
			e = e.originalEvent;
			e.stopPropagation();
			e.preventDefault();
		},
		setDistance : function(distance){
			_distance = distance;
		},
		clear : function(_type){
			_type = _type || 'main';
				if(_type === 'main')
					$('.main-container')
						.children(':not(.nav-wrap)')
						.remove();
				else if(_type === 'photo')
					$('.main-container')
						.find('.photo-container .thumbnails')
						.empty()
						.end().find('.group-container,#myPage')
						.remove();
				else if(_type === 'group')
					$('.main-container')
						.find('.group-container #m-container,.photo-container .thumbnails')
						.empty();
				else if(_type === 'mypage')
					$('.main-container')
						.find('#myPage,.photo-container .thumbnails')
						.empty();
					
		},
		getOriginalPath : function(path){
			return path
					.replace('../../upload/photo/','')
					.replace('_thumb','');
		},
		getThumbPath  :function(path){
			return '../../upload/photo/' +  path.substring(0,path.lastIndexOf('.')) + '_thumb' 
			+path.substring(path.lastIndexOf('.'));
		},
		toast : function(type,text){
			$().toastmessage('showToast', {
				text     : text,
			    sticky   : false,
			    type     : type,
			});
		},
		generatePages : function() {
			$('#pages').empty();
		    var _total, i, _link;
		    
		    _total = $( "#carousel" ).rcarousel( "getTotalPages" ) / 3;
		    
		    for ( i = 0; i < _total; i++ ) {
			    _link = $( "<a href='#'></a>" );
			    
			    $(_link)
				    .bind("click", {page: i * 3 + 1},
					    function( event ) {
						    $( "#carousel" ).rcarousel( "goToPage", event.data.page );
						    event.preventDefault();
					    }
				    )
				    .addClass( "bullet off" )
				    .appendTo( "#pages" );
		    }
		    
		    // mark first page as active
		    $( "a:eq(0)", "#pages" )
			    .removeClass( "off" )
			    .addClass( "on" );

	    },
	    pageLoaded : function ( event, data ) {
		    $( "a.on", "#pages" )
			    .removeClass( "on" );

		    $( "a", "#pages" )
			    .eq( ( data.page / 3 ))
			    .addClass( "on" );
	    }
	};
});