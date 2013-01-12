package service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.UserDao;

import vo.User;
import exception.DaoException;

@Service("userservice")
public class UserServiceImpl implements UserService {
	private UserDao userDao;
	
	@Required
	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	@Transactional(rollbackFor=DaoException.class)
	public int addUser(User user) throws Exception {
		return userDao.addUser(user);
	}

	@Override
	public Collection<User> getUserAll() throws Exception {
		return userDao.getUserAll();
	}

	@Override
	public Collection<User> getUserList(User user) throws Exception {
		return userDao.getUserList(user);
	}

	@Override
	public int getUserCheck(int uId) throws Exception {
		return userDao.getUserCheck(uId);
	}

}
