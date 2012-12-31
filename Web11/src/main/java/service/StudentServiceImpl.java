package service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vo.Student;
import dao.StudentDao;
import exception.DaoException;
@Service("studentService")
public  class StudentServiceImpl implements StudentService {
	private StudentDao studentDao;
	
	@Required
	@Autowired
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}
	@Override
	@Transactional(rollbackFor=DaoException.class)
	public Collection<Student> getStudentList() throws Exception {
		return studentDao.getStudentAll();
	}
	@Override
	public int addStudent(Student student) throws Exception {
		studentDao.addStudent(student);
		return 0;
	}
	public int addStudent2(Student student) throws Exception {
		String tel = student.getTel();
		studentDao.addStudent(student.setTel(tel + "#####@@@@@"));
		return 0;
	}
	public int addStudent3(Student student) throws Exception {
		String tel = student.getTel();
		studentDao.addStudent(student.setTel(tel + "@@@@@@@@@@@@@@@"));
		return 0;
	}
	@Override
	public Student getStudent(String tel) throws Exception {
		return studentDao.getStudent(tel);
	}
	@Override
	public void changeStudent(Student student) throws Exception {
		studentDao.updateStudent(student);
	}
	@Override
	public void removeStudent(String tel) throws Exception {
		studentDao.removeStudent(tel);
	}

}
