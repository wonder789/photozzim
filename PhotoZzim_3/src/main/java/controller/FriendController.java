package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import service.FriendService;
import vo.ActionResult;
import vo.Friend;

@Controller
@RequestMapping("/photo")
public class FriendController extends BaseController {
	private FriendService friendService;
	
	@Autowired
	public void setFriendService(FriendService friendService) {
		this.friendService = friendService;
	}

	@RequestMapping("/friend/list")
	@ResponseBody
	public ActionResult getFriendList(Friend friend) throws Exception{
			return new ActionResult().setData(friendService.getFriendList(friend))
									 .setStatus(ActionResult.SUCCESS);
	}
	
	@RequestMapping(value="/friend/add", method=RequestMethod.GET)
	@ResponseBody
	public ActionResult addFd(Friend friend) throws Exception{
		friendService.addFriend(friend);
			return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	@RequestMapping(value="/friend/remove", method=RequestMethod.GET)
	@ResponseBody
	public ActionResult removeFriend(Friend friend) throws Exception{
		friendService.removeFriend(friend);
		friendService.removeFriend(new Friend().setuId(friend.getfId()).setfId(friend.getuId()));
			return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//친구요청온목록 조회 
	@RequestMapping(value="/friend/loadFpsList", method=RequestMethod.GET)
	@ResponseBody
	public ActionResult getFps(Friend friend){
		return new ActionResult().setStatus(ActionResult.SUCCESS)
								 .setData(friendService.getFpsList(friend));
	}
	//친구요청 수락 처리 
		@RequestMapping(value="/friend/updateFps", method=RequestMethod.GET)
		@ResponseBody
		public ActionResult updateFps(Friend friend) throws Exception{
			friend.setfPs(Friend.ACCEPT);
			if(friendService.getFriendCheck(friend) == 1){
				friendService.updateFps(friend);
			}else {
				friendService.addFriend(friend);
			}
			Friend reverse = new Friend().
					setuId(friend.getfId()).
					setfId(friend.getuId()).
					setfPs(Friend.ACCEPT);
			if(friendService.getFriendCheck(reverse) == 1){
				friendService.updateFps(reverse);
			}else {
				friendService.addFriend(reverse);
			}
			return new ActionResult().setStatus(ActionResult.SUCCESS);
		}
		
		@RequestMapping(value="/friend/requestFriend")
		@ResponseBody
		public ActionResult requestFriend(Friend friend) throws Exception{
			return new ActionResult().setStatus(ActionResult.SUCCESS).setData(friendService.requestFriend(friend));
		}
		
		@RequestMapping(value="/friend/fpsCount")
		@ResponseBody
		public ActionResult fPsCount(String uId) throws Exception{
			return new ActionResult().setStatus(ActionResult.SUCCESS)
							.setData(friendService.getFpsCount(uId));
		}
	
}
