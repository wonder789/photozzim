define(['jquery'],function($){
	return {
		init : function(d){
			FB.init({
				appId      : '444114382292970', // App ID
				status     : true, // check login status
				cookie     : true, // enable cookies to allow the server to access the session
				xfbml      : true  // parse XFBML
			});
			var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement('script'); js.id = id; js.async = false;
			js.src = "//connect.facebook.net/en_US/all.js";
			ref.parentNode.insertBefore(js, ref);
		},
		login : function(callback){
			this.init(document);
			FB.login(function(response) {
				if (response.authResponse) {
					access_token = response.authResponse.accessToken;
					FB.api('/me', function(user) {
						callback(user);
					});
				} else {
					console.log("error");
				}
			});
		},
		logout : function(callback){
			FB.logout(function(response){
				console.log(response);
			});
		}
	};
});
	
	 