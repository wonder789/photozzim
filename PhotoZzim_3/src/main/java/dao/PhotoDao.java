package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import vo.Photo;
import vo.Zzim;
import exception.DaoException;

public interface PhotoDao {
	int addPhoto(Photo photo) throws DaoException;
	int removePhoto(String pPath) throws DaoException;
	Photo getPhoto(String pId) throws DaoException;
	int changeRef(@Param("photo")Photo photo,@Param("num")int num) throws DaoException;
	int changeZps(@Param("uid")String uid,@Param("pPath")String pPath) throws DaoException;
	Collection<Map<String,String>> loadDetail
		(@Param("photo")Photo photo, @Param("startNum")int startNum,@Param("uId")String uid, @Param("nailNum")int nailNum)
									throws DaoException;
	int loadDetailNum(@Param("uId")String uId,@Param("pDate")String pDate,@Param("pPath")String pPath) throws DaoException;
	String getPid(Photo photo) throws DaoException;
	int getRef(String pPath) throws DaoException;
	Collection<Map<String,String>> getDayPhoto(@Param("pDate")String pDate,@Param("uId")String uId) throws DaoException;
	Collection<Photo> selectAllPhotoID() throws DaoException;
	Collection<String> selectDateList(Zzim zzim) throws DaoException;
	Collection<Photo> loadMyPhoto(Zzim zzim) throws DaoException;
	Collection<String> loadDay(@Param("uId")String uId, @Param("startNum")int startNum, @Param("nailNum")int nailNum) throws DaoException;
	int loadDayNum(@Param("uId")String uId,@Param("pDate")String pDate) throws DaoException;
	Collection<Map<String,String>> loadSpread(@Param("uId")String uId , @Param("startNum")int startNum, @Param("nailNum")int nailNum) throws DaoException;
	int loadSpreadNum(@Param("uId")String uId, @Param("pPath")String pPath) throws DaoException;
	Collection<Map<String, String>> loadUserPhoto(@Param("uId")String uId, @Param("startNum")int startNum, @Param("nailNum")int nailNum) throws DaoException;
	int loadUserPhotoNum(@Param("uId")String uId, @Param("pPath")String pPath) throws DaoException;
	int removeAlbum(String aPid) throws DaoException;
}
