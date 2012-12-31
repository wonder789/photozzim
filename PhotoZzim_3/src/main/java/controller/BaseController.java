package controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import vo.ActionResult;


abstract public class BaseController  {
	@ExceptionHandler(Exception.class)
	@ResponseBody
	public ActionResult exception(Exception e){
		return new ActionResult().setData(e.toString())
								 .setStatus(ActionResult.FAILURE);
	}
}
