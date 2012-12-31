var $p = (function(){
	return {
		uid : '',
		accessToken : '',
		createFriendBox : function(friend){
			return $('<div/>').addClass('clearfix')
					.append($('<a/>').attr('href','#f_image').addClass('thumbnail')
					.append($('<img/>').attr('src',$fb.getPicture(friend.id)))
					,$('<a/>').attr('href','#f_name').append(friend.name));
		},
		loadFriendList : function(){
			$.ajax({
				url : 'friend/list.do',
			   data : { uId : this.uid},
				success : function(result){
					if(result.status == 200){
						$.each(result.data,function(index,friend){
							FB.api(friend.fId , function(fb){
								$('#f_modal').find('.modal-body').append($p.createFriendBox(fb));
							});
						});
					}else{
						console.log(result.data);
						alert(result.message);
					}
				}
			});
		},
		eventCancel : function(e){
			var _event = e.originalEvent;
			_event.stopPropagation();
			_event.preventDefault();
		}
	};
})();
