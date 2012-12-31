package dao;

import java.util.Collection;

import exception.DaoException;

import vo.Student;

public interface StudentDao {
	/* public static final */
	boolean WORKING = true;
	boolean NO_WORKING = false;
	
	/*abstract*/ /*public*/
	void addStudent(Student student) throws DaoException;
	Student getStudent(String tel) throws DaoException;
	Student removeStudent(String tel) throws DaoException;
	Collection<Student> getStudentAll() throws DaoException;
	void updateStudent(Student student) throws DaoException;
	
  
}
