package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import vo.ActionResult;
import vo.User;
import dao.UserDao;

@Controller
@RequestMapping("/app")
public class UserController extends BaseController {
	private UserDao userDao;

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
	@RequestMapping(value="/user/add", method=RequestMethod.POST)
	@ResponseBody
	public ActionResult addUser(User user) throws Exception{
			if(!userDao.getUserAll().contains(user))
				userDao.addUser(user);
			return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	@RequestMapping(value="/user/listall")
	@ResponseBody
	public ActionResult getUserAll() throws Exception{
			return new ActionResult().setStatus(ActionResult.SUCCESS)
									.setData(userDao.getUserAll());
	}

	@RequestMapping(value="/user/list" , method=RequestMethod.GET)
	@ResponseBody
	public ActionResult getUserList(User user) throws Exception{
		return new ActionResult().setData(userDao.getUserList(user))
								 .setStatus(ActionResult.SUCCESS);
	}

}
