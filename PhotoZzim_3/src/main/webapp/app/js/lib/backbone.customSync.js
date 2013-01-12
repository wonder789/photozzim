define( function () {
	Backbone.sync = function ( methods , model , options ) {
		var _ajaxOpt = {};
		console.log( methods ) ;
		switch( methods ) {
			case "read"   : _ajaxOpt = { type : 'GET' , url : model.url + ( model.id ? '/' + model.id  : '' ) + '.json' } ; break;
			case "create" : _ajaxOpt = { type : 'POST' , url : model.url + '/add.json' , data : model.toJSON() } ; break;
			case "update" : _ajaxOpt = { type : 'POST' , url : model.url + '/update.json' , data : model.toJSON() } ; break;
			case "delete" : _ajaxOpt = { type : 'GET' , url : model.url + '/delete.json', data : model.toJSON() } ; break;
		}
		
		$.ajax(
				$.extend(
						_ajaxOpt,{
							success : function( result ){
								if( result.status === 200 ) {
									options.success ( result.data );
								} else {
									console.log ( result.data );
									options.error  ( result.data );
								}
							} ,
							error : function ( result ){
								console.log( 'Ajax Error! ');
								if (options.error) options.error ( result );
							}
						}
				)
		);
	};
});