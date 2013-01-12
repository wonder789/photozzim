package service;

import java.util.Collection;
import java.util.Map;

import exception.DaoException;

import vo.Group;
import vo.GroupUser;
import vo.Photo;

public interface GroupService {
	Collection<Map<String,String>> loadGroup(String uId) throws Exception;
	int groupOut(GroupUser groupUser) throws Exception;
	Collection<Group> searchGroup(String gName) throws Exception;
	int groupEnter(GroupUser groupUser) throws Exception;
	int groupCreate(Group group) throws Exception;
	int groupRemove(int gId) throws Exception;
	int groupUserRemove(int gId) throws Exception;
	int groupPhotoExist(int gId) throws Exception;
	int groupPhotoAllRemove(int gId) throws Exception;
	Collection<Map<String,String>> loadGroupUser(int gId) throws Exception;
	Collection<Map<String,String>> loadGroupPhoto(String gId, int startNum, int nailNum) throws Exception;
	int loadGroupUserNum(String gId, String pPath) throws Exception;
	int groupPhotoAdd(String pPath, String gId) throws Exception;
	int groupPhotoRemove(String pPath, String gId) throws Exception;
	int selectGid(Group group) throws Exception;
	Collection<Map<String,String>> loadGroupInvite(String uId) throws Exception;
	int groupUserPermit(GroupUser groupUser) throws Exception;
	int updateGname(Group group) throws Exception;
	int getGpsCount(String uId) throws Exception;
}
