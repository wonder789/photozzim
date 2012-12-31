package dao;

import java.util.Collection;
import java.util.Map;

import vo.Friend;
import exception.DaoException;

public interface FriendDao {
	Collection<Map<String,String>> getFriendList(Friend friend) throws DaoException;
	Collection<Map<String,String>> getFpsList(Friend friend);
	int addFriend(Friend friend) throws DaoException;
	int removeFriend(Friend friend) throws DaoException;
	int updateFps(Friend friend) throws DaoException;
	int getFriendCheck(Friend friend) throws DaoException;
	int getFpsCount(String uId) throws DaoException;
	Collection<Map<String,String>> requestFriend(Friend friend) throws DaoException;
}
