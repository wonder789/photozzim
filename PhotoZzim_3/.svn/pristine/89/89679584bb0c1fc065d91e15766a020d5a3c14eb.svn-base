package service;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vo.Photo;
import vo.Zzim;
import dao.PhotoDao;
import exception.DaoException;

@Service("photoservice")
public class PhotoServiceImpl implements PhotoService {
	private PhotoDao photoDao;
	
	@Required
	@Autowired
	public void setPhotoDao(PhotoDao photoDao) {
		this.photoDao = photoDao;
	}
	
	@Override
	public Photo getPhoto(String pId) throws Exception {
		return photoDao.getPhoto(pId);
	}
	@Override
	public Collection<String> loadDay(String uId, int startNum, int nailNum) throws Exception {
		return photoDao.loadDay(uId, startNum, nailNum);
	}
	@Override
	public Collection<String> selectDateList(Zzim zzim) throws Exception {
		return photoDao.selectDateList(zzim);
	}
	@Override
	public Collection<Map<String,String>> getDayPhoto(String pDate, String uId) throws Exception {
		return photoDao.getDayPhoto(pDate, uId);
	}
	@Override
	public int getRef(String pPath) throws DaoException {
		return photoDao.getRef(pPath);
	}
	@Override
	public Collection<Map<String,String>> loadDetail( Photo photo,
			int startNum,String uid,  int nailNum)
					throws Exception {
		return photoDao.loadDetail(photo, startNum,uid, nailNum);
	}
	@Override
	public int loadDetailNum(String uId, String pDate, String pPath) throws Exception {
		return photoDao.loadDetailNum(uId, pDate, pPath);
	}
	@Override
	public Collection<Photo> selectAllPhotoID() throws DaoException {
		return photoDao.selectAllPhotoID();
	}
	@Override
	@Transactional(rollbackFor=Exception.class)
	public int addPhoto(Photo photo) throws Exception {
		return photoDao.addPhoto(photo);
	}

	@Override
	public int removePhoto(String pPath) throws Exception {
		return photoDao.removePhoto(pPath);
	}
	@Override
	public int changeZps(String uid, String pPath)	throws Exception {
		return photoDao.changeZps(uid, pPath);
	}
	@Override
	public int changeRef(Photo photo,int num) throws Exception {
		return photoDao.changeRef(photo,num);
	}
	@Override
	public String getPid(Photo photo) throws Exception {
		return photoDao.getPid(photo);
	}
	@Override
	public int loadDayNum(String uId, String pDate) throws Exception {
		return photoDao.loadDayNum(uId, pDate);
	}
	@Override
	public Collection<Map<String,String>> loadSpread(String uId, int startNum, int nailNum) throws Exception {
		return photoDao.loadSpread(uId, startNum, nailNum);
	}
	@Override
	public int loadSpreadNum(String uId, String pPath) throws Exception {
		return photoDao.loadSpreadNum(uId, pPath);
	}

	@Override
	public Collection<Map<String,String>> loadUserPhoto(String uId, int startNum, int nailNum)
			throws Exception {
		return photoDao.loadUserPhoto(uId, startNum, nailNum);
	}

	@Override
	public int loadUserPhotoNum(String uId, String pPath) throws Exception {
		return photoDao.loadUserPhotoNum(uId, pPath);
	}

	@Override
	public Collection<Photo> loadMyPhoto(Zzim zzim) throws Exception {
		return photoDao.loadMyPhoto(zzim);
	}

	@Override
	public int removeAlbum(String aPid) throws Exception {
		return photoDao.removeAlbum(aPid);
	}

}
