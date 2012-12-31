$(document).ready(function(){
	for(var i=0;i<21;i++){
		$('<div/>').addClass('ui-widget-content ui-corner-all item')
			.append($('<img/>').attr("src", i + '.png')).appendTo('#wrap');
	}
	$('#wrap > div').draggable({
		helper : 'clone',
		zIndex : 100,
		scroll : false
	});
	
	$('#dock').draggable({
		accept : '#wrap > div',
		drop : function(event,ui){
			$(ui.draggable).fadeOut(function(){
				$(this).appendTo('#dock').fadeIn();
			});
		}
	});
	$('body').draggable({
		accept : '#dock > div',
		drop : function(event,ui){
			$(ui.draggable).fadeOut(function(){
				$(this).appendTo('#wrap').fadeIn();
			});
		}
	});
});