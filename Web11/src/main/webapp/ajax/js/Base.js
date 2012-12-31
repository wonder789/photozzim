function query(value){
	if(value.charAt(0)=='#')
		return document.getElementById(value.substring(1));
	else
		return document.createElement(value);
}
var $ = query;
function requestToAjax(data){	
	var xhr = createRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4  && xhr.status == 200){ 
			var result = JSON.parse(xhr.responseText);
			if(result.status == 200 )	//success
				data.func(result.data);
			else	// error
				alert("서버에서 에러 발생");
				console.log(result.data);
		}
	};
	if(data.method=='GET'){
		xhr.open(data.method,data.url,true);
		xhr.send();
	}else{
		xhr.open(data.method,data.url,true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send(toQueryString(data.messageBody));
	}
}
function addEvent(element,eventName,callback,useCapture){
	if(element.attachEvent){
		element.attachEvent('on' + eventName,callback);
	}else{
		element.addEventListener(eventName,callback,useCapture);
	}
}
function createRequest() {
	try {
		return new XMLHttpRequest();
	} catch (tryMS) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (otherMS) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch (failed) {
				return null;
			}
		}
	}	
}
function toQueryString(data){
	var result = '';
	for(var key in data){
		result+= "&" + key + '=' + encodeURIComponent(data[key]) ;
	}
	return result.substring(1);
}