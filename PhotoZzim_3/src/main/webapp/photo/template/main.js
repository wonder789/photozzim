requirejs.config({
    baseUrl: 'lib',
    paths: {
        template : '../template'
    }
});
require(['jquery','text!template/photo.html'],function($,html){
	$(document).ready(function(){
		require(['template/photo'],function(photo){
			photo.load();
		});
	});
});