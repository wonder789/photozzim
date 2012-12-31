$(document).ready(function(){
	loadStudentList();
	$('#saveBtn').click(function(){
		$.ajax({
			url : '../json/student/' + 
						(($('#no').val()!='') ? "update" : "add") + ".json", 
			type : 'post',
			data : {
				no 		: ($('#no')		.val()!='') ? $('#no').val() : 0,
				name 	: $('#name')	.val(),
				tel  	: $('#tel')		.val(),
				age	 	: $('#age')		.val(),
				address : $('#address')	.val(),
				working : $('#working')	.is(":checked"),
			},
			success : function(result){
				if(result.status ==200){
					$('#studentForm')[0].reset();
					loadStudentList();
				}else{
					alert("서버에서 에러발생");
					console.log(result.data);
				}

			}
		});
	});
	$('#delBtn').click(function(){
		$.get('../json/student/delete.json?tel=' + $('#tel').val(),
				function(result){
			if(result.status ==200){
				$('#studentForm')[0].reset();
				loadStudentList();
			}else{
				alert('서버에서 에러발생');
				console.log(result.data);
			}
		});
	});

});
function loadStudentList(){
	$.ajax({
		url : '../json/student/list.json',
		success : function(result){
			$('#studentTable tr:gt(0)').remove();
			$.each(result.data,function(index,student){
				$('#studentTable').append(createTR(student));
			});
			$('#studentTable tr').filter(':odd').addClass('even')
						   .end().filter(':even').addClass('odd');
		}
	});
}
function createTR(student){
	return $('<tr/>').click(function(){
		$.ajax({
			url : '../json/student/' + student.tel + '.json',
			success : function(result){
				if(result.status == 200){
					with(result.data){
						$('#no')	 .val(no);
						$('#name')	 .val(name);
						$('#tel')	 .val(tel);
						$('#address').val(address);
						$('#age')	 .val(age);
						$('#working').attr('checked',working);
					}
				}else{
					alert("서버에서 에러발생");
					console.log(result.data);
				}

			}
		});
		$('#delBtn').removeClass('hidden');
	}).append($('<td/>').text(student.no),
			  $('<td/>').text(student.name),
			  $('<td/>').text(student.tel),
		   	  $('<td/>').text(student.working ? "예" : ""));
}
