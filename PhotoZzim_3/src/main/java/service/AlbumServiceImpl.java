package service;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;

import dao.AlbumDao;

import vo.Album;
import vo.Photo;
@Service("albumservice")
public class AlbumServiceImpl implements AlbumService {
	private AlbumDao albumDao;
	
	@Required
	@Autowired
	public void setAlbumDao(AlbumDao albumDao) {
		this.albumDao = albumDao;
	}

	@Override
	public Collection<Map<String,String>> loadUserAlbum(String uId) throws Exception {
		return albumDao.loadUserAlbum(uId);
	}

	@Override
	public Collection<Album> loadFriendAlbum(String uId) throws Exception {
		return albumDao.loadFriendAlbum(uId);
	}

	@Override
	public int createAlbum(Album album) throws Exception {
		return albumDao.createAlbum(album);
	}

	@Override
	public int removeAlbum(int aId) throws Exception {
		return albumDao.removeAlbum(aId);
	}

	@Override
	public int updateAlbumPhoto(int aId, String pId) throws Exception {
		return albumDao.updateAlbumPhoto(aId, pId);
	}

	@Override
	public int updateAps(Album album) throws Exception {
		return albumDao.updateAps(album);
	}

	@Override
	public int updateAlbum(Album album) throws Exception {
		return albumDao.updateAlbum(album);
	}

	@Override
	public String existApid(int aId) throws Exception {
		return albumDao.existApid(aId);
	}

}
