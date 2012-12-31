package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vo.Group;
import vo.GroupUser;
import vo.Photo;
import exception.DaoException;

@Repository
public class GroupMySqlDao implements GroupDao {
	SqlSessionFactory sqlSessionFactory;
	
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	@Override
	public Collection<Map<String,String>> loadGroup(String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Map<String,String>> result = sqlSession.selectList("dao.GroupDao.loadGroup", uId);
		sqlSession.close();
		return result;
	}
	
	@Override
	public int groupOut(GroupUser groupUser) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.delete("dao.GroupDao.groupOut", groupUser);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Group> searchGroup(String gName) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Group> result = sqlSession.selectList("dao.GroupDao.searchGroup", gName);
		sqlSession.close();
		return result;
	}

	@Override
	public int groupEnter(GroupUser groupUser) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.insert("dao.GroupDao.groupEnter", groupUser);
		sqlSession.close();
		return result;
	}
	
	@Override
	public int groupCreate(Group group) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.insert("dao.GroupDao.groupCreate", group);
		sqlSession.close();
		return result;
	}

	@Override
	public int groupRemove(int gId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.delete("dao.GroupDao.groupRemove", gId);
		sqlSession.close();
		return result;
	}
	
	@Override
	public int groupUserRemove(int gId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.delete("dao.GroupDao.groupUserRemove", gId);
		sqlSession.close();
		return result;
	}

	@Override
	public int groupPhotoExist(int gId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.selectOne("dao.GroupDao.groupPhotoExist", gId);
		sqlSession.close();
		return result;
	}

	@Override
	public int groupPhotoAllRemove(int gId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.delete("dao.GroupDao.groupPhotoAllRemove", gId);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String,String>> loadGroupUser(int gId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Map<String,String>> result = sqlSession.selectList("dao.GroupDao.loadGroupUser", gId);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String,String>> loadGroupPhoto(String gId, int startNum, int nailNum) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		GroupDao mapper = sqlSession.getMapper(GroupDao.class);
		Collection<Map<String,String>> result = mapper.loadGroupPhoto(gId, startNum, nailNum);
		sqlSession.close();
		return result;
	}

	@Override
	public int loadGroupUserNum(String gId, String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		GroupDao mapper = sqlSession.getMapper(GroupDao.class);
		int result = mapper.loadGroupUserNum(gId, pPath);
		sqlSession.close();
		return result;
	}

	@Override
	public int groupPhotoAdd(String pPath, String gId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		GroupDao mapper = sqlSession.getMapper(GroupDao.class);
		int result = mapper.groupPhotoAdd(pPath, gId);
		sqlSession.close();
		return result;
	}

	@Override
	public int groupPhotoRemove(String pPath, String gId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		GroupDao mapper = sqlSession.getMapper(GroupDao.class);
		int result = mapper.groupPhotoRemove(pPath, gId);
		sqlSession.close();
		return result;
	}

	@Override
	public int selectGid(Group group) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result  = sqlSession.selectOne("dao.GroupDao.selectGid", group);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String,String>> loadGroupInvite(String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Map<String,String>> result = sqlSession.selectList("dao.GroupDao.loadGroupInvite", uId);
		sqlSession.close();
		return result;
	}

	@Override
	public int groupUserPermit(GroupUser groupUser) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.update("dao.GroupDao.groupUserPermit", groupUser);
		sqlSession.close();
		return result;
	}

	@Override
	public int updateGname(Group group) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.update("dao.GroupDao.updateGname", group);
		sqlSession.close();
		return result;
	}

	@Override
	public int getGpsCount(String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.selectOne("dao.GroupDao.getGpsCount",uId);
		sqlSession.close();
		return result;
	}

}
