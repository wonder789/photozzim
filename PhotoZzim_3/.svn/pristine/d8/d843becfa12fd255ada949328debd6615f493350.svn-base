package service;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;

import vo.Group;
import vo.GroupUser;
import vo.Photo;
import dao.GroupDao;

@Service("groupservice")
public class GroupServiceImpl implements GroupService {
	private GroupDao groupDao;
	
	@Required
	@Autowired
	public void setGroupDao(GroupDao groupDao) {
		this.groupDao = groupDao;
	}

	@Override
	public Collection<Map<String,String>> loadGroup(String uId) throws Exception {
		return groupDao.loadGroup(uId);
	}
	
	@Override
	public int groupOut(GroupUser groupUser) throws Exception {
		return groupDao.groupOut(groupUser);
	}

	@Override
	public Collection<Group> searchGroup(String gName) throws Exception {
		return groupDao.searchGroup(gName);
	}

	@Override
	public int groupEnter(GroupUser groupUser) throws Exception {
		return groupDao.groupEnter(groupUser);
	}
	
	@Override
	public int groupCreate(Group group) throws Exception {
		return groupDao.groupCreate(group);
	}

	@Override
	public int groupRemove(int gId) throws Exception {
		return groupDao.groupRemove(gId);
	}
	
	@Override
	public int groupUserRemove(int gId) throws Exception {
		return groupDao.groupUserRemove(gId);
	}

	@Override
	public int groupPhotoExist(int gId) throws Exception {
		return groupDao.groupPhotoExist(gId);
	}

	@Override
	public int groupPhotoAllRemove(int gId) throws Exception {
		return groupDao.groupPhotoAllRemove(gId);
	}

	@Override
	public Collection<Map<String,String>> loadGroupUser(int gId) throws Exception {
		return groupDao.loadGroupUser(gId);
	}

	@Override
	public Collection<Map<String,String>> loadGroupPhoto(String gId, int startNum, int nailNum) throws Exception {
		return groupDao.loadGroupPhoto(gId, startNum, nailNum);
	}

	@Override
	public int loadGroupUserNum(String gId, String pPath) throws Exception {
		return groupDao.loadGroupUserNum(gId, pPath);
	}

	@Override
	public int groupPhotoAdd(String pPath, String gId) throws Exception {
		return groupDao.groupPhotoAdd(pPath, gId);
	}

	@Override
	public int groupPhotoRemove(String pPath, String gId) throws Exception {
		return groupDao.groupPhotoRemove(pPath, gId);
	}

	@Override
	public int selectGid(Group group) throws Exception {
		return groupDao.selectGid(group);
	}

	@Override
	public Collection<Map<String,String>> loadGroupInvite(String uId) throws Exception {
		return groupDao.loadGroupInvite(uId);
	}

	@Override
	public int groupUserPermit(GroupUser groupUser) throws Exception {
		return groupDao.groupUserPermit(groupUser);
	}

	@Override
	public int updateGname(Group group) throws Exception {
		return groupDao.updateGname(group);
	}

	@Override
	public int getGpsCount(String uId) throws Exception {
		return groupDao.getGpsCount(uId);
	}

	

	

	

}
