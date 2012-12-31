package dao;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vo.Photo;
import vo.Zzim;
import exception.DaoException;

@Repository 
public class PhotoMySqlDao implements PhotoDao {
	SqlSessionFactory sqlSessionFactory;
	
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	@Override
	public int addPhoto(Photo photo) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.insert("dao.PhotoDao.addPhoto", photo);
		sqlSession.close();
		return result;
	}

	@Override
	public int removePhoto(String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.delete("dao.PhotoDao.removePhoto", pPath);
		sqlSession.close();
		return result;
	}

	@Override
	public Photo getPhoto(String pId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Photo result = sqlSession.selectOne("dao.PhotoDao.getPhoto", pId);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String,String>> getDayPhoto(String pDate, String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		Collection<Map<String,String>> result = mapper.getDayPhoto(pDate, uId);
		sqlSession.close();
		return result;
	}
	@Override
	public Collection<String> selectDateList(Zzim zzim) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<String> result = sqlSession
				.selectList("dao.PhotoDao.selectDate", zzim);
		sqlSession.close();
		return result;
	}


	@Override
	public int changeZps(String uid,String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		int result = mapper.changeZps(uid, pPath);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Photo> selectAllPhotoID() throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Photo> result = sqlSession.selectList("dao.PhotoDao.selectAllPhotoID");
		sqlSession.close();
		return result;
	}

	@Override
	public int changeRef(Photo photo,int num) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		int result = mapper.changeRef(photo, num);
		sqlSession.close();
		return result;	
	}

	@Override
	public int getRef(String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.selectOne("dao.PhotoDao.getRef",pPath);
		sqlSession.close();
		return result;	
	}
	@Override
	public Collection<Map<String,String>> loadDetail(Photo photo,int startNum ,String uid, int nailNum) throws DaoException{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		List<Map<String,String>> result = null;
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		result = (List<Map<String,String>>)mapper.loadDetail(photo,startNum,uid,nailNum);
		sqlSession.close();
		return result;
	}

	@Override
	public int loadDetailNum(String uId, String pDate, String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		int result = mapper.loadDetailNum(uId, pDate, pPath);
		result = result== 1 ? 0 : result;
		sqlSession.close();
		return result;
	}

	@Override
	public String getPid(Photo photo) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		String pId = sqlSession.selectOne("dao.PhotoDao.getPid",photo);
		sqlSession.close();
		return pId;
	}
	@Override
	public int loadDayNum(String uId, String pDate)
			throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		int result = mapper.loadDayNum(uId, pDate);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String,String>> loadSpread(String uId, int startNum, int nailNum) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		Collection<Map<String,String>> result = mapper.loadSpread(uId, startNum, nailNum);
		sqlSession.close();
		return result;
	}

	@Override
	public int loadSpreadNum(String uId, String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		int result = mapper.loadSpreadNum(uId, pPath);
		sqlSession.close();
		return result;
	}
	@Override
	public Collection<String> loadDay(String uId, int startNum, int nailNum) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		Collection<String> result = mapper.loadDay(uId, startNum, nailNum);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Map<String,String>> loadUserPhoto(String uId, int startNum, int nailNum) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		Collection<Map<String,String>> result = mapper.loadUserPhoto(uId, startNum, nailNum);
		sqlSession.close();
		return result;
	}

	@Override
	public int loadUserPhotoNum(String uId, String pPath) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		PhotoDao mapper = sqlSession.getMapper(PhotoDao.class);
		int result = mapper.loadUserPhotoNum(uId, pPath);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Photo> loadMyPhoto(Zzim zzim) throws DaoException {
		SqlSession sqlSession 	 = sqlSessionFactory.openSession();
		Collection<Photo> result = sqlSession.selectList("dao.PhotoDao.loadMyPhoto",zzim);
		sqlSession.close();
		return result;

	}

	@Override
	public int removeAlbum(String aPid) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.delete("dao.PhotoDao.removeAlbum", aPid);
		sqlSession.close();
		return result;
	}


}
