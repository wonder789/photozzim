package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vo.Album;
import vo.Photo;
import exception.DaoException;

@Repository
public class AlbumMySqlDao implements AlbumDao {
	SqlSessionFactory sqlSessionFactory;
	
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	@Override
	public Collection<Map<String,String>> loadUserAlbum(String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Map<String,String>> result = sqlSession.selectList("dao.AlbumDao.loadUserAlbum", uId);
		sqlSession.close();
		return result;
	}

	@Override
	public Collection<Album> loadFriendAlbum(String uId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Collection<Album> result = sqlSession.selectList("dao.AlbumDao.loadFriendAlbum", uId);
		sqlSession.close();
		return result;
	}

	@Override
	public int createAlbum(Album album) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.insert("dao.AlbumDao.createAlbum", album);
		sqlSession.close();
		return result;
	}

	@Override
	public int removeAlbum(int aId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.delete("dao.AlbumDao.removeAlbum", aId);
		sqlSession.close();
		return result;
	}

	@Override
	public int updateAlbumPhoto(int aId, String pId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		AlbumDao mapper = sqlSession.getMapper(AlbumDao.class);
		int result = mapper.updateAlbumPhoto(aId, pId);
		sqlSession.close();
		return result;
	}

	@Override
	public int updateAps(Album album) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.update("dao.AlbumDao.updateAps", album);
		sqlSession.close();
		return result;
	}

	@Override
	public int updateAlbum(Album album) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int result = sqlSession.update("dao.AlbumDao.updateAlbum", album);
		sqlSession.close();
		return result;
	}

	@Override
	public String existApid(int aId) throws DaoException {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		String result = sqlSession.selectOne("dao.AlbumDao.exiestApid", aId);
		sqlSession.close();
		return result;
	}

}
