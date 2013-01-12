package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import service.PhotoService;
import service.ZzimService;
import vo.ActionResult;
import vo.Photo;
import vo.Zzim;

@Controller
@RequestMapping("/photo")
public class ZzimController extends BaseController{
	
	private PhotoService photoService;
	private ZzimService zzimService;
	@Autowired
	public void setZzimService(ZzimService zzimService) {
		this.zzimService = zzimService;
	}
	@Autowired
	public void setPhotoService(PhotoService photoService) {
		this.photoService = photoService;
	}

	@RequestMapping(value="/zzim/remove",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult removeZzim(String uid,String pPath) throws Exception{
		zzimService.removeZzim(uid, pPath);
		photoService.changeRef(new Photo().setpPath(pPath), -1);
		if(photoService.getRef(pPath) <= 0)
			photoService.removePhoto(pPath);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//친구 꺼 찜.
	@RequestMapping(value="/zzim/add",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult addZzim(Zzim zzim,String pPath) throws Exception{
		zzim.setpId(photoService.getPid(new Photo().setpPath(pPath)));
			if(!checkZzim((List<Zzim>)zzimService.getZzimAll(),zzim)){
				zzimService.addZzim(zzim);
				photoService.changeRef(new Photo().setpPath(pPath),1);
				return new ActionResult().setStatus(ActionResult.SUCCESS);
			}else{
				return new ActionResult().setMessage("내것을 찜할수없습니다.")
										.setStatus(ActionResult.FAILURE);
			}
	}
	public Boolean checkZzim(List<Zzim> list,Zzim other){
		for(Zzim z : list){
			if(z.getpId().equals(other.getpId()) &&
					z.getuId().equals(other.getuId())){
				return true;
			}
		}
		return false;
	} 
}
