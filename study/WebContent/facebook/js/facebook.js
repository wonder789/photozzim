var fbAccessToken = ''; 
$(document).ready(function(){
	$('#getFrendList').click(function(){
//		$.getJSON(
//			'https://graph.facebook.com/me/friends?access_token=' + 
//				fbAccessToken ,function(result){
//				$.each(result.data,function(index,element){
//					$('#frendList').append($('<tr/>').append($('<td/>').text(element.name)));
//				});
//			}
//		);
		$.ajax({
			url : 'https://graph.facebook.com/me/friends?access_token=' + 
				fbAccessToken,
			type : 'get',
			dataType : 'jsonp',
			success : function(result){
				$.each(result.data,function(index,element){
					$('#frendList').append($('<tr/>').append($('<td/>').text(element.name)));
				});
			}
		});
	});
	function result(result){
		$('#frendList').append($('<tr/>').append($('<td/>').text(result.data.name)));
	}
	window.fbAsyncInit = function() {
		// init the FB JS SDK
		FB.init({
			appId      : '378705195547082', // App ID from the App Dashboard
			status     : true, // check the login status upon init?
			cookie     : true, // set sessions cookies to allow your server to access the session?
			xfbml      : true , // parse XFBML tags on this page?
			oauth		: true
		});
		// Additional initialization code such as adding Event Listeners goes here
	};

	$('#login').click(function(){
		 FB.login(function(response) {
			   if (response.authResponse) {
			     console.log('Welcome!  Fetching your information.... ');
			     	fbAccessToken = response.authResponse.accessToken; 
			     FB.api('/me', function(response) {
			       console.log('Good to see you, ' + response.name + '.');
			       getMyProfile();
			     });
			   } else {
			     console.log('User cancelled login or did not fully authorize.');
			   }
			 },{scope: "user_about_me,publish_stream,read_friendlists,offline_access,email,user_birthday"} 
			);
	});
	function getMyProfile(){
	
		FB.api('/me/picture?type=large',function(data){
			$('#profile').append($('<img/>').attr('src',data.data.url));
		});
		FB.api('/me',function(user){
			$("#profile").text(function(index,text){
				return text + "이름 : " + user.name + 
						"아이디 : " + user.id + "," + user.gender ;
			});			
		});
		}
	
});