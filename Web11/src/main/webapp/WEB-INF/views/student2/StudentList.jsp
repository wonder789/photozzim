<%@page import="vo.Student"%>
<%@page import="java.util.Collection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href='../student/css/common.css' rel="StyleSheet" type='text/css'>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>학생 리스트</title>
</head>
<body>
<div id='main'>
<h1>학생목록</h1>
<a href=add.do>[신규]</a><br>
<hr>
<c:forEach var='student' items='${studentList}'>
<a href='./${student.tel}.do'>${student.name}</a>
${student.tel},${student.address},${student.age},${student.working }<br>
</c:forEach>

</div>
</body>
</html>