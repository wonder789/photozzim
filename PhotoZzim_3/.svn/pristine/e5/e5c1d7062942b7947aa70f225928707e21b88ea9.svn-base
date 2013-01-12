package service;

import java.util.Collection;
import java.util.Map;

import exception.DaoException;

import vo.Friend;

public interface FriendService {
	Collection<Map<String,String>> getFriendList(Friend friend) throws Exception;
	Collection<Map<String,String>> getFpsList(Friend friend);
	int addFriend(Friend friend) throws Exception;
	int removeFriend(Friend friend) throws Exception;
	int updateFps(Friend friend) throws Exception;
	int getFriendCheck(Friend friend) throws Exception;
	int getFpsCount(String uId) throws Exception;
	Collection<Map<String,String>> requestFriend(Friend friend) throws Exception;
}
