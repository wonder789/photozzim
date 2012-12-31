(function($,w){
	var canvas = {};
	var isEvent = true,
		_isEvent = true;
    var cavutil = {
    		cornersvisible : false,
      init: function(initObj) {
        canvas = new Canvas.Element();
        canvas.init(initObj.canvasId, { width : initObj.width, height: initObj.height });
        cavutil.initEvents();
      },
      initEvents: function() {
    	  var _this = this;
    	  if(!isEvent)
    		  return true;
    	 // $('.a-menu').on('click','[href=#toggleBg]',_this.toggleBg);
    	  $('.a-menu').on('click','[href=#corner]',function(){
    		  _this.cornersvisible = (_this.cornersvisible) ? false : true;
    	        _this.modifyImages(function(image) {
    	          image.setCornersVisibility(_this.cornersvisible);
    	        });
    	  });
    	  $('.a-menu [href=#simple]').click(function(){
    		  _this.modifyImages(function(image) {
    	          image.setBorderVisibility(true);
    	        });
    	  });
    	  $('.a-menu [href=#none]').click(function(){
    		  _this.modifyImages(function(image) {
    	          image.setBorderVisibility(false);
    	        });
    	  });
    	  $('.a-menu [href=#polaroid]').click(function(){
    	        _this.modifyImages(function(image) {
    	            image.setPolaroidVisibility(true);
    	          });
    	  });
    	  $('.a-menu [href=#repaint]').click(function(){
    		  console.log(canvas._aImages);
    		  canvas._aImages = null;
    		 canvas.renderAll(false); 
    	  });
    	  $('#pngbutton').click(function(){
  	        _this.convertTo('png');
    	  });
    	  $('.a-menu [href=#save]').click(function(){
    	      require([ 'model/album' ],
    	    		  function($a){
    	    	  var _imageArray = [];
    	    	  $.each( canvas._aImages ,function () { 
    	    		 _imageArray.push(cavutil.toImgString(this));
    	    	  });
    	    	  _imageArray.push(cavutil.toImgString(canvas._backgroundImg));
    	    	  console.log($a.getAlbum($('#a-title').val()).aId);
        	    	  $a.createAlbum({
        	    		  title 	 : $('#a-title').val()
        	    		, aId        : $('#img-root').attr('data-pk')
        	    		, canvasData : cavutil.convertTo('jpeg')
        	    		, apData     : JSON.stringify(_imageArray)
        	    		, type       : $a.type
        	    		, callback   : function(){
        	    			require(['main/main_album'],
        	    					function($ac){
        	    				$ac.refreshList();
        	    				$('#a-label').addClass('none');
        	    				$('.a-nav').removeClass('none');
        	    			});
        	    		}
        	    	  });
    	    	  
    	      }); 
      	  });
    	  $('.a-menu [href=#undo]').click(function(){
    		 canvas._aImages.remove(canvas._aImages.length - 1);
    		 canvas.renderAll(false);
    	  });
    	  isEvent = false;
      },
      switchBg: function() {
        canvas.fillBackground = (canvas.fillBackground) ? false : true;              
        canvas.renderAll();
      },
      modifyImages: function(fn) {
        for (var i = 0, l = canvas._aImages.length; i < l; i += 1) {
          fn.call(this, canvas._aImages[i]);
        }
        canvas.renderAll(false);
      },
      convertTo: function(format) {
        return canvas.canvasTo(format);
      }
      ,
      toImgString : function(canvasImg){
    		var _propArr = []
    		 ,  _src     =''
    		 ,  _id      ='';
    		for(var key in canvasImg){
    			if( key === '_oElement'){
    				_src = $(canvasImg[key]).attr('src') ;
    				_id  = $(canvasImg[key]).attr('id');
    				continue;
    			} else if ( key === 'oCoords'){
    				var _obj = canvasImg[key];
    				for(var k in _obj){
    					_propArr.push(k);
    					for(var j in _obj[k]){
    						_propArr.push(j);
    					}
    				}
    			}
    			_propArr.push(key);
    		};
    		return  JSON.stringify(
    				{
    					dom : {id : _id ,src : _src}
    				,  value : JSON.parse(JSON.stringify(canvasImg,_propArr))
    				}
    		);
    	}
    };
  
    $.fn.cAlbum = function(options){
    	var localSettings = {
    		 	bgImage       :  ''
        ,      itemSelector   : ''
        ,      canvasWidth    : 700
        ,      canvasHeight   : 300
    	};
    	$.extend(localSettings,options);
    	
    	cavutil.init({
    		canvasId : $(this).attr('id')
    	,   width    : localSettings.canvasWidth
    	,  height    : localSettings.canvasHeight
    	});
    	registerEvent(localSettings.itemSelector);
    	
    	function registerEvent(itemSelector){
    		if(!_isEvent)
    			return true;
    		$('.album-list').on('click',itemSelector,function(){
    			canvas.addImage(toCanvasImage($(this).attr('id')));
    		});
    		$('.album-list').on('click','#bgthumb img',function(){
    			$('#bg').remove();
    			canvas.setCanvasBackground(toCanvasImage('bg',$(this).attr('data-org')));
    			console.log(canvas._backgroundImg);
    		});
    		_isEvent = false;
    	}
    	
    	
    	function toCanvasImage(id,path){
    		var _id = '';
    		if(path){
    			$('<img/>',{ id : id , src : path}).appendTo('#img-root');
    			_id = id;
    		}else{
    			 $('#' + id).clone().attr({
    				src :function(){
    					return '../../upload/photo/' + app.getOriginalPath($(this).attr('src'));
    				},
    				id : id + 'org'
    			}).appendTo('#img-root');
    			 _id = id ;
    		}
    		return new Canvas.Img(_id , {
    			top : Math.floor( (Math.random() * ($('#albumCanvas').height() - 200) + 100 ) ) + 'px'
    		  , left : Math.floor( (Math.random() * ($('#albumCanvas').width() - 200) + 100 ) ) + 'px'
    		});
    	}
    	return canvas;
    };
})(jQuery,window);
