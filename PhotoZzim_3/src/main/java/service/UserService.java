package service;

import java.util.Collection;

import vo.User;

public interface UserService {
	int addUser(User user) throws Exception;
	int getUserCheck(int uId) throws Exception;
	Collection<User> getUserAll() throws Exception;
	Collection<User> getUserList(User user) throws Exception;
}
