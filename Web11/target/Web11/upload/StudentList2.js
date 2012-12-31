$(document).ready(function(){
	loadStudentList();
	$('#saveBtn').click(function(){
		$.ajax({
			type : 'POST',
			url  : '../json/student/add.json',
			data :{
				name    : $('#name').val(),
				tel     : $('#tel').val(),
				age     : $('#age').val(),
				address : $('#address').val(),
				working : $('#working').is(':checked')
			},
			success : function(result){
				statusCheck({
					status : result.status,
					func   : function(){
						init();
					}
				});
			}
		});
	});
	$('#delBtn').click(function(){
		$.ajax({
			url : '../json/student/delete.json?tel=' + $('#tel').val(),
			success : function(result){
				statusCheck({
					status : result.status,
					func   : function(){
						init();
					}
				});
			}
		});
	});
});
function createTR(student){
	return $('<tr/>').append($('<td/>').text(student.no),
			createLinkTD(student),
			$('<td/>').text(student.tel),
			$('<td/>').text(student.working ? "예" : ""));
}
function createLinkTD(student){
	return $('<td/>').append($('<a/>').attr({
		pk : student.tel,
		href : '#'
	}).text(student.name)
	.bind('click',function(){
		$.ajax({
			url : '../json/student/' + student.tel+ '.json',
			success : function(result){
				statusCheck({
					status : result.status,
					func   : function(){
						$('#no').val(result.data.no);
						$('#name').val(result.data.name);
						$('#tel').val(result.data.tel);
						$('#address').val(result.data.address);
						$('#age').val(result.data.age);
						$('#working').attr('checked',result.data.working);
						$('#delBtn').toggleClass('hidden');
					}
				});
			}
		});
	}));
}
function loadStudentList(){
	$.ajax({
		url : '../json/student/list.json',
		success : function(result){
			statusCheck({
				status : result.status,
				func   : function(){
					$('#studentTable tr').filter(function(index){
						return index!=0;
					}).remove();
					//$('#studentTable tr:gt(0)').remove();
					$.each(result.data,function(index,student){
						$('#studentTable').append(createTR(student));
					});
					$('#studentTable tr').filter(":even").addClass('odd')
					.		    end().filter(":odd").addClass('even');
				}
			});
		}
	});
}
function statusCheck(data){
	if(data.status==200){
		data.func();
	}else{
		alert('서버에서 오류가 발생하였습니다.');
		console.log(result.data);
	}
}
function init(){
	$('#working').val('');
	$('#studentForm')[0].reset();
	loadStudentList();
}