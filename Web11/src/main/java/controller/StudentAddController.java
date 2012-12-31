package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import vo.Student;


import dao.StudentDao;
@Controller
public class StudentAddController {
	private StudentDao studentDao;
	@Autowired
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}
	@RequestMapping(value="/student/add",method=RequestMethod.POST)
	public String add(Student student,Model model) throws Exception{
		studentDao.addStudent(student);
		return "student/StudentResult";
	}
	@RequestMapping(value="/student/form",method=RequestMethod.GET)
	public String form(Student student,Model model) throws Exception{
		return "student/StudentForm";
	}
}
