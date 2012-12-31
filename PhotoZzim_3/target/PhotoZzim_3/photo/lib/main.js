$p.uid = $.cookie('uid');
$p.accessToken = $.cookie('access_token');
$(document).ready(function(){
	FB.api($p.uid,function(user){
		$('.profile').find('img').attr('src',$fb.getPicture($p.uid))
			   .end().find('li > a').text(user.name);
		$('.dropdown-toggle').append(user.name)
							.find('img').attr('src',$fb.getPicture($p.uid));
	});
	$p.loadFriendList();
});