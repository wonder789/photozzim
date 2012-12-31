requirejs.config({
	baseUrl : '../lib',
	paths    : {
		all       : 'http://connect.facebook.net/en_US/all'
	,	jqueryui  : 'http://code.jquery.com/ui/1.9.2/jquery-ui'
	,   marsony   : 'http://masonry.desandro.com/jquery.masonry.min'
	,	photo     : '../'
	,	main	  : '../main'
	,	view	  : '../view'
	,	model	  : '../model'
	}
});
require(['jquery','main/main_nav','application']
		,function($,nav,app){
	window.app = app;
	console.log(window.app);
	nav.loadProfile(app.getUid());
	$('.p-menu').pMenu();
	$('.a-menu').pMenu();
	require(['main/main_photo'],function($photo){
		$photo.load();
	});
	
	$(window).bind('resize',function(){
		$('.main-container')
			.find('.nav-wrap')
				.width($('.main-container').width() -100 );
		$('[href=#l-menu]')
			.css('left',
					$('.sub-container').position().left + $('.sub-container').width());
	});
	
	require(['main/main_subcon'],function(sub){
		sub.toggleSub({
			target 	  : '[href=#l-menu]'
		,	subenter : function(){
				require(['model/friend'],function($f){
					$f.loadFriendList({
						type : 'create'
					,	async : false
					}).requestFriend();
				});
			}
		})
		.registerEvent();
	});
			   	  
		

	$('.nav-collapse').on('click','[href=#upload]',function(e){
		require(['main/main_upload'],function(upload){
			upload.load(app.getUid());
		});
		e.preventDefault();
	});
	$('.nav-collapse').on('click','[href=#photo]',function(e){
		require(['main/main_photo'],function(photo){
			photo.load(app.getUid());
		});
		e.preventDefault();
	});
});