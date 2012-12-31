<%@page import="vo.Student"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href='../student/css/common.css' rel="StyleSheet" type='text/css'>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>학생 상세 정보</title>
</head>
<body>
<div id='main'>
<h1>학생 상세 정보</h1><hr noshade>

이름 : ${student.name }<br>
전화 : ${student.tel }<br>
주소 : ${student.address }<br>
나이 : ${student.age }<br>
재직 : ${student.working ? "재직중" : "" }<br>
<a href='update.do?tel=${student.tel }'>[변경]</a>
<a href='delete.do?tel=${student.tel }'>[삭제]</a>
</div>
</body>
</html>