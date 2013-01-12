package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vo.Zzim;
import exception.DaoException;

@Repository
public class ZzimMySqlDao implements ZzimDao {
	SqlSessionFactory sqlSessionFactory;
	
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	@Override
	public int addZzim(Zzim zzim) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.insert("dao.ZzimDao.addZzim", zzim);
		sqlSession.close();
		return result;
	}

	@Override
	public int removeZzim(String uid,String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		ZzimDao zzimDao = sqlSession.getMapper(ZzimDao.class);
		int result = zzimDao.removeZzim(uid, pPath);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Zzim> getZzim(String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Zzim> result = sqlSession.selectList("dao.ZzimDao.getZzim", uId);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Zzim> getZzimAll() throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Zzim> result = sqlSession.selectList("dao.ZzimDao.getZzimAll");
		sqlSession.close();
		return result;
	}

}
