package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import vo.Student;
import dao.StudentDao;
@Controller
public class StudentUpdateController  {
	private StudentDao studentDao;
	@Autowired
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}
	@RequestMapping(value="/student/updateForm",method=RequestMethod.GET)
	public String updateForm(String tel,Model model) throws Exception {
	    model.addAttribute("student", studentDao
											.getStudent(tel));
		return "student/StudentUpdateForm";
	}
	@RequestMapping(value="/student/update",method=RequestMethod.POST)
	public String update(Student student) throws Exception {
	    studentDao.updateStudent(student);
		return "student/StudentResult";
	}
	
}
