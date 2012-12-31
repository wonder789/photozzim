define( [ 'jquery' ]
	, function( $ ){
	return Backbone.Model.extend({
		initialize : function () {
			this.bind( 'error' , function ( model , error ) {
				console.log( error );
			});
		},
		defaults : {
			   name : '홍길동'
		, 		tel : '111-1111'
		,	address : '수원시'
		},
		validate : function (atts) {
			if( atts.name.length < 3 ) {
				return '이름은 3글자 이상 이어야 합니다.';
			}
		},
		idAttribute : 'tel'
	});
});