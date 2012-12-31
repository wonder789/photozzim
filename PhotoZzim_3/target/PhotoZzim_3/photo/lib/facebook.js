define(['jquery','all'],function($,fb){
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
			js.src = "//tabletr.herokuapp.com/js/all.js";
			ref.parentNode.insertBefore(js, ref);
		},
		login : function(callback){
			this.init(document);
			FB.login(function(response) {
				if (response.authResponse) {
					access_token = response.authResponse.accessToken;
					FB.api('/me', function(user) {
						sessionStorage.clear();
						sessionStorage.setItem('uid',user.id);
						sessionStorage.setItem('token',access_token);
						sessionStorage.setItem('uName',user.name);
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
	
	 