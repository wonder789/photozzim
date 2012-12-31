package dao;

import java.util.Collection;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import vo.Student;
import exception.DaoException;

public class StudentDaoImpl extends SqlSessionDaoSupport implements StudentDao {

	public void addStudent(Student student) throws DaoException{
			getSqlSession().insert("dao.StudentDao.addStudent",student);
			getSqlSession().commit();
	}

	public void updateStudent(Student student) throws DaoException{
			getSqlSession().update("dao.StudentDao.updateStudent",student);
			getSqlSession().commit();
	}

	public Student getStudent(String tel) throws DaoException{
			return getSqlSession().selectOne("dao.StudentDao.getStudent", tel);
	}

	public Student removeStudent(String tel) throws DaoException {
		 getSqlSession().delete("dao.StudentDao.removeStudent",tel);
		getSqlSession().commit();
		return null;
	}

	public Collection<Student> getStudentAll() throws DaoException{
			return getSqlSession().selectList("dao.StudentDao.getStudentAll");
	}
}










