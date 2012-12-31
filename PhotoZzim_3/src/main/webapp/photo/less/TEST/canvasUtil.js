(function($){
	var canvas = {};
    var cavutil = {
    		cornersvisible : false,
      init: function(canvasId) {
        canvas = new Canvas.Element();
        canvas.init(canvasId, { width: $(window).width()  , height: $(window).height()  });
        
        
      },
      initEvents: function() {
    	  var _this = this;
    	  $('#togglebg').click(this.toggleBg);
    	  $('#showcorners').click(function(){
    		  _this.cornersvisible = (_this.cornersvisible) ? false : true;
    	        _this.modifyImages(function(image) {
    	          image.setCornersVisibility(_this.cornersvisible);
    	        });
    	  });
    	  $('#toggleborders').click(function(){
    		  _this.modifyImages(function(image) {
    	          image.setBorderVisibility(true);
    	        });
    	  });
    	  $('#togglenone').click(function(){
    		  _this.modifyImages(function(image) {
    	          image.setBorderVisibility(false);
    	        });
    	  });
    	  $('#togglepolaroid').click(function(){
    	        _this.modifyImages(function(image) {
    	            image.setPolaroidVisibility(true);
    	          });
    	  });
    	  $('#pngbutton').click(function(){
  	        _this.convertTo('png');
    	  });
    	  $('#jpegbutton').click(function(){
    	        _this.convertTo('jpeg');
      	  });
      },
      switchBg: function() {
        canvas.fillBackground = (canvas.fillBackground) ? false : true;              
        canvas.renderAll();
      },
      modifyImages: function(fn) {
        for (var i = 0, l = canvas._aImages.length; i < l; i += 1) {
          fn.call(this, canvas._aImages[i]);
        }
        //canvas.renderAll(false);
      },
      convertTo: function(format) {
        var imgData = canvas.canvasTo(format);
        window.open(imgData, "_blank");
      }
    };
  
    $.fn.cAlbum = function(options){
    	var localSettings = {
    		 	bgImage       :  ''
        ,      itemSelector   : ''
    	};
    	$.extend(localSettings,options);
    	
    	cavutil.init($(this).attr('id'));
    	canvas.setCanvasBackground(toCanvasImage('bg',localSettings.bgImage));
    	registerEvent(localSettings.itemSelector);
    	
    	function registerEvent(itemSelector){
    		$(document).on('click',itemSelector,function(){
    			canvas.addImage(toCanvasImage($(this).attr('id'), $(this).attr('src')));
    		});
    	}
    	
    	
    	function toCanvasImage(id,path){
    		$(document.body).append($('<img/>',{ id : id , src : path }));
    		return new Canvas.Img(id , { top : '100px'});
    	}
    	
    };
    
})(jQuery);
