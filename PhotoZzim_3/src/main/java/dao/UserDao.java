package dao;

import java.util.Collection;

import exception.DaoException;

import vo.User;

public interface UserDao {
	int addUser(User user) throws DaoException;
	int getUserCheck(int uId) throws DaoException;
	Collection<User> getUserAll() throws DaoException;
	Collection<User> getUserList(User user) throws DaoException;
}
