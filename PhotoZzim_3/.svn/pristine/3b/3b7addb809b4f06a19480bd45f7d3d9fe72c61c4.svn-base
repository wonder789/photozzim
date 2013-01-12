package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import vo.Zzim;
import exception.DaoException;

public interface ZzimDao {
	int addZzim(Zzim zzim) throws DaoException;
	int removeZzim(@Param("uid")String uid, @Param("pPath")String pPath) throws DaoException;
	Collection<Zzim> getZzim(String uId) throws DaoException;
	Collection<Zzim> getZzimAll() throws DaoException;
}
