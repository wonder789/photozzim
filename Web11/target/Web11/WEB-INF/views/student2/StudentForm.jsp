<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href='../student/css/common.css' rel="StyleSheet" type='text/css'>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>학생정보등록</title>
</head>
<body>
<div id='main'>
<h4>학생정보등록</h4><hr noshade>
<form id='StudentForm' action='add.do' method='post'>
이름 : <input type='text' id='name' name='name'><br>
전화 : <input type='text' id='tel' name='tel'><br>
주소 :<br> <textarea id='address' name='address' rows='2' cols='40'></textarea><br>
나이 : <input type='text' id='age' name='age' size='3'><br>
재직 : <input type='checkbox' name='working' id='working' value='true' >재직중<br>
<input type='submit' value='등록'>
<input type='reset' value='취소'><br>
</form>
</div>
</body>
</html>