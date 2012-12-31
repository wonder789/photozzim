window.onload = function(){
	loadStudentList();
	addEvent($('#delBtn'),'click', function(){
		requestToAjax({
			method : 'GET',
			url	   :'../json/student/delete.json?tel=' + tel,
			func   : function(){
				location.reload();
			}
		});
	},false);
	addEvent($('#saveBtn'),'click',function(){
		if($('#no').value==''){
			requestToAjax({
				method : 'POST',
				url	   : '../json/student/add.json',
				messageBody : {
					name : $('#name').value,
					tel	 : $('#tel').value,
					address : $('#address').value,
					age		: $('#age').value,
					working : $('#working').checked
					
				},
				func : function(){
					$('#studentForm').reset();
					var trlist = document.getElementsByTagName('tr');
					for(var i=trlist.length -1 ; i > 0 ; i--){
						$('#studentTable').removeChild(trlist[i]);
					}
					loadStudentList();
				}
			});
		}else{
			requestToAjax({
				method : 'POST',
				url	   : 'update.do',
				messageBody : {
					no   : $('#no').value,
					name : $('#name').value,
					tel  : $('#tel').value,
					address : $('#address').value,
					age     : $('#age').value,
					working : $('#working').checked
				},
				func : function(){
					
					location.reload();
				}
			});
		}

	},false);

};
function createTR(student,index){
	var tr = $('tr');
	tr.setAttribute('data-pk',student.tel);
	tr.appendChild(createTD(student.no));
	tr.appendChild(createLinkTD(student.name,student.tel));
	tr.appendChild(createTD(student.tel));
	tr.appendChild(createTD(student.working ? "예" : ""));
	tr.setAttribute('class', (index%2==1)  ? "odd" : "even");
	return tr;
}
function createTD(value){
	var td  = $('td');
	td.innerHTML = value;
	return td;
}
function createLinkTD(name,tel){
	var link = $('a');
	var td   = $('td');
	link.innerHTML = name;
	link.href 	   = '#';
	addEvent(link,'click',function(){
		requestToAjax({
			method : 'GET',
			url	   : '../json/student/' + tel + '.json',
			func   : function(result){
				$('#no').value		  = result.no;
				$('#name').value 	  = result.name;
				$('#tel').value 	  = result.tel;
				$('#age').value 	  = result.age;
				$('#address').value   = result.address;
				$('#working').checked = result.working;
			}
		});
		$('#delBtn').style.visibility = 'visible';
	},false);
	td.appendChild(link);
	return td;
}
function loadStudentList(){
	requestToAjax({
		method : 'GET',
		url	   : '../json/student/list.json',
		func   : function(result){
			result.forEach(function(student,index){
				$('#studentTable').appendChild(createTR(student,index));
			});
		}
	});
}
