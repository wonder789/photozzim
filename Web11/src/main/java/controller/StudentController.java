package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import service.StudentService;
import vo.Student;
@Controller
@RequestMapping("/student2")
public class StudentController {
	private StudentService studentService;
	
	@Required
	@Autowired
	public void setStudentService(StudentService studentService) {
		this.studentService = studentService;
	}

	
	@RequestMapping(value="add",method=RequestMethod.POST)
	public String add(Student student,Model model) throws Exception{
		studentService.addStudent(student);
		return "student2/StudentResult";
	}
	@RequestMapping(value="add",method=RequestMethod.GET)
	public String form(Student student,Model model) throws Exception{
		return "student2/StudentForm";
	}
	@RequestMapping(value="list",method=RequestMethod.GET)
	public String execute(Model model) throws Exception {
		model.addAttribute("studentList", studentService
				.getStudentList());
		return "student2/StudentList";
	}

	@RequestMapping("{tel}")
	public String detail(@PathVariable String tel,Model model) throws Exception{
		model.addAttribute("student",studentService
				.getStudent(tel));
		return "student2/StudentDetail";
	}

	@RequestMapping(value="update",method=RequestMethod.GET)
	public String updateForm(String tel,Model model) throws Exception {
		model.addAttribute("student", studentService
				.getStudent(tel));
		return "student2/StudentUpdateForm";
	}
	@RequestMapping(value="update",method=RequestMethod.POST)
	public String update(Student student) throws Exception {
		studentService.changeStudent(student);
		return "student2/StudentResult";
	}
	@RequestMapping(value="delete",method=RequestMethod.GET)
	public String delete(String tel,Model model) throws Exception{
		studentService.removeStudent(tel);
		return "student2/StudentResult";
	}

}
