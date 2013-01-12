package service;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vo.Friend;
import dao.FriendDao;
import exception.DaoException;
@Service("friendservice")
public class FriendServiceImpl implements FriendService {
	private FriendDao friendDao;

	@Required
	@Autowired
	public void setFriendDao(FriendDao friendDao) {
		this.friendDao = friendDao;
	}

	@Override
	public Collection<Map<String,String>> getFriendList(Friend friend) throws Exception {
		return friendDao.getFriendList(friend);
	}

	@Override
	@Transactional(rollbackFor=DaoException.class)
	public int addFriend(Friend friend) throws Exception {
		return friendDao.addFriend(friend);
	}

	@Override
	@Transactional(rollbackFor=DaoException.class)
	public int removeFriend(Friend friend) throws Exception {
		return friendDao.removeFriend(friend);
	}

	@Override
	public Collection<Map<String,String>> getFpsList(Friend friend) {
		return friendDao.getFpsList(friend);
	}

	@Override
	public int updateFps(Friend friend) throws Exception {
		return friendDao.updateFps(friend);
	}
	@Override
	public int getFriendCheck(Friend friend) throws DaoException {
		return friendDao.getFriendCheck(friend);
	}
	@Override
	public int getFpsCount(String uId) throws Exception {
		return friendDao.getFpsCount(uId);
	}

	@Override
	public Collection<Map<String, String>> requestFriend(Friend friend)
			throws Exception {
		return friendDao.requestFriend(friend);
	}
}
