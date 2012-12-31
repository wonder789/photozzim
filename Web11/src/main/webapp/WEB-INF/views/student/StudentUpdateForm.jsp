<%@page import="vo.Student"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href='../student/css/common.css' rel="StyleSheet" type='text/css'>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>학생 정보 변경</title>
</head>
<body>
<div id='main'>
<h1>학생 정보 변경</h1><br><hr noshade>
<form id='studentForm' name='studentForm' method='post' action='update.do'>
<input type='hidden' name='no' value='${student.no }'>
이름 : <input type='text' name='name' id='name' value='${student.name }'><br>
전화 : <input type='text' name='tel' id='tel' value='${student.tel}'><br>
주소 : <textarea rows='2' cols='40' id='address' name='address'>${student.address }</textarea><br>
나이 : <input type='text' name='age' id='age' value='${student.age }'><br>
재직 : <input type='checkbox' name='working' id='working'
		${student.working ? "checked" : "" }><br>
<input type='submit' value='변경'>
<input type='reset' value='초기화'>
</form>
</div>
</body>
</html>