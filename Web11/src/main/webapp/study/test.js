var Class = function (){
	var klass = function(){
		this.init.apply( this , arguments );
	};
	klass.prototype.init = function(){};
	
	klass.fn = klass.prototype ;
	
	klass.fn.parent = klass;
	
	klass.extend = function( obj ){
		var extended = obj.extended;
		for(var i in obj){
			klass[i] = obj[i];
		}
		if( extended ) extended( klass );
	};
	
	klass.include = function ( obj ){
		var included = obj.included;
		for(var i in obj){
			klass.fn[i] = obj[i];
		}
		if( included ) included( klass );
	};
	
	return klass;
};