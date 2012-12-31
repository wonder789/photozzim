<%@page import="org.springframework.web.multipart.MultipartFile"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>스트럿츠 업로드</title>
</head>
<body>
제목 : ${title }<br>
파일1 :	 ${file1.originalFilename },${file1.size },${file1.contentType }<br>
파일2 : ${file2.originalFilename },${file2.size },${file2.contentType }<br>
<img src='${file1.originalFilename }'>	<br>
<img src='${file2.originalFilename }'>
</body>
</html>