define(["jquery", "handlebars"], function($, handlebar) {
	Handlebars.registerHelper('getPath', function(context){
				return '../upload/photo/' +  context.pPath.substring(0,context.pPath.lastIndexOf('.')) + '_thumb' 
					+context.pPath.substring(context.pPath.lastIndexOf('.'));
	}); 
	Handlebars.registerHelper('dateCheck',function(type,options){
		if(type === 'day')
			return	options.fn(this);	 //true
		else if(type === 'spread')
			return options.inverse(this);
		else if(type === 'detail')
			return options.inverse(this); 	//false
		else if(type === 'group')
			return options.inverse(this); 	//false
		else if(type === 'user')
			return options.inverse(this);
	});
	Handlebars.registerHelper('idCheck',function(uid,options){
		if(app.getUid() === uid){
			return options.inverse(this);
		}else{
			return options.fn(this);
		}
	});
	Handlebars.registerHelper('fPsCheck',function(fPs,options){
		if( fPs === 1){
			return options.inverse(this);
		}else{
			return options.fn(this);
		}
	});
	return {
		loadTemplate: function(target, template, context ,type) {
			type = type || 'next';
			var templateEngine = Handlebars.compile(template);
			var result = templateEngine(context);
			type == 'prev' ? $(target).prepend(result) : $(target).append(result);
			return $(target);
		}
	};
});


