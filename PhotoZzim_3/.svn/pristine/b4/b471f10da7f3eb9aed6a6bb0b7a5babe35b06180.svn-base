package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vo.Friend;
import exception.DaoException;

@Repository 
public class FriendMySqlDao implements FriendDao {

	SqlSessionFactory sqlSessionFactory;
	
	
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	@Override
	public Collection<Map<String,String>> getFriendList(Friend friend) throws DaoException {
		SqlSession sqlSession= null;
		sqlSession= sqlSessionFactory.openSession();
		Collection<Map<String,String>> friendList =  sqlSession.selectList("dao.FriendDao.getFriendList",friend);
		sqlSession.close();
		return friendList;
	}
	@Override
	public int getFriendCheck(Friend friend) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.selectOne("dao.FriendDao.getFriendCheck", friend);
		sqlSession.close();
		return result;
	}
	@Override
	public int addFriend(Friend friend) throws DaoException {
		SqlSession sqlSession= null;
		sqlSession= sqlSessionFactory.openSession();
		int result =  sqlSession.insert("dao.FriendDao.addFriend",friend);
		sqlSession.close();
		return result;
	}

	@Override
	public int removeFriend(Friend friend) throws DaoException {
		SqlSession sqlSession= null;
		sqlSession= sqlSessionFactory.openSession();
		int result =  sqlSession.insert("dao.FriendDao.removeFriend",friend);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String,String>> getFpsList(Friend friend) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Map<String,String>> result = sqlSession.selectList("dao.FriendDao.getFpsList", friend);
		sqlSession.close();
		return result;
	}

	@Override
	public int updateFps(Friend friend) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.update("dao.FriendDao.updateFps", friend);
		sqlSession.close();
		return result;
	}
	@Override
	public int getFpsCount(String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.selectOne("dao.FriendDao.getFpsCount", uId);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String, String>> requestFriend(Friend friend)
			throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Map<String, String>> result = sqlSession.selectList("dao.FriendDao.requestFriend", friend);
		sqlSession.close();
		return result;
	}
}
