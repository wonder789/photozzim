$(document).ready(function(){
	
		$('.stack2 > img').toggle(function(){
			$(this).attr('src','folder_open.png');
		}, function(){
			$(this).attr('src','folder_close.png');
		
		});
	});

