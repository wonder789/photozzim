define(['facebook'],function($fb){
	return {
		login : function(){
			$fb.login(function(user){
				$.ajax({
					url  : 'user/add.do'
				  , type : 'POST'
				  , data : { uId : user.id , uName : user.name }
				  , success : function(result){
					  if(result.status === 200){
						  location.href='main/main.html';
					  }else{
						  console.log(result.data);
					  }
				  }
				});
			});
		}
	};
});