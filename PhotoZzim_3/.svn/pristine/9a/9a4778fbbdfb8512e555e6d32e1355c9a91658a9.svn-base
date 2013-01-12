package service;

import java.util.Collection;
import java.util.Map;

import vo.Album;
import vo.Photo;

public interface AlbumService {
	Collection<Map<String,String>> loadUserAlbum(String uId) throws Exception;
	Collection<Album> loadFriendAlbum(String uId) throws Exception;
	int createAlbum(Album album) throws Exception;
	int removeAlbum(int aId) throws Exception;
	int updateAlbumPhoto(int aId, String pId) throws Exception;
	int updateAps(Album album) throws Exception;
	int updateAlbum(Album album) throws Exception;
	String existApid(int aId) throws Exception;
}
