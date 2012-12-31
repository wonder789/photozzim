var positionRow = 0;
window.onload =  function(){
	$('#4443').onclick = function(event){
		createPosition(event);
	};
	$('#555').onclick = function(event){
		createPosition(event);
	};
};
function createPosition(event){
	var content = $('#' + $('#selectTime').value);
	content.innerHTML = '';
	var arrPosition = createPositionArray(event.target.id);
	positinoRow = event.target.id.length;
	var textCount = 1;
	 for(var i in arrPosition){
		 content.innerHTML += (parseInt(i) +1)  + '조';
		 for(var j = 0 ; j < arrPosition[i] ; j++){
			 content.appendChild(createText(content.id,textCount++));
		 }
		 content.innerHTML+= '<br>';
		 
	 }
	 content.appendChild(createButton(function(){
	 }));
}
function createPositionArray(text){
	var tempArr = new Array();
	for(var i in text){
		tempArr.push(text.charAt(i));
	};
	return tempArr;
}
function createText(p_id,id){
	var temp = $('input');
	 temp.type='text';
	 temp.id  = (p_id == 'now')  ? id : 's' + id;
	 temp.size = 5;
	 return temp;
}
function createButton(func){
	var tempBtn = $('input');
	tempBtn.type='button';
	tempBtn.id = 'shuffle';
	tempBtn.value = 'Shuffle';
	tempBtn.onclick = func;
	return tempBtn;
}
function Shuffle(){
	
}
