package service;

import java.util.Collection;
import java.util.Map;

import vo.Zzim;

public interface ZzimService {
	int addZzim(Zzim zzim) throws Exception;
	int removeZzim(String uid,String pPath) throws Exception;
	Collection<Zzim> getZzim(String uId) throws Exception;
	Collection<Zzim> getZzimAll() throws Exception;
}
