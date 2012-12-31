package service;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vo.Zzim;
import dao.ZzimDao;
import exception.DaoException;

@Service("zzimservice")
public class ZzimServiceImpl implements ZzimService {
	private ZzimDao zzimDao;
	
	@Required
	@Autowired
	public void setZzimDao(ZzimDao zzimDao) {
		this.zzimDao = zzimDao;
	}

	@Override
	@Transactional(rollbackFor=DaoException.class)
	public int addZzim(Zzim zzim) throws Exception {
		return zzimDao.addZzim(zzim);
	}

	@Override
	public int removeZzim(String uid,String pPath) throws Exception {
		return zzimDao.removeZzim(uid,pPath);
	}

	@Override
	public Collection<Zzim> getZzim(String uId) throws Exception {
		return zzimDao.getZzim(uId);
	}

	@Override
	public Collection<Zzim> getZzimAll() throws Exception {
		return zzimDao.getZzimAll();
	}

}
