package json;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import vo.ActionResult;
import vo.Student;

import com.google.gson.Gson;

import dao.StudentDao;
@Controller
@RequestMapping("/json/student")
public class StudentController {
private StudentDao studentDao;

	@Autowired
	public void setStudentDao(StudentDao studentDao) {
	this.studentDao = studentDao;
}
	@RequestMapping(value="add",method=RequestMethod.POST)
	@ResponseBody
	public ActionResult add(Student student) throws Exception{
		try{
			studentDao.addStudent(student);
			return new ActionResult().setStatus(ActionResult.SUCCESS);
		}catch(Exception e){
			return new ActionResult().setData(e.toString())
									  .setStatus(ActionResult.FAILURE);
		}
	}
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public ActionResult list() throws Exception {
		try{
			return new ActionResult().setData(studentDao.getStudentAll())
								  .setStatus(ActionResult.SUCCESS);
		}catch(Exception e){
			return new ActionResult().setData(e.toString())
									  .setStatus(ActionResult.FAILURE);
		}
	}
	
	@RequestMapping("{no}")
	@ResponseBody
	public ActionResult detail(@PathVariable String no) throws Exception{
		try{
			return new ActionResult().setData(studentDao.getStudent(no))
								  .setStatus(ActionResult.SUCCESS);
		}catch(Exception e){
			return new ActionResult().setData(e.toString())
									  .setStatus(ActionResult.FAILURE);
		}
	}
	
	@RequestMapping(value="update",method=RequestMethod.POST)
	@ResponseBody
	public ActionResult update( Student student) throws Exception {
		try{
			studentDao.updateStudent(student);
			return new ActionResult().setStatus(ActionResult.SUCCESS);
		}catch(Exception e){
			return new ActionResult().setData(e.toString())
									  .setStatus(ActionResult.FAILURE);
		}

	}
	@RequestMapping(value="delete",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult delete(String tel) throws Exception{
		try{
			studentDao.removeStudent(tel);
			return new ActionResult().setStatus(ActionResult.SUCCESS);
		}catch(Exception e){
			return new ActionResult().setData(e.toString())
									  .setStatus(ActionResult.FAILURE);
		}
	}
	
}
