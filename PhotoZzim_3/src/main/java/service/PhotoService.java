package service;

import java.util.Collection;
import java.util.Map;

import vo.Photo;
import vo.Zzim;

public interface PhotoService {
	int addPhoto(Photo photo) throws Exception;
	int removePhoto(String pPath) throws Exception;
	Photo getPhoto(String pId) throws Exception;
	int changeRef(Photo photo,int num) throws Exception;
	int getRef(String pPath) throws Exception;
	Collection<Map<String,String>> getDayPhoto(String pDate, String uId) throws Exception;
	Collection<String> selectDateList(Zzim zzim) throws Exception;
	Collection<Photo> selectAllPhotoID() throws Exception;
	int changeZps(String uid,String pPath) throws Exception;
	Collection<Map<String,String>> loadDetail(Photo photo, int startNum, String uid, int nailNum) throws Exception;
	String getPid(Photo photo) throws Exception;
	int loadDetailNum(String uId, String pDate, String pPath) throws Exception;
	int loadDayNum(String uId, String pDate) throws Exception;
	Collection<Map<String,String>> loadSpread(String uId, int startNum, int nailNum) throws Exception;
	int loadSpreadNum(String uId, String pPath) throws Exception;
	Collection<String> loadDay(String uId, int startNum, int nailNum) throws Exception;
	Collection<Map<String, String>> loadUserPhoto(String uId, int startNum, int nailNum) throws Exception;
	int loadUserPhotoNum(String uId, String pPath) throws Exception;
	Collection<Photo> loadMyPhoto(Zzim zzim) throws Exception;
	int removeAlbum(String aPid) throws Exception;
}
