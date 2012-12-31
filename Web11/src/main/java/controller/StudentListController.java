package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import dao.StudentDao;
@Controller
@RequestMapping("/student/list")
public class StudentListController  {
	private StudentDao studentDao;
	@Autowired
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	@RequestMapping(method=RequestMethod.GET)
	public String execute(Model model) throws Exception {
	    model.addAttribute("studentList", studentDao.getStudentAll());
		return "student/StudentList";
	}
	
}
