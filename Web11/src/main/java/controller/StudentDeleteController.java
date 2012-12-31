package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import dao.StudentDao;
@Controller
public class StudentDeleteController {
	private StudentDao studentDao;
	@Autowired
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}
	@RequestMapping(value="/student/delete",method=RequestMethod.GET)
	public String detail(String tel,Model model) throws Exception{
		studentDao.removeStudent(tel);
		return "student/StudentResult";
	}
	
}
