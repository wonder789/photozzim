
package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import exception.DaoException;

import vo.Album;
import vo.Photo;

public interface AlbumDao {
	Collection<Map<String,String>> loadUserAlbum(String uId) throws DaoException;
	Collection<Album> loadFriendAlbum(String uId) throws DaoException;
	int createAlbum(Album album) throws DaoException;
	int removeAlbum(int aId) throws DaoException;
	int updateAlbumPhoto(@Param("aId")int aId,@Param("pId")String pPath) throws DaoException;
	int updateAps(Album album) throws DaoException;
	int updateAlbum(Album album) throws DaoException;
	String existApid(int aId) throws DaoException;
}
