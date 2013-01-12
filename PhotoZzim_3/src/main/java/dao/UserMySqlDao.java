package dao;

import java.util.Collection;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vo.User;
import exception.DaoException;
@Repository 
public class UserMySqlDao implements UserDao{
	SqlSessionFactory sqlSessionFactory;
	
	
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	
	@Override
	public int addUser(User user) throws DaoException {
		SqlSession sqlSession = null;
			sqlSession = sqlSessionFactory.openSession();
			int result = sqlSession.insert("dao.UserDao.addUser",user);
			sqlSession.close();
			return result;
	}


	@Override
	public Collection<User> getUserAll() throws DaoException {
		SqlSession sqlSession = null;
		sqlSession = sqlSessionFactory.openSession();
		Collection<User> getList = sqlSession.selectList("dao.UserDao.getUserAll");
		sqlSession.close();
		return getList;
	}


	@Override
	public Collection<User> getUserList(User user) throws DaoException {
		SqlSession sqlSession = null;
		sqlSession = sqlSessionFactory.openSession();
		Collection<User> getList = sqlSession.selectList("dao.UserDao.getUserList",user);
		sqlSession.close();
		return getList;

	}


	@Override
	public int getUserCheck(int uId) throws DaoException {
		SqlSession sqlSession = null;
		sqlSession = sqlSessionFactory.openSession();
		int count = sqlSession.selectOne("dao.UserDao.getUserCheck",uId);
		sqlSession.close();
		return count;
	}


}
