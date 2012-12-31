package service;

import java.util.Collection;


import vo.Student;
public interface StudentService {
	Collection<Student> getStudentList() throws Exception;
	int addStudent(Student student) throws Exception;
	Student getStudent(String tel) throws Exception;
	void changeStudent(Student student) throws Exception;
	void removeStudent(String tel) throws Exception;
}
