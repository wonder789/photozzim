package dao;

import java.util.Collection;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import dao.StudentDao;
import exception.DaoException;
import vo.Student;
@Repository("studentDao")
public class StudentMySQLDao implements StudentDao {
	private SqlSessionFactory sqlSessionFactory;
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void addStudent(Student student) throws DaoException{
		SqlSession sqlSession  = null;
			sqlSession = sqlSessionFactory.openSession();
			sqlSession.insert("dao.StudentDao.addStudent",student);
			sqlSession.close();
	}

	public void updateStudent(Student student) throws DaoException{
		SqlSession sqlSession  = null;
		try{
			sqlSession = sqlSessionFactory.openSession();
			sqlSession.update("dao.StudentDao.updateStudent",student);
		}catch(Exception e){
			throw new DaoException(e);
		}finally{
			sqlSession.close();
		}
	}

	public Student getStudent(String no) throws DaoException{
		SqlSession sqlSession  = null;
		try{
			sqlSession = sqlSessionFactory.openSession();
			return sqlSession.selectOne("dao.StudentDao.getStudent", no);
		}catch(Exception e){
			throw new DaoException(e);
		}finally{
			sqlSession.close();
		}	
	}

	public Student removeStudent(String tel) throws DaoException {
		SqlSession sqlSession  = null;
		try{
			sqlSession = sqlSessionFactory.openSession();
			sqlSession.delete("dao.StudentDao.removeStudent",tel);
		}catch(Exception e){
			throw new DaoException(e);
		}finally{
		}	
		return null;
	}

	public Collection<Student> getStudentAll() throws DaoException{
		SqlSession sqlSession  = null;
		try{
			sqlSession = sqlSessionFactory.openSession();
			return sqlSession.selectList("dao.StudentDao.getStudentAll");
		}catch(Exception e){
			throw new DaoException(e);
		}finally{
			sqlSession.close();
		}
	}
}










