package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import exception.DaoException;

import service.GroupService;
import vo.ActionResult;
import vo.Group;
import vo.GroupUser;

@Controller
@RequestMapping("/photo")
public class GroupController extends BaseController {
	private GroupService groupService;
	
	@Autowired
	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}
	

	//그룹 모달 실행시 그룹 목록 불러오기
	@RequestMapping("/group/loadGroup")
	@ResponseBody
	public ActionResult loadGroup(String uId) throws Exception{
		return new ActionResult().setData(groupService.loadGroup(uId)).setStatus(ActionResult.SUCCESS);
	}
	
	//속해있는 그룹에서 탈퇴하기
	@RequestMapping("/group/groupOut")
	@ResponseBody
	public ActionResult groupOut(GroupUser groupUser) throws Exception {
		groupService.groupOut(groupUser);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//그룹 모달에서 참가할 그룹 찾기 (%abc%)
	@RequestMapping("/group/searchGroup")
	@ResponseBody
	public ActionResult searchGroup(String gName) throws Exception{
		gName = "%"+gName+"%";
		return new ActionResult().setData(groupService.searchGroup(gName)).setStatus(ActionResult.SUCCESS);
	}
	
	//찾은 그룹에 참가하기
	@RequestMapping("/group/groupEnter")
	@ResponseBody
	public ActionResult groupEnter(GroupUser groupUser) throws Exception{
		groupService.groupEnter(groupUser);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//그룹 추가하기 groupCreate,selectGid,groupEnter
	@RequestMapping("/group/groupCreate")
	@ResponseBody
	public ActionResult groupCreate(Group group) throws Exception{
		groupService.groupCreate(group);
		groupService.groupEnter(new GroupUser().setgId(groupService.selectGid(group)).setuId(group.getuId()).setgPs(true));
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//탈퇴 
	@RequestMapping("/group/groupRemove")
	@ResponseBody
	public ActionResult groupRemove(int gId) throws Exception{
		groupService.groupUserRemove(gId);
		if(groupService.groupPhotoExist(gId) > 0 )
			groupService.groupPhotoAllRemove(gId);
		groupService.groupRemove(gId);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//모달 그룹중 유저버튼선택 해서 그룹에 참가중인 유저목록 가져오기
	@RequestMapping("/group/loadGroupUser")
	@ResponseBody
	public ActionResult loadGroupUser(int gId) throws Exception{
		return new ActionResult().setData(groupService.loadGroupUser(gId)).setStatus(ActionResult.SUCCESS);
	}
	
	//모달 그룹중 사진버튼선택해서 그룹에 참조되어있는 사진목록 가져오기 
	@RequestMapping("/group/loadGroupPhoto")
	@ResponseBody
	public ActionResult loadGroupPhoto(String gId, String pPath, int nailNum) throws Exception{
		int startNum = 0;
		if(!pPath.equals(""))
			startNum = groupService.loadGroupUserNum(gId, pPath);
		return new ActionResult().setData(groupService.loadGroupPhoto(gId, startNum, nailNum)).setStatus(ActionResult.SUCCESS);
	}
	
	//모달 그룹중 사진추가버튼 선택해서 그룹에 사진 참조 시키기
	@RequestMapping("/group/groupPhotoAdd")
	@ResponseBody
	public ActionResult groupPhotoAdd(String pPath, String gId) throws Exception{
		groupService.groupPhotoAdd(pPath, gId);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//그룹에서 사진 제거 하기
	@RequestMapping("/group/groupPhotoRemove")
	@ResponseBody
	public ActionResult groupPhotoRemove(String pPath, String gId) throws Exception{
		groupService.groupPhotoRemove(pPath, gId);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	//그룹초대 조회하기
	@RequestMapping("/group/loadGroupInvite")
	@ResponseBody
	public ActionResult loadGroupInvite(String uId) throws Exception{
		return new ActionResult().setStatus(ActionResult.SUCCESS).setData(groupService.loadGroupInvite(uId));
	}
	
	//그룹초대 수락하기
	@RequestMapping("/group/groupUserPermit")
	@ResponseBody
	public ActionResult groupUserPermit(GroupUser groupUser) throws Exception{
		groupUser.setgPs(true);
		groupService.groupUserPermit(groupUser);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	@RequestMapping("/group/updateGname")
	@ResponseBody
	public ActionResult updateGname(Group group) throws Exception{
		return new ActionResult().setStatus(ActionResult.SUCCESS)
								.setData(groupService.updateGname(group));
	}
	
	@RequestMapping("/group/gpsCount")
	@ResponseBody
	public ActionResult getGpsCount(String uId) throws Exception{
		return new ActionResult().setStatus(ActionResult.SUCCESS)
								.setData(groupService.getGpsCount(uId));
	}
}
