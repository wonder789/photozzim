function query(value){
	if(value.charAt(0) == '#'){
		return document.getElementById(value.substring(1));	
	}else{
		return document.createElement(value);
	}
}
var $ = query;
