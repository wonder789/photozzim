package dao;

import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import vo.Group;
import vo.GroupUser;
import vo.Photo;
import exception.DaoException;

public interface GroupDao {
	Collection<Map<String,String>> loadGroup(String uId) throws DaoException;
	int groupOut(GroupUser groupUser) throws DaoException;
	Collection<Group> searchGroup(String gName) throws DaoException;
	int groupEnter(GroupUser groupUser) throws DaoException;
	int groupCreate(Group group) throws DaoException;
	int groupRemove(int gId) throws DaoException;
	int groupUserRemove(int gId) throws DaoException;
	int groupPhotoExist(int gId) throws DaoException;
	int groupPhotoAllRemove(int gId) throws DaoException;
	Collection<Map<String,String>> loadGroupUser(int gId) throws DaoException;
	Collection<Map<String,String>> loadGroupPhoto(@Param("gId")String gId,@Param("startNum")int startNum,@Param("nailNum")int nailNum) throws DaoException;
	int loadGroupUserNum(@Param("gId")String gId,@Param("pPath")String pPath) throws DaoException;
	int groupPhotoAdd(@Param("pPath")String pPath,@Param("gId")String gId) throws DaoException;
	int groupPhotoRemove(@Param("pPath")String pPath,@Param("gId")String gId) throws DaoException;
	int selectGid(Group group) throws DaoException;
	Collection<Map<String,String>> loadGroupInvite(String uId) throws DaoException;
	int groupUserPermit(GroupUser groupUser) throws DaoException;
	int updateGname(Group group) throws DaoException;
	int getGpsCount(String uId) throws DaoException;
}
