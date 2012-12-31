package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import dao.StudentDao;
@Controller
@RequestMapping("/student")
public class StudentDetailController {
	private StudentDao studentDao;
	@Autowired
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}
	@RequestMapping(value="{tel}",method=RequestMethod.GET)
	public String detail(@PathVariable String tel,Model model) throws Exception{
		model.addAttribute("student",studentDao
									.getStudent(tel));
		return "student/StudentDetail";
	}
}
